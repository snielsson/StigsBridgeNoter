/**
 * Replace raw ♥ and ♦ symbols with red-colored spans in HTML text.
 * Skips symbols already inside a span.h or span.d tag.
 */
export function colorSuits(html: string): string {
  const parts = html.split(/(<[^>]+>)/);
  let insideRedSpan = false;

  return parts.map(part => {
    if (part.startsWith('<')) {
      if (part.match(/class="[hd]"/)) insideRedSpan = true;
      if (part === '</span>' && insideRedSpan) { insideRedSpan = false; return part; }
      return part;
    }
    if (insideRedSpan) return part;
    return part
      .replace(/♥/g, '<span class="suit-red">♥</span>')
      .replace(/♦/g, '<span class="suit-red">♦</span>');
  }).join('');
}
