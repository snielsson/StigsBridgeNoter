export const H = '<span class="h">♥</span>';
export const D = '<span class="d">♦</span>';
export const S = '<span class="s">♠</span>';
export const C = '<span class="c">♣</span>';

export function hand(sp: string, he: string, di: string, cl: string, lbl = ''): string {
  return `<div class="hand">
    <div class="hrow">${S} ${sp}</div>
    <div class="hrow">${H} ${he}</div>
    <div class="hrow">${D} ${di}</div>
    <div class="hrow">${C} ${cl}</div>
    ${lbl ? `<div class="hand-lbl">${lbl}</div>` : ''}
  </div>`;
}

export function tree(txt: string): string {
  return `<div class="tree">${txt}</div>`;
}

export function rb(txt: string, cls = ''): string {
  return `<div class="rbox ${cls}">${txt}</div>`;
}

export function tip(txt: string): string {
  return `<div class="tip"><div class="tip-i">💡</div><div>${txt}</div></div>`;
}

export function tbl(hdrs: string[], rows: string[][]): string {
  const th = hdrs.map(h => `<th>${h}</th>`).join('');
  const tr = rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<table class="tbl"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
}

interface AuctionBid {
  b?: string;
  tip?: string;
  hp?: string;
  why?: string;
}

export function auction(title: string, dealer: string, vul: string, bids: (AuctionBid | string | null)[]): string {
  const seats = ['N', 'Ø', 'S', 'V'];
  const dealerMap: Record<string, number> = { 'N': 0, 'E': 1, 'S': 2, 'W': 3, 'Ø': 1, 'V': 3 };
  const dealerIdx = dealerMap[dealer] || 0;
  const vulMap: Record<string, string> = {
    'none': 'Ingen sårbare', 'NS': 'N/S sårbare', 'EW': 'Ø/V sårbare', 'Ø/V': 'Ø/V sårbare',
    'N/S': 'N/S sårbare', 'ALL': 'Alle sårbare', 'all': 'Alle sårbare'
  };
  const vulStr = vulMap[vul] || vul || '';

  const fmt = (b: string) => b.replace(/♠/g, '<span class="s">♠</span>')
    .replace(/♥/g, '<span class="h">♥</span>')
    .replace(/♦/g, '<span class="d">♦</span>')
    .replace(/♣/g, '<span class="c">♣</span>');

  const bidCls = (b: string) => {
    if (!b || b === '-') return 'empty';
    const u = b.toUpperCase();
    if (u === 'PAS' || u === 'PASS') return 'pas';
    if (u === 'X' || u === 'DBL') return 'dbl';
    if (u === 'XX' || u === 'RDBL') return 'rdbl';
    return 'open';
  };

  const hdr = seats.map(s => `<div class="auction-seat">${s}</div>`).join('');
  const cells: string[] = [];

  for (let i = 0; i < dealerIdx; i++) cells.push('<div class="auction-cell empty"></div>');

  bids.forEach(bid => {
    if (!bid || bid === null) { cells.push('<div class="auction-cell empty"></div>'); return; }
    const bstr = typeof bid === 'string' ? bid : (bid.b || '');
    const isEmpty = !bstr || bstr === '-';
    const cls = bidCls(bstr);
    if (isEmpty) { cells.push('<div class="auction-cell empty"></div>'); return; }
    const bidObj = typeof bid === 'string' ? null : bid;
    const hasTip = bidObj && (bidObj.tip || bidObj.hp || bidObj.why);
    const tipHtml = hasTip ? `<div class="auction-tip">
      <div class="auction-tip-bid">${fmt(bstr)}</div>
      ${bidObj.tip ? `<div>${bidObj.tip}</div>` : ''}
      ${bidObj.hp ? `<div class="auction-tip-hp">${bidObj.hp}</div>` : ''}
      ${bidObj.why ? `<div class="auction-tip-why">${bidObj.why}</div>` : ''}
    </div>` : '';
    cells.push(`<div class="auction-cell${hasTip ? ' has-tip' : ''}">
      <span class="auction-bid ${cls}">${fmt(bstr)}</span>
      ${tipHtml}
    </div>`);
  });

  while (cells.length % 4 !== 0) cells.push('<div class="auction-cell empty"></div>');

  return `<div class="auction">
    <div class="auction-title">${title}${vulStr ? ' &nbsp;·&nbsp; ' + vulStr : ''}</div>
    <div class="auction-grid">${hdr}${cells.join('')}</div>
  </div>`;
}
