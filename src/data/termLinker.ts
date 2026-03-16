import { dictionaryData, type DictEntry } from './dictionary';
import { colorSuits } from './colorSuits';

// Build a flat lookup map: lowercase term -> entry
const termMap = new Map<string, DictEntry & { letter: string }>();
const allTerms: string[] = [];

for (const grp of dictionaryData) {
  for (const entry of grp.entries) {
    const key = entry.term.toLowerCase();
    termMap.set(key, { ...entry, letter: grp.letter });
    allTerms.push(entry.term);

    // Also index short forms: "Jacoby overføring" -> also match "Jacoby"
    // "Fordelingspoint (FP)" -> also match "Fordelingspoint", "FP"
    const parenMatch = entry.term.match(/^(.+?)\s*\((.+?)\)$/);
    if (parenMatch) {
      const main = parenMatch[1].trim();
      const abbr = parenMatch[2].trim();
      if (!termMap.has(main.toLowerCase())) {
        termMap.set(main.toLowerCase(), { ...entry, letter: grp.letter });
        allTerms.push(main);
      }
      if (abbr.length >= 2 && !termMap.has(abbr.toLowerCase())) {
        termMap.set(abbr.toLowerCase(), { ...entry, letter: grp.letter });
        allTerms.push(abbr);
      }
    }

    // Index alt names too (split by · or /)
    if (entry.alt) {
      for (const alt of entry.alt.split(/[·/]/).map(s => s.trim())) {
        const stripped = alt.replace(/\s*\(eng\.\)\s*/i, '').trim();
        if (stripped.length >= 3 && !termMap.has(stripped.toLowerCase())) {
          termMap.set(stripped.toLowerCase(), { ...entry, letter: grp.letter });
          allTerms.push(stripped);
        }
      }
    }
  }
}

// Sort by length descending so longer terms match first
const sortedTerms = [...new Set(allTerms)]
  .filter(t => t.length >= 2)
  .sort((a, b) => b.length - a.length);

// Build regex: match any term as whole word (not inside HTML tags)
const escaped = sortedTerms.map(t =>
  t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
);
const termRegex = new RegExp(`(?<![\\w/])(?:${escaped.join('|')})(?![\\w])`, 'gi');

/**
 * Process HTML string and wrap recognized dictionary terms in clickable links.
 * Skips content inside HTML tags and already-linked terms.
 */
export function linkTerms(html: string): string {
  // Split into tag and text segments
  const parts = html.split(/(<[^>]+>)/);
  let insideLink = false;

  const linked = parts.map(part => {
    if (part.startsWith('<')) {
      if (part.match(/<a\s/i) || part.match(/class="term-link"/)) insideLink = true;
      if (part.match(/<\/a>/i)) insideLink = false;
      return part;
    }
    if (insideLink) return part;

    return part.replace(termRegex, (match) => {
      const entry = termMap.get(match.toLowerCase());
      if (!entry) return match;
      return `<a class="term-link" data-term="${entry.term}" tabindex="0">${match}</a>`;
    });
  }).join('');

  return colorSuits(linked);
}

/**
 * Look up a term in the dictionary
 */
export function lookupTerm(term: string): (DictEntry & { letter: string }) | undefined {
  return termMap.get(term.toLowerCase());
}

export { termMap };
