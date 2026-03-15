import { H, D, S, C, hand, tree, rb, tip, tbl, auction } from './helpers';

export interface Quiz {
  question: string;
  hand?: string;
  options: string[];
  correct: number;
  explain: string;
}

export interface Lesson {
  short: string;
  title: string;
  cat: string;
  bg: string;
  intro: string;
  quiz?: Quiz;
  content: string;
}

export const lessons: Lesson[] = [

// ═══════════════════════════════════════════
// L1
// ═══════════════════════════════════════════
{short:'Spil uden trumf',title:'Stik og spil uden trumf',cat:'Spilforståelse',bg:'♠',
intro:`Et bridge-bræt består af 13 stik. Her lægger du grundlaget: hvad er et stik, hvad vil "uden trumf" sige, og hvilken bonus er der for 3NT?`,
quiz:{question:`Du spiller 3NT (sanstrumf). Modstanderne vinder 5 stik. Du vinder 8. Hvad sker der?`,options:['Du gennemfører — 8 stik er nok','Du misser — du mangler 1 stik','Det afhænger af kortenes fordeling','Spillet spilles om'],correct:1,explain:`3NT kræver præcis 9 stik (6+3). Du vandt kun 8 → du misser kontrakten med 1 undertrick.`},
content:`
<h2>De fire roller</h2>
${rb(`<strong>Nord og Syd</strong> er ét makkerpar. <strong>Øst og Vest</strong> er det andet. Makkerparret der vinder auktionen kaldes det <em>spilførende makkerpar</em>. Deres modparter er <em>forsvarsspillerne</em>.`)}

<h2>Et stik</h2>
<p>Et <strong>stik</strong> er én runde: alle fire spillere spiller ét kort i tur. Det højeste kort i den <em>udspilte kulør</em> vinder stikket — medmindre nogen trumfer (se lektion 2). Vinneren af et stik spiller ud til næste stik.</p>
${rb(`<strong>Kulørpligt:</strong> Man skal altid følge kulør — spille et kort i samme kulør som den der spilledes ud. Har man ikke den kulør, kan man spille hvilket som helst kort.`,'r')}

<h2>Kortstyrke inden for én kulør</h2>
<div class="pts">
  <div class="pt-item"><div class="pt-card">A</div><div class="pt-lbl">Es (højest)</div></div>
  <div class="pt-item"><div class="pt-card">K</div><div class="pt-lbl">Konge</div></div>
  <div class="pt-item"><div class="pt-card">Q</div><div class="pt-lbl">Dame</div></div>
  <div class="pt-item"><div class="pt-card">J</div><div class="pt-lbl">Knægt</div></div>
  <div class="pt-item"><div class="pt-card" style="font-size:14px">10–2</div><div class="pt-lbl">Smallkort</div></div>
</div>

<h2>Sanstrumf (NT)</h2>
<p>Når kontrakten er i <strong>sanstrumf (NT)</strong>, er der ingen trumfkulør. Det højeste kort i den udspilte kulør vinder altid stikket. Har man ingen kort i den udspilte kulør, spiller man et tilfældigt kort — men det vinder ikke.</p>
${tbl(['Kontrakt','Stik nødvendigt','Stikværdi','Bonus','Type'],[
  ['1NT','7 stik','40+30=70 pt','50 pt','Delkontrakt'],
  ['2NT','8 stik','40+30+30=100 pt','50 pt','Parti (lige præcis)'],
  ['3NT','9 stik','40+30+30+30=130 pt','300/500 pt','Parti'],
])}
${tip(`3NT = 9 stik er den mest populære partikontrakt. Kræver kun 25+ HP tilsammen og 9 stik — mens major kræver 10 stik og minor hele 11.`)}

<h2>Eksempel-hånd</h2>
<div style="display:flex;flex-wrap:wrap">
  ${hand('A K 7 2','Q 5','K 8 4','J 9 6 3','Nord (spilfører)')}
  ${hand('6 5','A K J 8 3','Q 7 2','A 5 2','Syd (bord)')}
</div>
<p>Kontrakten er 3NT. Nord/Syds plan: Tag 2 stik i spar (♠AK), 3 stik i hjerte (løb igennem med ♥KQJ), 1 i ruder, 2 i klør = 8 stik. Vi mangler 1. Må forsøge at etablere det 9. stik i ruder ved at spille mod ♦A.</p>
`},

// ═══════════════════════════════════════════
// L2
// ═══════════════════════════════════════════
{short:'Stik med trumf',title:'Trumfkort og kulørrangorden',cat:'Spilforståelse',bg:'♥',
intro:`Trumfkort ændrer dynamikken fuldstændigt. Her defineres trumf præcist, kulørrangordenen forklares, og du lærer hvilken partikontrakt der er lettest at nå.`,
quiz:{question:`Trumf er ${S} spar. Syd spiller ud med ${H}A. Øst har ingen hjerter og trumfer med ${S}2. Hvad sker der?`,options:[`${S}2 vinder stikket`,`${H}A vinder — det er det højeste kort`,`Stikket annulleres`,`Øst skal spille en anden kulør`],correct:0,explain:`${S}2 er trumf. Et trumfkort slår ethvert ikke-trumfkort — selv det højeste es i en anden kulør.`},
content:`
<h2>Definition: Trumf</h2>
${rb(`<strong>Trumfkuløren</strong> er den kulør der er valgt i kontrakten (fx 4${H}). Trumfkort slår <em>alle</em> kort i andre kulører. Det mindste trumfkort (2) slår det højeste es (A) i en anden kulør — men <em>kun</em> hvis man ikke har den udspilte kulør.`)}

<h2>Kulørrangorden i meldesystemet</h2>
${tbl(['Kulør','Rang','Point pr. stik','Partimelding','Stik til parti'],[
  [`${S} Spar`,'Major (2.)','30 pt','4♠','10'],
  [`${H} Hjerte`,'Major (1.)','30 pt','4♥','10'],
  [`${D} Ruder`,'Minor (2.)','20 pt','5♦','11'],
  [`${C} Klør`,'Minor (1.)','20 pt','5♣','11'],
  ['NT','(over major)','40+30 pt','3NT','9'],
])}
${rb(`<strong>Major (${S}${H}):</strong> Foretrukne partikontrakter. 10 stik. Kræver 8-korts fit tilsammen og 25+ HP.<br><br><strong>Minor (${D}${C}):</strong> Sværere parti (11 stik). Undgå minor-parti hvis muligt — søg 3NT eller major i stedet.`,'g')}

<h2>Fit — minimumskravet for trumfkontrakt</h2>
<p>Et <strong>fit</strong> er at makkerparret tilsammen har 8 eller flere kort i samme kulør. Med 8-korts fit har I nok trumf til at kontrollere kuløren og forhindre modstanderne i at trumfe jer.</p>
${tree(`Du:   4 kort i ${H}
Makker: 4 kort i ${H}
= 8-korts ${H}-fit → <span class="ok">spil i hjerter</span>

Du:   3 kort i ${H}
Makker: 4 kort i ${H}
= 7-korts fit → <span class="no">utilstrækkeligt — søg alternativ</span>`)}
${tip(`Prioritering: Søg altid 8-korts major-fit FØRST. Ingen major-fit → overvej 3NT. Ingen NT-stopper → spil i minor som sidst udvej.`)}

<h2>Strafferegning ved kontraktmiss</h2>
${tbl(['Sårbarhed','Pr. undertrick (udobleret)'],[
  ['Ubeskyttet','50 point'],
  ['Beskyttet','100 point'],
])}
`},

// ═══════════════════════════════════════════
// L3-4
// ═══════════════════════════════════════════
{short:'Meldinger & bonus',title:'Meldeauktionen og bonussystemet',cat:'Spilforståelse',bg:'?',
intro:`Auktionen er kommunikationskanalen mellem makkerparret. Hver melding bærer præcis information om håndens styrke og fordeling. Her defineres alle grundbegreber.`,
quiz:{question:`Hvad er det samlede antal HP i en hel pakke?`,options:['32','36','40','44'],correct:2,explain:`Es=4, Konge=3, Dame=2, Knægt=1. 4 kulører × (4+3+2+1) = 4 × 10 = 40 HP.`},
content:`
<h2>Auktionens struktur</h2>
<p>Auktionen forløber med uret fra <strong>åbneren</strong> (den første der melder andet end pas). Den slutter når tre spillere passer i træk. Den endelige melding fastlægger <strong>kontrakten</strong>: niveau + kulør/NT.</p>
${rb(`En melding "3${H}" betyder: "Makkerparret lover at tage mindst 9 stik (6+3) med hjerte som trumf." En melding fortæller ALTID to ting: (1) antal stik over 6 og (2) hvad trumfkuløren er.`)}

<h2>Højdepointsystem (HP)</h2>
<div class="pts">
  <div class="pt-item"><div class="pt-card">A</div><div class="pt-lbl">= 4 HP</div></div>
  <div class="pt-item"><div class="pt-card">K</div><div class="pt-lbl">= 3 HP</div></div>
  <div class="pt-item"><div class="pt-card">Q</div><div class="pt-lbl">= 2 HP</div></div>
  <div class="pt-item"><div class="pt-card">J</div><div class="pt-lbl">= 1 HP</div></div>
</div>
<p>Total i pakken: <strong>40 HP</strong>. Gennemsnit pr. hånd: 10 HP. Med 26+ HP tilsammen er parti normalt muligt.</p>

<h2>Bonussystem</h2>
${tbl(['Kontrakt','Stikværdi krav','Bonus ubeskyttet','Bonus beskyttet'],[
  ['Delkontrakt','Under 100 pt','50 pt','50 pt'],
  ['Parti','100+ pt','300 pt','500 pt'],
  ['Lilleslem (6-trinnet)','190+ pt','500 pt','750 pt'],
  ['Storeslem (7-trinnet)','220+ pt','1000 pt','1500 pt'],
])}

<h2>Partigrænsen</h2>
${tbl(['Kontrakt','Stikværdi','Parti?'],[
  ['3NT','40+30+30+30 = 130 pt','✓ JA'],
  ['4♥ eller 4♠','4×30 = 120 pt','✓ JA'],
  ['5♣ eller 5♦','5×20 = 100 pt','✓ JA'],
  ['3♥','3×30 = 90 pt','✗ NEJ (delkontrakt)'],
  ['4♦','4×20 = 80 pt','✗ NEJ (delkontrakt)'],
])}
${tip(`Memorér: Major-parti = 4-trinnet. NT-parti = 3-trinnet. Minor-parti = 5-trinnet. Søg altid major eller NT frem for minor.`)}

<h2>Slemgrænser</h2>
${rb(`<strong>Lilleslem:</strong> 6-trinnet = 12 stik. Kræver normalt 33+ HP tilsammen.<br><strong>Storeslem:</strong> 7-trinnet = alle 13 stik. Kræver normalt 37+ HP tilsammen.`,'g')}
`},

// ═══════════════════════════════════════════
// L "3b" = index 3: Kortfordeling
// ═══════════════════════════════════════════
{short:'Kortfordeling',title:'Kortfordeling og håndtyper',cat:'Spilforståelse',bg:'4',
intro:`Pointtal alene er ikke nok. To hænder med 15 HP kan spille meget forskelligt afhængigt af fordeling. Her defineres alle centrale håndtyper.`,
quiz:{question:`Fordeling 4-4-3-2: er denne hånd afbalanceret?`,options:['Ja — 4-4-3-2 er en af de tre afbalancerede fordelinger','Nej — den har for mange kort i major','Det afhænger af hvilke kulører der er 4-korts','Ja, men kun hvis man har stopper i alle kulører'],correct:0,explain:`De tre afbalancerede fordelinger er: 4-3-3-3, 4-4-3-2, og 5-3-3-2. 4-4-3-2 er altså afbalanceret.`},
content:`
<h2>Fordelingsbetegnelse</h2>
<p>En hånds <strong>fordeling</strong> angives som antallet af kort i de fire kulører, fra højeste til laveste. Fx 5-4-3-1 = én 5-korts kulør, én 4-korts, én 3-korts, én singletons.</p>

<h2>Afbalancerede fordelinger</h2>
${rb(`En hånd er <strong>afbalanceret</strong> hvis fordelingen er:<br>
• 4-3-3-3<br>
• 4-4-3-2<br>
• 5-3-3-2<br><br>
Ingen void (0-korts kulør), ingen singleton (1-korts kulør), højst én doubleton (2-korts kulør).`,'g')}
${tip(`Afbalancerede hænder egner sig til NT-åbninger (1NT, 2NT). De vises med en NT-melding frem for en kulør.`)}

<h2>Uafbalancerede fordelinger</h2>
${tbl(['Fordeling','Betegnelse','Bemærkning'],[
  ['5-4-2-2','Tofarvet','To lange kulører — vis begge'],
  ['5-5-2-1','Tofarvet, stærk','Meget spilstyrke'],
  ['6-3-2-2','Ensfarvet','Lang 6-korts kulør'],
  ['7-2-2-2','Ensfarvet, stærk','Kandidat til spærremelding'],
  ['x-x-x-0','Void','Ingen kort i én kulør — stor trumfstyrke'],
  ['x-x-x-1','Singleton','Ét kort i én kulør'],
  ['x-x-2-2','Doubleton','To kort i én kulør'],
])}

<h2>Distributionspoint (valgfrit i Ny Nordisk)</h2>
<p>Udover HP kan man tælle distributionspoint for korte kulører når man har fit:</p>
${tbl(['Kulørlængde','Distributionspoint (med fit)'],[
  ['Void (0 kort)','5 pt'],
  ['Singleton (1 kort)','3 pt'],
  ['Doubleton (2 kort)','1 pt'],
])}
${rb(`<strong>OBS:</strong> I ren skolebridge bruges kun HP. Distributionspoint er et tillæg i avanceret spil.`,'r')}
`},

// ═══════════════════════════════════════════
// L5
// ═══════════════════════════════════════════
{short:'Åbning 1 i farve',title:'Åbning 1 i farve',cat:'Åbninger',bg:'1',
intro:`Den mest almindelige åbning. Her fastlægger vi præcist hvornår man åbner, hvilken kulør man vælger, og hvad åbningen kommunikerer til makker.`,
quiz:{
  question:`Hvad åbner du med denne hånd?`,
  hand: `<div style="display:flex;flex-wrap:wrap">${hand('A K 7 5','Q J 8 4 2','K 3','9 6','Din hånd — 14 HP')}</div>`,
  options:['1♠','1♥','1NT','Pas'],correct:1,
  explain:`5-korts hjerter prioriteres over 4-korts spar. I Ny Nordisk/Skolebridge: vis din længste kulør — her er hjerter (5 kort) længere end spar (4 kort).`},
content:`
<h2>Hvornår åbner man?</h2>
${rb(`<strong>Åbningskrav:</strong> 13–20 HP med en kulørfordeling der ikke er afbalanceret 15–17 HP (som er 1NT-zonen).<br>
En åbning på 1-trinnet lover makker: "Jeg har 13-20 HP og mindst 4 kort i den meldte kulør (normalt 5+ for major)."`)  }

<h2>Valg af åbningskulør — prioriteringsrækkefølge</h2>
${tree(`DIN HÅND
│
├─ 5+ ${S} spar          →  <span class="kw">1${S}</span>
├─ 5+ ${H} hjerter       →  <span class="kw">1${H}</span>  (spar OG hjerter 5-5: start med ${S})
├─ 5+ ${D} ruder          →  <span class="kw">1${D}</span>
├─ 5+ ${C} klør           →  <span class="kw">1${C}</span>
│
├─ 4 ${S} og 4 ${H}       →  <span class="kw">1${H}</span>  (vis hjerte, gensvar viser spar)
│
├─ 4 ${D} og 4 ${C}       →  <span class="kw">1${D}</span>  (vis den længste — ved ens: 1${D})
├─ Kun 4 ${D}             →  <span class="kw">1${D}</span>
├─ Kun 4 ${C}             →  <span class="kw">1${C}</span>
│
└─ Afbalanceret 15-17 HP →  <span class="kw">1NT</span>  (se lektion 7)`)}

<h2>Eksempler</h2>
${tbl(['Hånd','HP','Fordeling','Åbning','Begrundelse'],[
  [`${S}AK75 ${H}QJ842 ${D}K3 ${C}96`,'14','5-4-2-2','1♥','5-korts hjerte prioriteres over 4-korts spar'],
  [`${S}AJ54 ${H}KQ32 ${D}A76 ${C}83`,'15','4-4-3-2','1♥','4-4 i major: åbn hjerter (laveste)'],
  [`${S}KQ97 ${H}A3 ${D}KJ85 ${C}Q74`,'15','4-2-4-3','1♦','Ingen 5-korts kulør — 4 ruder og ingen 4-korts major'],
  [`${S}A3 ${H}K72 ${D}AQJ5 ${C}KJ86`,'17','2-3-4-4','1♦','4-4 i minor: åbn ruder (den højeste 4-korts minor)'],
  [`${S}KQ86 ${H}AJ ${D}K1054 ${C}A93`,'16','4-2-4-3','1NT','Afbalanceret + 15-17 HP = 1NT åbning'],
])}

${rb(`<strong>Husk:</strong> Med 4-4 i minor åbner man 1${D} (ruder). Med 4-4 i major åbner man 1${H} (hjerte). Dette er i modsætning til nogle andre systemer.`,'g')}

<h2>Meldeforløbs-eksempler</h2>

${auction('Eksempel A — Standard åbning med 5-korts major','N','none',[
  {b:'1♥', tip:'Åbning med 5-korts hjerte. Prioritering: 5-korts major åbnes altid.', hp:'13-20 HP', why:'Med 5♥ og 14 HP: åbn 1♥ — giv makker mulighed for at finde major-fit'},
  {b:'Pas', tip:'Øst passer. Ingen åbningshånd eller ønsker ikke at overmelde.', hp:'0-11 HP', why:'Tre passer i træk afslutter ikke auktionen endnu'},
  {b:'2♥', tip:'Syd støtter med simpel raise. Viser 3+ hjerter og 6-10 HP.', hp:'6-10 HP', why:'Fit fundet (8+ hjerter). Inviterer ikke — minimum-svar.'},
  {b:'Pas', tip:'Vest passer. Makker har støttet, ingen overmeldingsgrundlag.', hp:'0-11 HP', why:''},
  {b:'Pas', tip:'Nord passer med minimum åbningshånd (13-14 HP). Makker viste 6-10 HP — parti usikkert.', hp:'13-14 HP', why:'Kombineret: 13+8=21 HP, under partigrænsen (25+). Kontrakt: 2♥'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Auktionen slutter: tre pas i træk.', hp:'', why:'Slutkontrakt: 2♥ (8 stik med hjerter som trumf)'},
])}
${auction('Eksempel B — Åbning og parti direkte','N','NS',[
  {b:'1♠', tip:'Åbning med 5-korts spar — den højest rangerende major, åbnes først.', hp:'15 HP', why:'5♠ + jævn hånd. Åbn 1♠ og vis styrken i gensvaret.'},
  {b:'Pas', tip:'Øst har ikke nok til at indmelde.', hp:'8 HP', why:''},
  {b:'3♠', tip:'Svarer springer til 3♠ — limit raise. Viser 4-korts spar-fit og 10-12 HP. Inviterer åbner til 4♠.', hp:'10-12 HP', why:'4♠ kræver 25+ kombineret. Svarer viser 10-12 → åbner byder 4♠ med 15+'},
  {b:'Pas', tip:'Vest passer.', hp:'', why:''},
  {b:'4♠', tip:'Åbner accepterer invitationen med 15 HP — godt over minimum. Byder direkte parti.', hp:'15 HP', why:'15+10=25 HP minimum → parti. Slutkontrakt: 4♠ (10 stik)'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Tre pas — auktionen slutter.', hp:'', why:''},
])}

`},

// ═══════════════════════════════════════════
// L6
// ═══════════════════════════════════════════
{short:'Svar på åbning 1 i farve',title:'Svar på åbning 1 i farve',cat:'Åbninger',bg:'6',
intro:`Svarers rolle er at fortælle åbner om sin styrke og fordeling — præcist og systematisk. Her gennemgås alle svarmuligheder med præcise HP-grænser.`,
quiz:{
  question:`Makker åbner 1${H}. Du har: ${S}K75 ${H}Q84 ${D}A932 ${C}J64 (10 HP). Hvad svarer du?`,
  hand:null,
  options:['2♥','1NT','3♥','1♠'],correct:0,
  explain:`3-korts hjerter + 10 HP = simpel støtte: 2♥. Støtte prioriteres over 1NT med fit. 3♥ (limit raise) kræver 4 hjerter og 10-12 HP.`},
content:`
<h2>Svarers prioriteringsrækkefølge</h2>
${tree(`PARTNER ÅBNER 1 I FARVE
│
Trin 1: Har du 0–5 HP?
├─ JA → <span class="no">PAS</span>
│
Trin 2: Har du fit (3+ kort) i partners kulør?
├─ JA, 6–10 HP →  <span class="kw">Simpel støtte</span> (2-trinnet)
├─ JA, 10–12 HP → <span class="kw">Limit raise / spring-støtte</span> (3-trinnet)  
├─ JA, 13+ HP →   <span class="kw">Parti-støtte</span> (4-trinnet) eller ny kulør
│
Trin 3: Ingen fit — ny kulør?
├─ 4+ kort i ny kulør, 6+ HP → <span class="kw">Ny kulør</span> (forcing!)
│     På 1-trinnet: 6+ HP
│     På 2-trinnet: 10+ HP (kræver mere styrke)
│
Trin 4: Ingen fit, ingen ny kulør
├─ 6–10 HP →  <span class="kw">1NT</span> (negativ, ikke-forcing)
├─ 11–12 HP → <span class="kw">2NT</span> (invitation)
└─ 13+ HP →   <span class="kw">3NT</span> (parti direkte)`)}

<h2>Detaljeret svartabel — partner åbner 1♥</h2>
${tbl(['Svars melding','HP-område','Hvad det viser'],[
  ['PAS','0–5','For svagt til svar'],
  ['1♠','6+','4+ spar — forcing, nyt kulør'],
  ['1NT','6–10','Ingen fit, ingen ny kulør'],
  ['2♣ eller 2♦','10+','4+ i kuløren — forcing'],
  ['2♥','6–10','3+ hjerter — støtte, non-forcing'],
  ['2NT','11–12','Balanceret, invitation'],
  ['3♥','10–12','4+ hjerter — limit raise, invitation'],
  ['3NT','13–15','Balanceret, direkte parti'],
  ['4♥','6–10','4+ hjerter, svag distribueret hånd — blokerer modstanderne'],
])}

${rb(`<strong>Forcing vs. non-forcing:</strong><br>
Ny kulør fra svarer = <em>forcing</em> — åbner MÅ melde videre.<br>
NT-svar og støtte = <em>non-forcing</em> — åbner kan passe.`)}

${tip(`Huskeregel for støtte: Med 3 kort (minimumsfit) og 6-10 HP: simpel støtte. Med 4 kort og 10-12 HP: spring-støtte (limit raise). Med 4 kort og 13+ HP: gå direkte til parti.`)}

<h2>Meldeforløbs-eksempler</h2>

${auction('Eksempel — Svar med ny farve (forcing)','N','none',[
  {b:'1♣', tip:'Åbner åbner 1♣. Viser 13-20 HP og typisk 4+ klør (eller korteste minor ved tvang).', hp:'15 HP', why:'Ingen 4-korts major. Åbn i bedste minor.'},
  {b:'Pas', tip:'Øst passer.', hp:'', why:''},
  {b:'1♥', tip:'Svarer melder ny kulør på 1-trinnet. Altid KRAVMELDING — åbner MÅ melde videre.', hp:'9 HP', why:'9 HP og 5-korts hjerte. Ny kulør fra svarer = forcing. Åbner informeres om hjerter.'},
  {b:'Pas', tip:'Vest passer.', hp:'', why:''},
  {b:'2♥', tip:'Åbner støtter hjerter med 4-korts fit. Viser 13-15 HP (minimum gensvar = non-forcing).', hp:'13-15 HP', why:'4♥ fit fundet. Minimum gensvar = 2♥. Svarer kan passe med svag hånd.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Svarer passer — 9+13=22 HP, under partigrænsen. Kontrakt: 2♥', hp:'', why:''},
  {b:'Pas', tip:'', hp:'', why:''},
])}

`},

// ═══════════════════════════════════════════
// L7
// ═══════════════════════════════════════════
{short:'Åbning 1NT',title:'Åbning 1NT',cat:'Åbninger',bg:'N',
intro:`1NT er en af de mest informative åbninger i bridge: den viser præcist 15–17 HP og en afbalanceret hånd. Her lærer du hvad det kræver og hvad svarer kan gøre.`,
quiz:{
  question:`Hvilken hånd er korrekt 1NT-åbning?`,
  options:[
    `♠AK54 ♥Q3 ♦KJ872 ♣Q5 (15 HP, 5-2-5-1)`,
    `♠K72 ♥AQ5 ♦KJ84 ♣Q63 (16 HP, 3-3-4-3)`,
    `♠AK2 ♥KQ5 ♦AJ84 ♣732 (18 HP, 3-3-4-3)`,
    `♠K72 ♥AQ54 ♦KJ8 ♣Q63 (16 HP, 3-4-3-3)`,
  ],correct:1,
  explain:`Hånd 2 har 16 HP og fordeling 3-3-4-3 (afbalanceret). Hånd 1 har singleton i klør (uafbalanceret). Hånd 3 har 18 HP (for stærk til 1NT). Hånd 4 har 4-korts hjerte — åbn 1♥ i stedet.`},
content:`
<h2>Krav til 1NT-åbning</h2>
${rb(`<strong>1NT kræver præcis:</strong><br>
• 15–17 HP<br>
• Afbalanceret fordeling: 4-3-3-3, 4-4-3-2 eller 5-3-3-2<br>
• Stoppere i mindst 3 kulører (helst alle 4)<br><br>
Med 4-4 i major og 15-17 HP: åbn 1${H} ikke 1NT.`,'g')}

<h2>Hvad 1NT fortæller makker</h2>
<p>1NT er den mest <em>præcise</em> åbning: makker ved at åbner har 15–17 HP (kun 3 HP variation!) og en afbalanceret hånd. Makker kan nu beregne totalen og vælge kontrakt direkte.</p>
${tbl(['Makkers HP','Kombineret','Makkers svar'],[
  ['0–7','15–24','PAS — ingen chance for parti'],
  ['8–9','23–26','2NT (invitation) — åbner byder 3NT med max'],
  ['10+','25+','3NT direkte — parti'],
  ['4+ med 5-korts major','varierend','Jacoby transfer (se L11)'],
  ['4+ med 4-korts major','varierende','Stayman 2♣ (se L11)'],
])}

<h2>Gensvar på 2NT (invitation)</h2>
${tree(`Åbner har meldt 1NT (15–17 HP)
Svarer melder 2NT (8–9 HP, invitation)
│
├─ Åbner har 15 HP (minimum) → <span class="no">PAS</span>
└─ Åbner har 16–17 HP (maximum) → <span class="ok">3NT</span>`)}

${tip(`1NT er den eneste åbning med en 3-HP-spændvidde. Alle andre kulør-åbninger spænder 13–20 HP. Netop fordi 1NT er så præcis, er det nemt for makker at afgøre partistyrke.`)}

<h2>Meldeforløbs-eksempler</h2>

${auction('Eksempel A — 1NT og direkte 3NT','N','none',[
  {b:'1NT', tip:'Åbning 1NT: 15-17 HP, afbalanceret hånd (4-3-3-3, 4-4-3-2 eller 5-3-3-2). Præcis HP-zone.', hp:'16 HP', why:'Jævn hånd, 16 HP. Ingen 5-korts major. Åbn 1NT.'},
  {b:'Pas', tip:'Øst passer.', hp:'', why:''},
  {b:'3NT', tip:'Svarer springer direkte til parti. Med 9+ HP ved svarer at kombineret ≥ 25 HP.', hp:'9 HP', why:'1NT lover 15-17. Med 9 HP: 15+9=24 (minimum) til 17+9=26 (maksimum). Parti sandsynligt — byd det direkte.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Åbner passer. Svarer har afsluttet auktionen.', hp:'', why:'Slutkontrakt: 3NT (9 stik i sanstrumf)'},
  {b:'Pas', tip:'', hp:'', why:''},
])}
${auction('Eksempel B — 1NT med invitation (2NT)','N','NS',[
  {b:'1NT', tip:'Åbning 1NT: 15-17 HP, afbalanceret.', hp:'15 HP', why:'Minimum 1NT-hånd'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2NT', tip:'Svarer inviterer. 2NT = "Byd 3NT med maksimum (16-17), pas med minimum (15)."', hp:'8 HP', why:'8 HP: 15+8=23 (måske ikke nok), 17+8=25 (nok). Inviter — lad åbner afgøre.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Åbner passer med minimum 15 HP. 15+8=23 HP — ikke sikkert nok til 3NT.', hp:'15 HP', why:'Med 16-17 HP burde åbner byde 3NT. Med 15: pas invitationen.'},
  {b:'Pas', tip:'', hp:'', why:''},
])}

`},

// ═══════════════════════════════════════════
// L8
// ═══════════════════════════════════════════
{short:'Åbners 2. melding',title:'Åbners 2. melding (gensvar)',cat:'Åbninger',bg:'8',
intro:`Efter svarers første melding skal åbner præcisere sin håndstyrke og fordeling yderligere. Gensvaret er afgørende for at makkerparret finder den rigtige kontrakt.`,
quiz:{
  question:`Du åbner 1${H}. Makker svarer 1${S}. Din hånd: ${S}K3 ${H}AKQ75 ${D}KJ4 ${C}Q82 (17 HP). Hvad melder du?`,
  options:['2♥','3♥','2♠','1NT'],correct:1,
  explain:`3♥ viser 17-18 HP og 6-korts hjerter (eller stærk 5-korts). 2♥ viser kun 13-15 HP. Du har 17 HP og 5 stærke hjerter — inviter til parti med 3♥.`},
content:`
<h2>Åbners opgave i gensvaret</h2>
<p>Åbner har vist 13–20 HP i åbningen. Nu skal åbner fortælle makker <em>præcist</em> om styrkeinterval og form. Gensvaret indsnævrer åbnerens hånd markant.</p>

<h2>Efter 1 i major → svar 1NT (6–10 HP, ingen fit)</h2>
${tree(`Du åbnede 1${H}, makker svarede 1NT
│
├─ 13–15 HP, ensfarvet (5+ ${H}) → <span class="kw">2${H}</span>  (gentagelse, svag)
├─ 13–15 HP, 4+ ${C} eller 4+ ${D} → <span class="kw">2${C}/2${D}</span>  (ny kulør, non-forcing)
├─ 16–18 HP, 5+ ${H}            → <span class="kw">3${H}</span>  (invitation til parti)
└─ 19–20 HP                     → <span class="kw">4${H}</span>  (parti direkte)`)}

<h2>Efter 1 i kulør → svar ny kulør (forcing)</h2>
${tree(`Du åbnede 1${H}, makker svarede 1${S}
│
├─ 4+ ${S} (fit!) 13–15 HP → <span class="kw">2${S}</span>  (støtte, non-forcing)
├─ 4+ ${S} (fit!) 16–18 HP → <span class="kw">3${S}</span>  (invitation)
├─ 4+ ${S} (fit!) 19–20 HP → <span class="kw">4${S}</span>  (parti)
│
├─ Ingen spar-fit, 13–15 HP → <span class="kw">2${H}</span>  (gentagelse af 5+ hjerter)
├─ Ingen spar-fit, tofarvet → <span class="kw">2${D}/2${C}</span>  (ny kulør — reverse med 17+ HP!)
└─ Ingen spar-fit, 15–17, afbalanceret → <span class="kw">1NT</span>  (men åbn 1NT næste gang!)`)}

<h2>Stærke gensvar (reverse)</h2>
${rb(`En <strong>reverse</strong> er åbnerens gensvar i en ny kulør på 2-trinnet der er <em>højere</em> end åbningskuløren. Dette er forcing og viser 17+ HP og to kulører.<br><br>Eks.: 1${C} – 1${H} – 2${S} = reverse. Åbner har spar + klør og 17+ HP.`,'r')}

${tbl(['Gensvar','Styrke','Hvad det viser'],[
  ['2 i åbningskuløren','13–15','5-6 kort i kuløren, minimum'],
  ['2 i lavere ny kulør','13–16','4+ kort, tofarvet'],
  ['2NT','15–17','Afbalanceret, stopper i umeldte kulører'],
  ['3 i åbningskuløren','17–18','5-6 kort, invitation'],
  ['Reverse (2 i højere kulør)','17+','Forcing, tofarvet'],
  ['4 i åbningskuløren','19–20','Parti direkte'],
])}
`},

// ═══════════════════════════════════════════
// L9
// ═══════════════════════════════════════════
{short:'Indmeldinger',title:'Indmeldinger (overkaldet)',cat:'Åbninger',bg:'9',
intro:`Når modstanderne åbner, kan dit makkerpar stadig kæmpe om kontrakten ved at melde ind. Her fastlægger vi præcist hvornår og hvad man indmelder.`,
quiz:{
  question:`Øst åbner 1${H}. Det er din tur. Du har: ${S}AKJ85 ${H}73 ${D}KQ4 ${C}J82 (14 HP). Hvad gør du?`,
  options:['Pas','1♠ (indmelding)','Dobling (oplysning)','2♠ (spærre)'],correct:1,
  explain:`1♠ er korrekt: 5-korts spar + 14 HP opfylder krav til indmelding på 1-trinnet. Du viser 12+ HP og 5+ spar.`},
content:`
<h2>Definition: Indmelding</h2>
${rb(`En <strong>indmelding</strong> foretages af en spiller hvis makkerpar <em>ikke</em> åbnede. Indmelderen siger: "Vi kan konkurrere om kontrakten."<br><br>En indmelding sker normalt direkte (omgående) eller i sæde (efter partner har passet).`)}

<h2>Direkte indmelding (omgående)</h2>
${tbl(['Indmelding','Krav','Hvad det viser'],[
  ['1 i kulør','12+ HP, 5+ kort i kuløren','Naturlig, 5-korts+'],
  ['1NT','15–18 HP, afbalanceret, stopper i modstanders kulør','Sanstrumf indmelding'],
  ['Dobling (X)','12+ HP, 4-4 i de 2 ikke-meldte kulører','Oplysningsdobling (se L10)'],
  ['2 i kulør','14+ HP, 6+ kort (stærk)','Stærk indmelding'],
  ['2NT','20–21 HP, afbalanceret, stoppere','Stærk NT-indmelding'],
])}

<h2>Sæde-indmelding (balancering)</h2>
<p>Når auktionen er ved at slutte (alle har passet undtagen dig), kan man indmelde med svagere hånd:</p>
${rb(`I sæde (balanceringsposition): kan indmelde med 10–11 HP og en god kulør, da det er "gratis" — auktionen slutter ellers.`,'g')}

<h2>Prioritering af indmelding</h2>
${tree(`Modstander åbner 1${H}
│
├─ Har du 5+ spar?          →  1${S}  (12+ HP)
├─ Har du 5+ ruder/klør?    →  2${D}/2${C}  (14+ HP)  
├─ Afbalanceret 15-18 HP?   →  1NT  (stopper i ${H} krævet)
├─ 4-4 i ${S}+${D}/${C}?       →  Dobling (se L10)
└─ Svag eller ingen kulør   →  PAS`)}

${tip(`Guldreglen for indmelding: En 5-korts kulør er dit primære indmeldingsværktøj. Uden solid 5-korts kulør kræves enten 1NT (15-18 HP) eller oplysningsdobling.`)}
`},

// ═══════════════════════════════════════════
// L10
// ═══════════════════════════════════════════
{short:'Oplysningsdoblinger',title:'Oplysningsdoblinger',cat:'Konventioner',bg:'X',
intro:`En dobling er ikke altid en strafdobling. Oplysningsdoblinger (takeout doubles) er et af bridgespillets vigtigste konventionelle redskaber — den viser styrke i bestemte kulører.`,
quiz:{
  question:`Øst åbner 1${D}. Syd dobler. Hvad viser Syds dobling?`,
  options:[
    'Syd vil straffe Øst i 1♦',
    `Syd har 12+ HP og 4-4 (eller bedre) i ${S}${H}${C} — de tre kulører der ikke er meldt`,
    'Syd har en stærk, afbalanceret hånd',
    `Syd har 5+ ${D}`,
  ],correct:1,
  explain:`Oplysningsdobling over 1♦ viser typisk 12+ HP og 4+ i de tre umeldte kulører: spar, hjerte og klør. Makker vælger den bedste kulør.`},
content:`
<h2>Definition: Oplysningsdobling</h2>
${rb(`En <strong>oplysningsdobling</strong> (konventionel dobling, "takeout double") er en dobling der <em>ikke</em> er strafdobling. Den siger: "Jeg har styrke i de kulører modstanderne ikke meldte. Vælg din bedste kulør, makker."<br><br>Oplysningsdoblinger kræver at:<br>
1. Du dobler på de første 3 niveauer<br>
2. Din makker endnu ikke har meldt<br>
3. Du dobler umiddelbart over modstandernes melding`)}

<h2>Krav til oplysningsdobling</h2>
${tbl(['Modstander åbner','Doblingens krav','Dobler viser'],[
  ['1♣','12+ HP, 4-4 i ♠♥♦','Spar, hjerte, ruder'],
  ['1♦','12+ HP, 4-4 i ♠♥♣','Spar, hjerte, klør'],
  ['1♥','12+ HP, 4-4 i ♠♦♣ (særlig 4 spar)','Spar, ruder, klør — spar primært'],
  ['1♠','12+ HP, 4-4 i ♥♦♣','Hjerte, ruder, klør'],
])}

<h2>Makkeres svar på oplysningsdobling</h2>
${tree(`Partner dobler 1${H} (viser ${S}${D}${C})
Din hånd som makker:
│
├─ 0–7 HP   → Meld laveste kulør du har 4 kort i (tvinges)
├─ 8–10 HP  → Meld din bedste kulør på 2-trinnet
├─ 11–12 HP → Jump i din bedste kulør (invitation)
└─ 13+ HP   → Hop til parti eller meld 2NT`)}

${rb(`<strong>OBS:</strong> Makker til doblingen SKAL melde videre — også med 0 HP. Det er netop meningen: dobler har spillet for alle kulørerne og vil have makker til at vælge.`,'r')}

<h2>Strafdobling — hvornår?</h2>
<p>En dobling er <em>straf</em>-dobling når:</p>
<ul style="padding-left:20px;font-size:14px;line-height:2">
  <li>Makker allerede har meldt (auktionen er ikke ny)</li>
  <li>Dobleren allerede har meldt en kulør</li>
  <li>Dobleren dobler på høje niveauer (4+ niveau)</li>
</ul>
`},

// ═══════════════════════════════════════════
// L11
// ═══════════════════════════════════════════
{short:'Stayman & overføringer',title:'Stayman og Jacoby overføringer',cat:'Konventioner',bg:'♣',
intro:`Over 1NT bruger vi to centrale konventioner til at finde 4-korts major-fit og vise 5-korts majors. Begge er kunstige meldinger der kræver besked til modstanderne.`,
quiz:{
  question:`Makker åbner 1NT. Du har: ${S}AJ754 ${H}K3 ${D}Q82 ${C}J94 (11 HP, 5-korts spar). Hvad melder du?`,
  options:['3NT','2♠ (naturlig)','2♥ (Jacoby transfer til spar)','2♣ (Stayman)'],correct:2,
  explain:`2♥ er Jacoby transfer til spar: du beder åbner om at acceptere overføringen ved at melde 2♠. Derefter vurderer du parti. IKKE 2♠ som naturlig — over 1NT er alt konventionelt.`},
content:`
<h2>Konvention 1: Stayman (2♣ over 1NT)</h2>
${rb(`<strong>Stayman 2♣</strong> er en kunstig melding der spørger: "Har du en 4-korts major?"<br><br>Krav: Svarer skal have 8+ HP OG mindst én 4-korts major.<br><br>Åbner svarer:<br>
• 2${D} = ingen 4-korts major<br>
• 2${H} = 4 hjerter (og muligvis 4 spar)<br>
• 2${S} = 4 spar (men ikke 4 hjerter)`)}

${tree(`1NT – 2${C} (Stayman)
         │
         ├─ 2${D} = ingen 4-korts major
         │         Svarer: 2NT (inv.) / 3NT (parti)
         │
         ├─ 2${H} = 4 hjerter
         │         Svarer har 4${H}: → 4${H} (parti)
         │         Svarer har kun 4${S}: → 3NT
         │
         └─ 2${S} = 4 spar
                   Svarer har 4${S}: → 4${S} (parti)
                   Svarer har kun 4${H}: → 3NT`)}

<h2>Konvention 2: Jacoby overføringer over 1NT</h2>
${rb(`En <strong>Jacoby overføring</strong> er en melding der fortæller åbner: "Acceptér overføringen — meld næste kulør op." Formål: Den stærke hånd (åbner) bliver spilførender og skjult.`)}

${tbl(['Svarer melder','Betydning (kunstig)','Åbner SKAL melde'],[
  ['2♦','5+ hjerter','2♥ (altid)'],
  ['2♥','5+ spar','2♠ (altid)'],
])}

${tree(`1NT – 2${D} (overføring til hjerter)
Åbner melder altid 2${H}
         │
         ├─ Svarer passer     → 2${H} slutkontrakt (svag)
         ├─ Svarer melder 3${H} → invitation (5-korts, 8-9 HP)
         ├─ Svarer melder 4${H} → parti (6+ hjerter ELLER 5-korts + 10+ HP)
         └─ Svarer melder 3NT  → makker vælger 3NT eller 4${H}`)}

<h2>Valg: Stayman eller overføring?</h2>
${tbl(['Situation','Brug','Begrundelse'],[
  ['5-korts major','Overføring','Vis 5-korts major direkte'],
  ['4-korts major (og 4-korts i begge)','Stayman','Søg 4-4 fit'],
  ['Kun 4-korts major','Stayman','Søg fit'],
  ['Ingen major, 10+ HP','3NT direkte','Ingen grund til konvention'],
])}

<h2>Meldeforløbs-eksempler</h2>

${auction('Eksempel A — Stayman finder major-fit','N','none',[
  {b:'1NT', tip:'Åbning 1NT: 15-17 HP, afbalanceret.', hp:'16 HP', why:'Ingen 5-korts major. Jævn fordeling.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2♣', tip:'Stayman! Kunstig konvention — spørger åbner: "Har du en 4-korts major (♥ eller ♠)?"', hp:'10 HP', why:'Svarer har 4-korts spar og 10+ HP. Brug Stayman til at finde major-fit frem for 3NT.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2♠', tip:'Åbner svarer 2♠: "Ja, jeg har 4-korts spar (og evt. 4 hjerter, men spar nævnes først)."', hp:'16 HP', why:'4♠ fit fundet: åbner 4♠ + svarer 4♠ = 8 trumf. Major-fit prioriteres.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'4♠', tip:'Svarer byder direkte 4♠-parti. Fit bekræftet, 10+16=26 HP.', hp:'10 HP', why:'8-korts spat-fit + 26 HP kombineret = parti i major. Perfekt slutkontrakt.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Slutkontrakt: 4♠', hp:'', why:''},
])}
${auction('Eksempel B — Jacoby overføring til hjerter','N','none',[
  {b:'1NT', tip:'Åbning 1NT: 15-17 HP, afbalanceret. Den stærke hånd.', hp:'17 HP', why:'Maksimum 1NT'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2♦', tip:'Jacoby overføring! 2♦ over 1NT = "Jeg har 5+ hjerter — du SKAL melde 2♥." Tvinger åbner.', hp:'7 HP', why:'5-korts hjerte + 7 HP. Overføring sikrer at den stærke 1NT-hånd (17 HP) spiller kontrakten og skjules.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2♥', tip:'Åbner accepterer overføringen — TVUNGEN af konventionen. Åbner melder 2♥ uanset hjerter-beholdning.', hp:'17 HP', why:'Overføringen er gennemført. Åbner er nu spilfører i hjerter — den stærke hånd er skjult.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'4♥', tip:'Svarer byder direkte 4♥-parti med 7 HP. 17+7=24 — men 5-korts hjerte giver ekstra fordelingsværdi.', hp:'7 HP + 5♥', why:'Med 9-korts hjerte-fit (5+4 eller 5+... hvad åbner nu har) og maksimum 1NT: parti.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Slutkontrakt: 4♥. Åbner (den stærke hånd) spiller — honnørerne skjulte.', hp:'', why:''},
])}

`},

// ═══════════════════════════════════════════
// L12
// ═══════════════════════════════════════════
{short:'Spærremeldinger',title:'Spærremeldinger (præemptive åbninger)',cat:'Konventioner',bg:'3',
intro:`En spærremelding er en strategisk melding med svag hånd og lang kulør. Formålet er at fjerne melderum fra modstanderne og gøre det svært for dem at kommunikere.`,
quiz:{
  question:`Du holder: ${S}3 ${H}KQJ9762 ${D}84 ${C}952 (7 HP). Hvad åbner du?`,
  options:['Pas','1♥','2♥','3♥'],correct:3,
  explain:`7-korts hjerter + 7 HP = præemptiv 3♥. Tommelfingerreglen: antal trumfkort minus 3 = spærreniveauet. 7-3=4... men 3♥ er standardspærren for 7-korts kulør på 3-trinnet.`},
content:`
<h2>Definition: Spærremelding</h2>
${rb(`En <strong>spærremelding</strong> (præemptiv åbning) åbner på 2- eller 3-trinnet med:<br>
• Lang kulør: 6 kort (niveau 2) eller 7 kort (niveau 3)<br>
• Svag hånd: 5–10 HP<br>
• Ingen sidekulør der er for stærk<br><br>
<strong>Formål:</strong> Stjæl melderum fra modstanderne. De kan have et godt spil men nu mangler de plads til at kommunikere.`)}

<h2>Svag 2-åbning (6-korts kulør)</h2>
${tbl(['Melding','Kulør','HP-område','Kortlængde'],[
  ['2♥','Hjerter (svag)','5–10 HP','6 kort'],
  ['2♠','Spar (svag)','5–10 HP','6 kort'],
  ['2♦','Ruder (svag)','5–10 HP','6 kort'],
  ['2♣','IKKE spærre','22+ HP','Stærk kunstig åbning!'],
])}

${rb(`<strong>OBS:</strong> 2${C} er <em>aldrig</em> spærremelding i Ny Nordisk/Skolebridge. 2${C} er den stærke kunstige åbning (se lektion 15). Kun 2${H}, 2${S} og 2${D} er svage spærremeldinger.`,'r')}

<h2>Præemptive åbninger på 3-trinnet</h2>
${tbl(['Melding','HP','Kortlængde','Krav til kulørens kvalitet'],[
  ['3♣','5–10','7 kort','Mindst 2 af AKQ i kuløren'],
  ['3♦','5–10','7 kort','Mindst 2 af AKQ i kuløren'],
  ['3♥','5–10','7 kort','Mindst 2 af AKQ i kuløren'],
  ['3♠','5–10','7 kort','Mindst 2 af AKQ i kuløren'],
])}

<h2>Svar på makkeres spærremelding</h2>
${tree(`Makker åbner 2${H} (svag, 6 hjerter, 5-10 HP)
│
├─ Svag hånd, ingen fit    → <span class="no">PAS</span>
│
├─ 3+ hjerter, svag hånd  → 3${H}  <span class="ok">(mere spærre! yderligere blokering)</span>
│
├─ 4+ hjerter, 16+ HP     → 4${H}  <span class="ok">(parti — du beslutter selv)</span>
│
├─ Stærk, ingen fit        → 2NT  <span class="kw">(konventionel, spørger om kulørens kvalitet)</span>
│   └─ Makker: 3 af åbningskuløren = svag kulør
│              Ny kulør = feature (A eller K i sidekulør)
│
└─ Stærk, vil vide om ess → 4NT <span class="kw">(Blackwood)</span>`)}

${tip(`Tommelfingerreglen: Antal trumfkort − 3 = spærreniveauet. 6 trumf → niveau 2 (2♥/2♠). 7 trumf → niveau 3 (3♥/3♠). 8 trumf → niveau 4.`)}
`},

// ═══════════════════════════════════════════
// L13
// ═══════════════════════════════════════════
{short:'Svarers 2. melding',title:'Svarers 2. melding',cat:'Konventioner',bg:'13',
intro:`Svarers anden melding er det øjeblik makkerparret samler billedet. Svarer ved nu hvad åbner har (åbning + gensvar) og skal tage den endelige beslutning om kontrakt.`,
quiz:{
  question:`Auktionen: 1${H} – 1${S} – 2${H}. Åbner har vist 13-15 HP og 6-korts hjerter. Du har: ${S}AKQ75 ${H}3 ${D}Q842 ${C}J76 (12 HP). Hvad melder du?`,
  options:['PAS','2NT','3NT','4♥'],correct:1,
  explain:`Ingen hjertefit. Du har 12 HP, åbner har 13-15 HP = 25-27 HP total. Parti muligt. 2NT inviterer åbner til 3NT. Åbner passer med 13-14 HP og byder 3NT med 15 HP.`},
content:`
<h2>Svarers 2. melding — overblik</h2>
<p>Svarer kender nu åbnerens hånd fra to meldinger. Svarers opgave: beregn den samlede styrke og find den bedste kontrakt.</p>

<h2>Situationstyper</h2>
<h3>Situation A: Fit er fundet</h3>
${tree(`Auktion: 1${H} – 2${H} (fit!) – 2${H}(åbner)
Svarer har 3+ hjerter. Åbner har vist 13-15 HP:
│
├─ Svarer 6–8 HP:  Total 19-23 → <span class="no">PAS</span>
├─ Svarer 9–10 HP: Total 22-25 → 3${H} (invitation)
└─ Svarer 11+ HP:  Total 24+   → 4${H} (parti)`)}

<h3>Situation B: Ingen fit — NT søges</h3>
${tree(`Auktion: 1${H} – 1${S} – 2${H}
Ingen spar-fit, ingen hjerte-fit:
│
├─ Svarer 10–11 HP: → 2NT (invitation til 3NT)
├─ Svarer 12–14 HP: → 3NT (parti)
└─ Svarer 15+ HP:   → undersøg slem`)}

<h3>Situation C: Ny kulør fra svarer (forcing)</h3>
${tree(`Auktion: 1${C} – 1${H} – 2${C}
Svarer viste hjerter, åbner har kun klør:
│
├─ Svarer har 10–12 HP: → 2NT (invitation)
│
├─ Svarer har 4 ${D}:    → 2${D} (naturlig, forcing)
│
├─ Svarer har 13+ HP:   → 3NT
│
└─ Svarer gentager ${H} (6-korts): → 3${H} (svag invitation ELLER forcing)`)}

<h2>Vigtigt om forcing vs. non-forcing</h2>
${tbl(['Svarers 2. melding','Forcing?','Bemærkning'],[
  ['Ny kulør','JA — altid forcing','Åbner SKAL melde videre'],
  ['NT-melding','NEJ — non-forcing','Åbner kan passe med minimum'],
  ['Gentagelse af sin kulør','NEJ — svag/invitation','Viser 6-korts kulør'],
  ['Støtte til åbners kulør','NEJ — invitation','Åbner vurderer'],
])}

${tip(`Huskeregel: Ny kulør fra svarer er altid forcing i alle runderne. Alle andre svar (NT, støtte, gentagelse) er non-forcing invitationer.`)}
`},

// ═══════════════════════════════════════════
// L14
// ═══════════════════════════════════════════
{short:'Åbning 2NT',title:'Åbning 2NT',cat:'Konventioner',bg:'2',
intro:`2NT er åbningens mest præcise melding for de stærke afbalancerede hænder. Her gennemgås krav, svar med Stayman og Jacoby overføringer på 3-trinnetet.`,
quiz:{
  question:`Makker åbner 2NT. Du har: ${S}K874 ${H}J53 ${D}Q92 ${C}864 (8 HP). Hvad melder du?`,
  options:['PAS','3NT','3♣ (Stayman)','3♦ (overføring)'],correct:1,
  explain:`2NT viser 20-21 HP. Du har 8 HP. Total: 28-29 HP = parti. 3NT er korrekt. Du har ingen 4-korts major → ingen grund til Stayman.`},
content:`
<h2>Krav til 2NT-åbning</h2>
${rb(`<strong>2NT kræver præcis:</strong><br>
• 20–21 HP<br>
• Afbalanceret fordeling: 4-3-3-3, 4-4-3-2 eller 5-3-3-2<br>
• Stoppere i alle fire kulører (stærkt anbefalet)<br><br>
Med 22+ HP: åbn 2${C} (kunstig stærk åbning — se lektion 15).`,'g')}

<h2>Hvad 2NT fortæller makker</h2>
${tbl(['Makkers HP','Kombineret total','Makkers svar'],[
  ['0–3','20–24','PAS — ingen chance for parti'],
  ['4–9','24–30','3NT direkte (parti)'],
  ['4+ med 4-korts major','varierende','3♣ Stayman'],
  ['4+ med 5-korts major','varierende','3♦ (overføring til hjerter) / 3♥ (overføring til spar)'],
  ['10–12','30–33','4NT (kvantitativ — invitation til lilleslem)'],
  ['13+','33+','6NT direkte (lilleslem)'],
])}

<h2>Stayman over 2NT = 3♣</h2>
${tree(`2NT – 3${C} (Stayman — "har du 4-korts major?")
         │
         ├─ 3${D} = ingen 4-korts major → svarer: 3NT
         ├─ 3${H} = 4 hjerter → svarer med 4${H}: → 4${H} (parti)
         │                       svarer med kun 4${S}: → 3NT
         └─ 3${S} = 4 spar  → svarer med 4${S}: → 4${S} (parti)
                               svarer med kun 4${H}: → 3NT`)}

<h2>Jacoby overføringer over 2NT</h2>
${tbl(['Svarer melder','Kunstig betydning','Åbner SKAL melde','Derefter'],[
  ['3♦','5+ hjerter','3♥','Svarer passer / byder 4♥ / 3NT'],
  ['3♥','5+ spar','3♠','Svarer passer / byder 4♠ / 3NT'],
])}

<h2>Slemvurdering</h2>
${rb(`Med 10+ HP over 2NT er slem mulig. Byd 4NT (kvantitativt) — åbner byder 6NT med 21 HP (maksimum), passer med 20 HP (minimum).`,'g')}
`},

// ═══════════════════════════════════════════
// L15
// ═══════════════════════════════════════════
{short:'Åbning 2♣',title:'Åbning 2♣ — den stærke kunstige åbning',cat:'Konventioner',bg:'2♣',
intro:`2♣ er den stærkeste åbning i bridge og er altid kunstig: den viser ikke klør, men signalerer en usædvanlig stærk hånd. Makker MÅ svare — selv med 0 HP.`,
quiz:{
  question:`Makker åbner 2${C}. Du har: ${S}96 ${H}852 ${D}J743 ${C}9632 (0 HP). Hvad svarer du?`,
  options:['PAS','2♦ (wating bid)','2NT','3♣'],correct:1,
  explain:`2♦ er den konventionelle "wating bid" over 2♣ — den siger blot "Jeg hørte din melding, fortsæt." Med 0 HP kan man ikke sige noget meningsfyldt, men man MÅ svare fordi 2♣ er forcing.`},
content:`
<h2>Definition: 2♣ åbning</h2>
${rb(`<strong>2${C} = kunstig, stærk, forcing til parti</strong><br><br>
2${C} viser:<br>
• 22+ HP med afbalanceret hånd (+ tofarvet/ensfarvet stærk), ELLER<br>
• Hånd der alene kan lave parti (ca. 9 vindende stik)<br><br>
2${C} viser IKKE klør. Det er en kunstig melding der kræver besked.`,'r')}

<h2>Makkeres svar på 2♣ (altid forcing!)</h2>
${tbl(['Svar','Hvad det viser','Bemærkning'],[
  ['2♦','0–7 HP, ingen god kulør','Kunstig "waiting bid" — ingen info om kulør'],
  ['2♥','8+ HP, 5+ hjerter','Naturlig, viser håndstyrke'],
  ['2♠','8+ HP, 5+ spar','Naturlig, viser håndstyrke'],
  ['3♣ / 3♦','8+ HP, 5+ kulør','Naturlig'],
  ['2NT','8–10 HP, afbalanceret','Ingen 5-korts kulør, alene holder'],
])}

<h2>Åbnerens gensvar afhænger af hånden</h2>
${tree(`2${C} – 2${D} (waiting)
         │
         ├─ Afbalanceret 22-23 HP → 2NT
         │     Svarer: passer med 0-2, invitation med 3-4, parti 5+
         │
         ├─ 5+ ${H}              → 2${H} (naturlig, forcing til parti)
         ├─ 5+ ${S}              → 2${S} (naturlig, forcing til parti)
         ├─ 5+ ${D}              → 3${D} (naturlig, forcing til parti)
         └─ 5+ ${C}              → 3${C} (naturlig, forcing til parti)`)}

${rb(`<strong>Forcing til parti:</strong> Efter 2${C}–2${D} er auktionen forcing til parti. Ingen kan passe under parti-niveau (4-major, 3NT, 5-minor). Makkerparret SKAL finde en partikontrakt.`,'r')}

${tip(`Huskeregel: Åbner siger med 2♣ = "Jeg kan næsten klare partiet selv — hjælp mig bare at finde den rigtige kontrakt."`)}
`},

// ═══════════════════════════════════════════
// L16
// ═══════════════════════════════════════════
{short:'Kald og afvisning',title:'Kald og afvisning — spilregler',cat:'Konventioner',bg:'16',
intro:`Ud over meldinger har bridge et sæt præcise regler for selve kortspillet: hvad er et "kald", hvad er en "afvisning", og hvornår kan man tage et kort tilbage?`,
quiz:{
  question:`Spilføreren spiller ud med et kort og har lagt det på bordet. Kan spilføreren tage det tilbage?`,
  options:['Ja, altid inden modstanderne spiller','Nej — et spillet kort er spillet','Ja, hvis han siger "undskyld" inden 5 sekunder','Det afhænger af om der er dommer til stede'],correct:1,
  explain:`I bridge er et spillet kort (lagt åbent på bordet) bindende og kan ikke tages tilbage. Dette gælder for alle fire spillere.`},
content:`
<h2>Grundregler for kortspillet</h2>
${rb(`<strong>Spillet kort er bindende:</strong> Når et kort er lagt åbent på bordet, er det spillet. Det kan ikke tages tilbage.<br><br>
<strong>Udspilspligten:</strong> Spillet begynder med at spilleren til venstre for spilføreren spiller ud. Herefter lægger bordet sin hånd åbent.`)}

<h2>Kulørpligt</h2>
<p>Man SKAL spille en kulør der er identisk med det udspilte. Kan man ikke, må man spille hvad som helst (men ikke trumfe mod reglerne).</p>

<h2>Revoque (renvoi)</h2>
${rb(`Et <strong>revoque (renvoi)</strong> er en fejl: spilleren har et kort i den udspilte kulør men spiller en anden kulør. Straffes med overgang af stik til modstanderne.`,'r')}

<h2>Kald i auktionen</h2>
${tbl(['Type kald','Definition'],[
  ['Pas','Man melder ikke — auktionen fortsætter'],
  ['Melding','Man byder: niveau + kulør/NT'],
  ['Dobling (X)','Man dobler modstandernes melding'],
  ['Redobling (XX)','Man redobler en tidligere dobling'],
])}

<h2>Falsk melding</h2>
<p>En falsk melding (melding udenfor tur, utilstrækkelig melding osv.) straffes efter EBL-reglerne. I uformelt spil: spilleren tager meldingen tilbage og sætter det rigtige kort på.</p>

${tip(`I skolebridge og begynderturneringer er reglerne mere lempelige. Fokuser på at lære de rette meldinger — og aftal med makker at I hjælper hinanden ved fejl frem for at straffe.`)}
`},

// ═══════════════════════════════════════════
// L17
// ═══════════════════════════════════════════
{short:'Spilføring i NT',title:'Spilføring i sanstrumf',cat:'Spilføring & Forsvar',bg:'NT',
intro:`Sanstrumf-spilføring er analytisk: tæl dine stik, find hvad du mangler, og etablér de nødvendige stik med den rigtige plan — håndstik, etablering og finesse.`,
quiz:{
  question:`Du spiller 3NT og mangler 2 stik. Du har i ruder: ${D}K Q 3 og bordet har ${D}A 7 6 5. Modstanderne udspiller spar. Hvad er din plan i ruder?`,
  options:['Spil ♦AKQ — 3 stik','Spil ♦AKQ og etablér de to andre som vindere','Vent med ruder og etablér i en anden kulør','Finessér mod ♦J'],correct:1,
  explain:`♦AKQ giver kun 3 stik. Men med ♦A765 på bordet og ♦KQ3 hos dig — spil ♦AKQ og de to smallkort i bordet bliver vindere hvis ruder bryder 3-3 eller 4-2. Alternativt: etablér via "opgivne stik".`},
content:`
<h2>Grundprincipperne i NT-spilføring</h2>
<h3>Trin 1: Tæl dine sikre stik</h3>
${rb(`<strong>Sikre stik</strong> er stik du kan tage uanset kortenes fordeling hos modstanderne — fx ♠AK = 2 sikre stik.`)}

<h3>Trin 2: Find ud af hvad du mangler</h3>
<p>Du melder 3NT = 9 stik. Tæl sikre stik. Mangler du fx 2 → etablér dem.</p>

<h2>Metoder til at etablere stik</h2>
${tbl(['Metode','Beskrivelse','Eksempel'],[
  ['Etablering','Spil høje kort og lad modstanderne vinde de første stik — derefter er dine smallkort vindere','♦KQ32 over ♦A54 → giv ♦A til modstanderne, etablér ♦KQ'],
  ['Finesse','Spil imod en kortplacering du håber på — halvt chance','♥Q → finessér mod ♥K'],
  ['Impas (lang kulør)','Lang kulør løbes igennem og etablerer smallkort','♠AK7654 → efter ♠AK falder alle — 4 smallkort er vindere'],
])}

<h2>Kontrolleret etablering</h2>
${tree(`Du spiller 3NT. Sikre stik: 2${S}+2${H}+1${D}+1${C} = 7 stik. Mangler 2.
${D} på hånden: ${D}KQ3. Bordet: ${D}A765.
│
Plan: Spil ${D}A, ${D}K, ${D}Q. Ruder bryder 3-3: alle 3 stik.
Ruder bryder 4-2: KQ + 1 smallkort = 3 stik.
→ Plan giver de 2 manglende stik med god sandsynlighed.`)}

<h2>Opdeling (kastet på korrekt kulør)</h2>
<p>I NT skal du beslutte hvilken kulør du etablerer i. Brug den kulør der giver flest stik med lavest risiko.</p>

${tip(`Guldreglen i NT-spilføring: "Etablér dine vindende kulører tidligst muligt — men hold back ES-stopperens i den kulør modstanderne vil løbe."`)}


<h2>Skjul den stærke hånd — lad bordet spille ud</h2>
<p>En af de vigtigste taktikker er at arrangere spillet så <strong>den stærke hånd forbliver skjult</strong> — og den svage hånd (bordet) lægges åben for alle.</p>
<h3>Hvorfor gør det forskel?</h3>
${rb(`Bordet er åbent — modstanderne kender alle 13 kort der. Den lukkede hånd hos spilføreren kendes <strong>ikke</strong>.<br><br>Finessen virker bedst når den stærke hånd sidder <em>bag</em> modstandernes honnører. Modstanderne tvinges til at spille ind i styrken — det er altid svært.`)}
<h3>Reglen: spil igennem styrken, op til svagheden</h3>
${rb(`<strong>Forsvarsspillerne</strong> vil gerne spille <em>igennem</em> den skjulte styrke og <em>op til</em> bordets åbne svagheder.<br><br><strong>Spilføreren</strong> bør modvirke dette: sørg for at kritiske finessestik spilles så den stærke hånd sidder <em>sidst</em> i stikket.`)}
<h3>Eksempler på finesse med korrekt retning</h3>
${tbl(['Situation','Forkert (avslører)','Rigtigt (skjuler)'],[
  ['♥KJ5 på hånden · ♥Q32 på bordet','Spil ♥Q fra bordet — forsvaret ved præcis om K er i plads','Spil ♥2 fra bordet, finessér ♥J fra hånden — K sidder bag venstre modstander'],
  ['♠AQ4 på hånden · ♠752 på bordet','Spil ♠Q fra hånden — K kan dække fra højre','Spil ♠5 fra bordet op til ♠AQ — den stærke hånd sidder bag modstander med K'],
  ['♦KQ6 på hånden · ♦J43 på bordet','Spil ♦J fra bordet — forsvaret spiller As og skærer forbindelsen','Spil ♦3 fra bordet op til ♦KQ — modstanderne spiller blindt'],
])}
<h3>Konsekvensen for auktionen</h3>
${rb(`Den spiller der <em>første gang</em> nævner slutkontraktens kulør (eller NT) i auktionen, bliver spilfører — bordet er makkeren.<br><br>Den <strong>stærkeste hånd bør melde slutkontrakten</strong> for at honnørerne forbliver skjult.<br><br>Netop derfor er overføringer (Jacoby transfers) så stærke: 2♦ over 1NT tvinger åbner (den stærke NT-hånd) til at melde 2♥ — åbner bliver spilfører og alle honnørerne skjules.`)}
${tip(`Huskeregel: "Den stærke hånd skjules." Brug overføringer aktivt for at styre hvem der spiller kontrakten. Finessen virker bedst når den sidder bag modstandernes honnører.`)}


<h2>Knibning (finesse)</h2>
<p>Knibning er en af de vigtigste teknikker i spilføringen. Du udnytter at modstandernes honnørkort måske sidder "i plads" — dvs. til venstre for dit øverste honnør, så det aldrig kan vinde stikket.</p>

<h3>Grundeksemplet: A-Q mod K</h3>
${rb(`Du har: <strong>♥AQ</strong> (på hånden) og <strong>♥43</strong> (på bordet).<br>
Du mangler ♥K. Hvem har den?<br><br>
<strong>Spil ♥4 fra bordet → kniber ♥Q</strong><br>
• Hvis venstre modstander (V) har ♥K: K sidder bag A-Q → Q vinder! ✓<br>
• Hvis højre modstander (H) har ♥K: H spiller K over Q → du vinder med A, men Q er tabt ✗<br><br>
Chance: <strong>50%</strong> — men bedre end at spille A og håbe K falder (0% med kun 2 kort).`)}

<h3>Retningen er altafgørende</h3>
${tbl(['Situation','Rigtig retning','Forkert retning'],[
  ['♠AQ på hånden · ♠43 på bordet','Spil ♠4 fra bordet op mod ♠AQ','Spil ♠Q fra hånden — H kan dække med K'],
  ['♥KJ på hånden · ♥43 på bordet','Spil ♥4 fra bordet op mod ♥KJ (kniber J)','Spil ♥K fra hånden — ingen knibning mulig'],
  ['♦AJ10 på hånden · ♦432 på bordet','Spil ♦4 fra bordet op mod ♦AJ10','Spil ♦A fra hånden og derefter ned — forkert'],
])}

<h3>Dobbelt knibning: A-J-10</h3>
${rb(`Du har <strong>♣AJ10</strong> og mangler ♣K og ♣Q.<br><br>
<strong>1. knibning:</strong> Spil ♣4 op mod ♣AJ10 → kniber ♣10.<br>
• Hvis V har ♣K eller ♣Q: ♣10 holder eller drives ud fordelagtigt.<br><br>
<strong>2. knibning:</strong> Næste gang spil ♣J.<br><br>
Resultat: Vinder mindst 2 stik i <strong>75%</strong> af tilfældene (kun tabt hvis både K og Q sidder hos H).`)}

<h3>Eight ever — nine never</h3>
${rb(`Huskeregel for manglende dame med mange kort:<br><br>
<strong>8 kort i farven → kniber ALTID efter damen</strong><br>
Med ♠AK7432 overfor ♠865 (8 kort, mangler ♠Q):<br>
Kniber: spil ♠A, derefter ♠8 op mod ♠K7432 og kniber ♠7. 50%.<br><br>
<strong>9 kort i farven → topspil (kniber ALDRIG)</strong><br>
Med ♠AK74332 overfor ♠865 (9 kort, mangler ♠Q):<br>
Spil ♠A og ♠K — damen falder 52% statistisk (kun 2 kort tilbage hos modstanderne).<br>
Knibning ville give kun 50% → topspil er bedre.`)}

<h3>Hvornår skal man tænke i knibning?</h3>
${tbl(['Situation','Overvej knibning?','Årsag'],[
  ['Du mangler præcis ét stik til kontrakten','JA','Knibning er eneste mulighed for det manglende stik'],
  ['Du har nok sikre stik','NEJ','Tag de sikre stik — knibning unødvendig og risikabel'],
  ['Modstanderne har angreb i en farve','JA','Knibn tidligt — inden modstanderne etablerer deres farve'],
  ['Meldingerne antyder hvem har honnøret','JA','50% bliver 70-80% med god information'],
  ['Du er i farvekontrakt og trumfer ikke trukket','NEJ','Træk trumfer FØRST — ellers trumfer modstanderne din knibning'],
])}

${tip(`Knibningsrækkefølge i NT: 1) Tæl sikre stik. 2) Find hvad du mangler. 3) Skal du knibbe — gør det TIDLIGT mens du stadig har stoppere i modstandernes angrebsfarve. Giv aldrig kontrol fra dig inden du har knibbest dit manglende stik.`)}

`},

// ═══════════════════════════════════════════
// L18
// ═══════════════════════════════════════════
{short:'Spilføring i farve',title:'Spilføring i farvekontrakt',cat:'Spilføring & Forsvar',bg:'18',
intro:`Trumfkontakter kræver en anden tænkemåde: skal du trumfe tidligt, trumfe hos bordet, eller trække trumf ud fra modstanderne? Her er de grundlæggende planer.`,
quiz:{
  question:`Du spiller 4${H}. Du har 7 trumf (hjerte) tilsammen med bordet — modstanderne har 6. Hvad er første prioritet?`,
  options:['Trumf med bordet i en sidekulør','Tag trumf ud — spil 3 runder hjerte','Etablér sidekuløren','Spil udenom (finesse) i spar'],correct:1,
  explain:`Med 7 trumf mod 6 = modstanderne har 2 trumfstik i bedste fald. Tag trumf ud tidligt så modstanderne ikke kan ruin dine vindende stik ved at trumfe.`},
content:`
<h2>Trumfudtagning (drawing trumps)</h2>
${rb(`<strong>Trumfudtagning:</strong> Spil trumfkort tidligt i spillet for at fjerne modstandernes trumfkort. Derefter kan dine vindende sidekulørstik ikke trumfes.<br><br>Regel: Tag trumf ud <em>inden</em> du etablerer sidekulørstik — medmindre du har brug for at bruge bordet til at trumfe.`)}

<h2>Trumf hos bordet (ruff and sluff)</h2>
${rb(`<strong>Trumf i bordet (eller hånden):</strong> Udnyt korte kulører til at tage stik ved at trumfe. Brug bordet til at trumfe i en kulør du mangler — det giver ekstra stik.<br><br>Typisk: du har 5-korts kulør + singletons i bordet → trumf modstandernes udspil 1-2 gange.`,'g')}

<h2>Tre planer for farvekontrakt</h2>
${tbl(['Plan','Hvornår','Fremgangsmåde'],[
  ['Direkte trumfudtagning','Mange trumf, ingen side-singleton','Spil trumf 2-3 gange, etablér side'],
  ['Trumf i bordet','Bordet har singleton, du har lang kulør','Udnyt singletonen: trumf én gang, etablér side'],
  ['Krydsruff (cross-ruff)','Begge hænder har singleton','Trumf skiftevis i begge hænder — tager mange stik'],
])}

<h2>Eksempel: Krydsruff</h2>
<div style="display:flex;flex-wrap:wrap">
  ${hand('A K 7 5 2','—','K Q J 4','A 6 3','Spilfører — trumf: ♥')}
  ${hand('8 4','K Q J 8 6 3','A 7 2','5 2','Bord')}
</div>
<p>Spilførerens hjerte void + bordets spar void = krydsruff. Spil ♠A, giv ♠ til bord (trumfer), spil ♥ fra bord (trumfer), og gentag = mange trumfstik.</p>

${tip(`Huskereglen: "Trumf ud — medmindre du <em>har brug for</em> bordet til at trumfe i en side-kulør."`)}

<h2>Knibning i farvekontrakt</h2>
${rb(`I farvekontrakter gælder samme knibningsprincipper som i NT — men med én vigtig forskel:<br><br>
<strong>Træk modstandernes trumfer INDEN du knibber i sidefarver.</strong><br><br>
Ellers risikerer du at modstanderen ruffer (trumfer) din knibning og vinder stikket gratis.`)}

${tbl(['Situation','Plan'],[
  ['Du skal knibbe i en sidefarve','1) Træk trumfer. 2) Kniber sidefarven.'],
  ['Knibningen er i selve trumffarven','Kan gøres mens trumfer trækkes — spil lavt mod K-J i trumf'],
  ['Du mangler kontrol i en sidefarve','Kniber TIDLIGT — inden modstanderne tager kontrol'],
  ['Modstanderne har 2 af dine manglende trumfer','Træk begge runder trumf FØRST, kniber dernæst'],
])}

${tip(`Huskeregel i farvekontrakt: "Træk trumfer, kniber dernæst." Undtagelse: hvis du skal ruffes på bordet (krydsruff) — trumfer trækkes IKKE.`)}

`},

// ═══════════════════════════════════════════
// L19
// ═══════════════════════════════════════════
{short:'Udspil & regler',title:'Udspil og forsvarsregler',cat:'Spilføring & Forsvar',bg:'♦',
intro:`Forsvaret begynder med udspillet — det vigtigste enkelt-kort i hele spillet. Her defineres udspilsreglerne og de vigtigste forsvarssignaler.`,
quiz:{
  question:`Modstanderne spiller 3NT. Du har ${S}K Q J 8 5 ${H}7 4 ${D}Q 9 3 ${C}J 8 2. Hvad spiller du ud?`,
  options:['♠K (top af sekvens)','♥7 (korteste kulør)','♦Q','♣J'],correct:0,
  explain:`♠K er toppen af en sekvens (KQJ). Udspil fra sekvens er det stærkeste forsvar: du etablerer din lange, stærke kulør og har gode chancer for at løbe 3-4 stik.`},
content:`
<h2>Forsvaret — hvem udspiller?</h2>
${rb(`Spilleren til <strong>venstre for spilføreren</strong> foretager det første udspil. Herefter lægger bordet sin hånd åbent. De øvrige stik: vinneren af hvert stik spiller ud til næste.`)}

<h2>Udspilsprincipper mod NT-kontrakter</h2>
${tbl(['Situation','Udspil','Begrundelse'],[
  ['Lang stærk kulør (5+ kort)','Top af kuløren (fx K fra KQJ)','Etablér lange vindere'],
  ['Sekvens (KQJ, QJ10)','Toppen af sekvensen','Sæt pres uden at opgive stik'],
  ['Ingen god kulør','4. kort fra din bedste kulør','Traditionelt udspil: giver makker information'],
  ['Makkeres meldte kulør','Makkers kulør','Støt makkers etablering'],
])}

<h2>Udspilsprincipper mod farvekontrakter</h2>
${tbl(['Situation','Udspil','Begrundelse'],[
  ['Singleton','Singletonen','Ønsker at trumfe næste gang du vinder'],
  ['Sekvens i sidekulør','Top af sekvensen','Sikker etablering'],
  ['Makkeres kulør','Makkers kulør','Støt makkeren'],
  ['Ingen god kulør','Stikker (A) i sidesidekulør','Tag stikket og se bordet'],
])}

<h2>Signalets sprog</h2>
${rb(`Forsvarsspillerne kommunikerer via signaler:<br>
<strong>Opmuntring:</strong> Høj smallkort = "Fortsæt denne kulør / jeg vil gerne have den."<br>
<strong>Afvisning:</strong> Lav smallkort = "Stop med denne kulør."<br>
<strong>Udjævning:</strong> Spil sekventielt (høj-lav) for at vise pardoubleton.`,'g')}

${tip(`Det allervigtigste i forsvar: Tænk hvad makker mangler og behøver. Signalér præcist med de kort du spiller.`)}
`},

// ═══════════════════════════════════════════
// L20
// ═══════════════════════════════════════════
{short:'Negative doblinger',title:'Negative doblinger',cat:'Spilføring & Forsvar',bg:'20',
intro:`Negative doblinger er svarers svar på en indmelding fra modstanderne, når svarer ikke kan vise sin kulør på et normalt niveau. En essentiel konvention i konkurrencebridge.`,
quiz:{
  question:`Auktion: 1${D} – (1${S}) – ? Du som svarer har: ${S}72 ${H}KJ84 ${D}Q63 ${C}A952 (11 HP). Hvad melder du?`,
  options:['PAS','2♥','Dobling (negativ)','1NT'],correct:2,
  explain:`Dobling! Du ville normalt byde 1♥ over 1♦ — men 1♠ fra modstanderne blokerede. Negativ dobling viser: "Jeg har 4-korts hjerte (og/eller klør) og 8+ HP." Åbner ved hvad du har.`},
content:`
<h2>Definition: Negativ dobling</h2>
${rb(`En <strong>negativ dobling</strong> er svarers dobling af en indmelding fra modstanderne. Den er <em>ikke</em> strafdobling — den er konventionel og viser:<br>
• 4+ kort i de kulører der IKKE er meldt (typisk major)<br>
• 8+ HP<br>
• Svarer kunne ikke vise sin kulør naturligt pga. indmelderens blokering`)}

<h2>Situationseksempler</h2>
${tbl(['Auktion','Negativ dobling viser','Krav'],[
  ['1♣ – (1♦) – X','4+ hjerte + 4 spar (begge majors)','8+ HP'],
  ['1♣ – (1♥) – X','4+ spar','8+ HP'],
  ['1♣ – (1♠) – X','4+ hjerte','8+ HP, kan ikke byde 1♥'],
  ['1♦ – (1♠) – X','4+ hjerte','8+ HP'],
  ['1♥ – (1♠) – X','Ingen major-fit, 9+ HP','Bredere — kan vise minor'],
])}

<h2>Åbnerens svar på negativ dobling</h2>
${tree(`1${C} – (1${H}) – X (negativ: 4+ spar)
│
├─ Åbner har 4 ${S}:          → 2${S} (støtte, minimum)
├─ Åbner har 4 ${S}, stærk:   → 3${S} (invitation)
├─ Åbner har ingen ${S}:      → 1NT (13-15) / 2NT (16-18)
└─ Åbner har 5+ ${C}:         → 2${C} (gentagelse)`)}

${rb(`<strong>OBS:</strong> Negative doblinger kræver at makkerparret har aftalt dette som konvention. Modstanderne skal adviseres ("besked") om at en dobling er negativ, ikke straf.`,'r')}
`},

// ═══════════════════════════════════════════
// L21
// ═══════════════════════════════════════════
{short:'Mere om indmeldinger',title:'Avancerede indmeldinger',cat:'Spilføring & Forsvar',bg:'21',
intro:`Vi uddyber indmeldingerne: hvad gør man med tofarvet hånd, hvornår er en indmelding for farlig, og hvad er Michaels Cue-bid?`,
quiz:{
  question:`Øst åbner 1${H}. Du som Syd har: ${S}KJ854 ${H}3 ${D}KQ952 ${C}Q7 (12 HP, 5-5 i spar og ruder). Hvad indmelder du?`,
  options:['1♠','2♦','2♥ (Michaels: 5-5 i spar+ruder)','Pas'],correct:2,
  explain:`2♥ = Michaels Cue-bid: viser 5-5 i de to unavngivne kulører. Over 1♥ viser 2♥ 5+ spar + 5+ minor. Langt bedre end at vise kun én kulør.`},
content:`
<h2>Tofarvet indmelding</h2>
${rb(`Med 5-5 fordeling og en god tofarvet hånd kan man bruge <strong>Michaels Cue-bid</strong>: en indmelding i modstandernes kulør der viser to kulører på én gang.`)}

${tbl(['Indmelding','Hvad det viser','Krav'],[
  ['Indmeld 2♥ over 1♥','5+ spar + 5+ minor (ruder eller klør)','10+ HP'],
  ['Indmeld 2♠ over 1♠','5+ hjerte + 5+ minor','10+ HP'],
  ['Indmeld 2♣ over 1♣','5+ hjerte + 5+ spar (begge majors)','10+ HP'],
  ['Indmeld 2♦ over 1♦','5+ hjerte + 5+ spar (begge majors)','10+ HP'],
])}

<h2>Unusual 2NT-indmelding</h2>
${rb(`<strong>2NT over modstandernes åbning</strong> viser de to laveste (ikke-meldte) kulører — normalt minor-minor. Kræver 5-5 i de to kulører og 10+ HP.<br><br>Eks.: Over 1${H}: 2NT = 5+${D} + 5+${C}`,'g')}

<h2>Stærk indmelding vs. svag</h2>
${tbl(['Håndstyrke','Strategi'],[
  ['12–15 HP','Indmeld på 1-trinnet med god 5-korts kulør'],
  ['15–18 HP','1NT (med stopper) eller stærk kulørindmelding'],
  ['19–21 HP','Jump til 2-trinnet i kulør (stærk overshoot)'],
  ['Under 12 HP','Normalt pas — medmindre i sæde (balanceringsposition)'],
])}

${tip(`I sæde-position (alle har passet undtagen dig): indmeld lettere. Du "balancerer" ved at forhindre modstanderne i at stjæle kontrakten billigt.`)}
`},

// ═══════════════════════════════════════════
// L22
// ═══════════════════════════════════════════
{short:'4NT Essespørger',title:'4NT Essespørger (Blackwood)',cat:'Spilføring & Forsvar',bg:'4NT',
intro:`Blackwood 4NT er det klassiske redskab til slemundersøgelse: en konventionel melding der spørger makker om antal esser — afgørende information inden man byder slem.`,
quiz:{
  question:`Du melder 4NT (Blackwood). Makker svarer 5♣. Hvad har makker?`,
  options:['0 eller 4 esser','1 es','2 esser','3 esser'],correct:0,
  explain:`Klassisk Blackwood-svar: 5♣ = 0 eller 4 esser, 5♦ = 1 es, 5♥ = 2 esser, 5♠ = 3 esser. Konteksten afgør om det er 0 eller 4.`},
content:`
<h2>Definition: Blackwood 4NT</h2>
${rb(`<strong>4NT (Blackwood)</strong> er en kunstig melding der spørger makker: "Hvor mange esser har du?"<br><br>
Bruges kun når fit er etableret og slem undersøges. 4NT er <em>ikke</em> et naturligt bud på NT.`)}

<h2>Svar på 4NT</h2>
${tbl(['Makkers svar','Antal esser'],[
  ['5♣','0 eller 4 esser'],
  ['5♦','1 es'],
  ['5♥','2 esser'],
  ['5♠','3 esser'],
])}

<h2>RKC Blackwood (Roman Key Card)</h2>
${rb(`I Ny Nordisk bruger man typisk <strong>RKC 1430</strong>: 4NT spørger om "key cards" — de 4 esser PLUS trumfkongens K tæller som 5. key cards.<br><br>
Svar:<br>
• 5${C} = 1 eller 4 key cards<br>
• 5${D} = 0 eller 3 key cards<br>
• 5${H} = 2 key cards, ingen trumf-dame<br>
• 5${S} = 2 key cards + trumf-dame`,'g')}

<h2>Beslutning: Byd slem eller ej?</h2>
${tree(`Du + makker har 33+ HP. Du melder 4NT.
Makker svarer 5${D} (1 key card)
│
├─ Du har 3 key cards → total 4 → <span class="ok">6NT (lilleslem)</span>
└─ Du har 2 key cards → total 3 → <span class="no">Stopp på 5-trinnet (slem for usikker)</span>`)}

<h2>Hvornår byder man 4NT?</h2>
${rb(`Byd 4NT kun når:<br>
1. Fit er etableret eller NT-kontrakt er aftalt<br>
2. Makkerparret tilsammen sandsynligvis har 33+ HP<br>
3. Du er usikker på om makker har de nødvendige esser til slem`,'g')}

<h2>Meldeforløbs-eksempler</h2>

${auction('Eksempel — RKC Blackwood 1430 på vej til slem','N','NS',[
  {b:'1♥', tip:'Åbner åbner 1♥: 5-korts hjerte, 15 HP.', hp:'15 HP', why:'5♥ + 15 HP → åbn 1♥'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'2NT', tip:'Svarer melder Jacoby 2NT: kunstig kravmelding der viser 4-korts hjerte-fit og 13+ HP. Krav til udgang.', hp:'14 HP', why:'4♥ fit + 14 HP. Jacoby 2NT spørger åbner om singelton/void og styrke.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'4♥', tip:'Åbner svarer 4♥ på Jacoby 2NT: viser minimum åbningshånd uden singelton (15 HP, jævn).', hp:'15 HP', why:'Jævn hånd, 15 HP = minimum. Svarer ved nu: 15+14=29 HP. Undersøg slem?'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'4NT', tip:'Svarer spørger med RKC Blackwood! 4NT = "Hvor mange nøglekort har du?" (Nøglekort = 4 esser + trumf-K)', hp:'14 HP', why:'29 HP kombineret → slem mulig. Men mangler vi esser? 4NT afklarer det.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'5♣', tip:'Åbner svarer 5♣ = 1430-kode: 5♣ = 1 eller 4 nøglekort. Her sandsynligvis 1.', hp:'15 HP', why:'1430: 5♣=1/4, 5♦=0/3, 5♥=2 uden trumf-D, 5♠=2 med trumf-D'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'6♥', tip:'Svarer byder lilleslem! Med 1 nøglekort fra åbner + svarers egne esser = nok til lilleslem.', hp:'14 HP', why:'2 esser samlet (åbner 1 nøglekort + svarers egne). 12 stik sandsynlige med 29 HP og 9-korts fit.'},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'', hp:'', why:''},
  {b:'Pas', tip:'Slutkontrakt: 6♥ (lilleslem). Kræver 12 stik med hjerter som trumf.', hp:'', why:''},
])}

`},

// ═══════════════════════════════════════════
// L23
// ═══════════════════════════════════════════
{short:'Reverse meldinger',title:'Reverse meldinger (omvendinger)',cat:'Spilføring & Forsvar',bg:'23',
intro:`Reverse er en præcis melding der viser ekstra styrke. Fordi den tvinger budgivningen op på et uønsket niveau, kræver den 17+ HP — og er altid forcing til parti.`,
quiz:{
  question:`Auktionen er: 1${C} – 1${H} – 2${S}. Hvad viser åbnerens 2♠?`,
  options:[
    `Svag hånd med 4 spar og 4 klør`,
    `17+ HP, 5+ klør og 4+ spar — forcing til parti`,
    `15-17 HP, afbalanceret`,
    `Spærremelding i spar`
  ],correct:1,
  explain:`2♠ over 1♥ er en reverse (omvending): den er højere end åbningskuløren (klør) på 2-trinnet. Det er forcing og viser 17+ HP og 5+klør + 4+ spar.`},
content:`
<h2>Definition: Reverse (omvending)</h2>
${rb(`En <strong>reverse</strong> er åbnerens gensvar i en ny kulør på 2-trinnet, der er <em>højere</em> end åbningskuløren. Den er forcing og viser 17+ HP og en tofarvet hånd.<br><br>
Grunden til at den kræver ekstra styrke: makker tvinges til at melde på 3-trinnet for at "korrigere" til åbnerens første kulør.`)}

<h2>Hvornår er det en reverse?</h2>
${tbl(['Auktionssekvens','Er det reverse?','Bemærkning'],[
  ['1♣ – 1♥ – 2♦','NEJ','2♦ er lavere end 2♥ (åbningskuløren) — ikke reverse'],
  ['1♣ – 1♥ – 2♠','JA','2♠ er højere end 2♣ — reverse, 17+ HP'],
  ['1♦ – 1♠ – 2♥','JA','2♥ er højere end 2♦ — reverse, 17+ HP'],
  ['1♦ – 1♥ – 2♣','NEJ','2♣ er lavere end 2♦ — ikke reverse'],
  ['1♥ – 1♠ – 2♣','NEJ','Ingen reverse mulig over 1♥ på 2-trinnet til lavere kulør'],
])}

<h2>Reverse viser fordeling</h2>
${rb(`Reverse viser altid: <em>Åbnerens første kulør er LÆNGERE end den anden.</em><br>
1♣ – 1♥ – 2♠ = åbner har 5+ klør og 4 spar (altid: første kulør er længere)`,'g')}

<h2>Svarers reaktion på reverse</h2>
${tree(`1${C} – 1${H} – 2${S} (reverse, 17+ HP, 5+${C}+4${S})
│
├─ Svarer har 4 ${S}:       → 4${S} (parti i major)
├─ Svarer gentager ${H}:    → 3${H} (6-korts, forcing)
├─ Svarer melder 2NT:      → (forcing) undersøg bedste kontrakt
├─ Svarer melder 3${C}:    → støtte til klør
└─ Svarer melder 3NT:      → parti direkte`)}

${tip(`Huskeregel: Reverse = Rigtig Styrke. Byd det kun med 17+ HP. Med 13-16 HP: gentag din første kulør eller meld NT.`)}
`},

// ═══════════════════════════════════════════
// L24
// ═══════════════════════════════════════════
{short:'Majorstøtter',title:'Majorstøtter — avancerede støttemeldinger',cat:'Spilføring & Forsvar',bg:'24',
intro:`Den endelige lektion samler alt om støtte til makkeres major — inklusive de præcise HP-grænser, Bergen-støtter, og den vigtige forskel på 3- og 4-korts støtte.`,
quiz:{
  question:`Makker åbner 1${S}. Du har: ${S}K875 ${H}AQ4 ${D}J73 ${C}862 (11 HP, 4 spar). Hvad melder du?`,
  options:['2♠ (simpel støtte)','3♠ (limit raise)','4♠ (parti)','1NT'],correct:1,
  explain:`4-korts spar + 11 HP = limit raise 3♠. 11 HP + åbners 13-20 HP = 24-31 HP total. Med 13-15 HP hos åbner: parti mulig. Åbner vurderer og byder parti med 15+ HP.`},
content:`
<h2>Oversigt: Støttemeldinger over 1-major</h2>
${rb(`Når makker åbner 1${H} eller 1${S}, er der tre parametre der styrer din støttemelding:<br>
1. Antal kort i makkeres kulør (3-korts vs. 4-korts fit)<br>
2. Dine HP (6-10, 10-12, 13+)<br>
3. Fordelingens kvalitet (afbalanceret vs. singleton/void)`)}

${tbl(['Støttemelding','HP','Kortlængde','Type','Forcing?'],[
  ['2♥/2♠ (simpel)','6–10','3-4 kort','Non-forcing invitation','NEJ'],
  ['3♥/3♠ (limit raise)','10–12','4 kort','Invitation til parti','NEJ'],
  ['4♥/4♠ (direkte parti)','6–10','5+ kort, distribueret hånd','Blokerende parti','NEJ'],
  ['4♥/4♠ (stærk parti)','13–15','4 kort','Direkte parti','NEJ'],
  ['2NT (Jacoby 2NT)','13+','4+ kort','Forcing til parti, slemundersøg.','JA'],
])}

<h2>Jacoby 2NT over major</h2>
${rb(`<strong>Jacoby 2NT</strong> er en avanceret konvention: 2NT over makkeres 1-major viser 13+ HP og 4+ korts fit og er <em>forcing til parti</em>. Makker giver information om singeltons og styrke:<br><br>
• 3 i ny kulør = singleton i den kulør<br>
• 3 i åbningskuløren = minimum (13-14 HP)<br>
• 4 i åbningskuløren = stærk uden singleton`,'g')}

<h2>Bergen støtter (alternativ til limit raise)</h2>
${tree(`1${S} – ? (svarer med 4-korts spar):
│
├─ 3${C} = 7-9 HP, 4 spar    (Bergen, svag limit raise)
├─ 3${D} = 10-12 HP, 4 spar  (Bergen, stærk limit raise = traditionel 3${S})
└─ 3${S} = 10-12 HP, 3 spar  (traditionel limit raise med 3-korts)`)}

<h2>Samlet beslutningsdiagram</h2>
${tree(`Makker åbner 1${H}:
│
├─ 0–5 HP              → PAS
│
├─ 6–10 HP + 3 ${H}    → 2${H} (simpel støtte)
├─ 6–10 HP + 5+ ${H}   → 4${H} (præemptiv parti)
│
├─ 10–12 HP + 4 ${H}   → 3${H} (limit raise, invitation)
│
├─ 13–15 HP + 4 ${H}   → 4${H} (parti direkte)
│
└─ 13+ HP + 4+ ${H}    → 2NT (Jacoby, forcing, undersøg slam)`)}

${rb(`<strong>Congratulations!</strong> Du har nu gennemgået alle 24 lektioner i Skolebridge for Voksne — Ny Nordisk Standard. Du er klar til at spille i bridgeklub!`,'g')}
`},

// ═══════════════════════════════════════════
// SYSTEMSAMMENLIGNING
// ═══════════════════════════════════════════
{short:'Systemer & fordelingspoint',title:'Systemforskelle & fordelingspoint',cat:'Reference',bg:'Σ',
intro:`Dansk bridge undervises efter tre hovedsystemer med vigtige forskelle. Og fordelingspoint er et af de mest misbrugte begreber i bridge — her er den præcise regel.`,
quiz:{
  question:`Du åbner 1♥ og makker støtter med 3♥. Du har en singleton i klør (♣K). Hvornår tæller du fordelingspoint for singletonen?`,
  options:[
    'Allerede da du åbnede 1♥',
    'Først nu — efter makker har vist hjerte-fit',
    'Aldrig — singletonen tæller ikke',
    'Kun hvis singletonen er en honnør'
  ],correct:1,
  explain:`Fordelingspoint (støttepoint) tælles KUN efter fit er fundet. Du åbner udelukkende på HP. Først når makker viser fit (her 3♥), må du lægge støttepoint til. Singleton = 3 FP. Men bemærk: ♣K som singleton er tvivlsom — en singleton honnør er overvurderet da modstanderne kan spille om den.`},
content:`
<h2>De tre danske systemer</h2>
${tbl(['','Dansk Skolebridge (DSB)','Ny Nordisk Standard (NNS)','Blakset / Centersystemet'],[
  ['<strong>Grundlag</strong>','Pædagogisk begyndersystem — lærte mio. danskere bridge','Nordisk samarbejde 2007. Standard i klubbridge','Lars Blaksets "Moderne Bridge" — videreudvikling af Centersystemet'],
  ['<strong>1NT zone</strong>','15–17 HP (som NNS)','15–17 HP','15–17 HP (samme)'],
  ['<strong>2NT zone</strong>','20–21 HP','20–21 HP','20–21 HP'],
  ['<strong>Åbning major</strong>','4-korts major tilladt','5-korts spar, 4-korts hjerte','5-korts spar krævet i de fleste varianter'],
  ['<strong>Svag 2</strong>','Brugt (6-korts, 6-10 HP)','Brugt (standard)','Brugt'],
  ['<strong>Stayman</strong>','Grundlæggende ja','Ja — standard','Ja'],
  ['<strong>Jacoby overf.</strong>','Introduceres sent','Standard fra start','Standard'],
  ['<strong>Neg. doblinger</strong>','Introduceres sent','Standard','Standard'],
  ['<strong>Fordelingspoint</strong>','Kun ved fit (støttepoint)','Kun ved fit (støttepoint)','Kun ved fit — "støttepoint"'],
  ['<strong>Primær bruger</strong>','Skoler, begyndere','Klubspillere, turneringsspillere','Avancerede klubspillere, Blaksets center'],
])}

${rb(`<strong>Praktisk konsekvens:</strong> Systemerne er mere ens end forskellige på grundniveau. Den største forskel er om 1♠ kræver 5 kort (NNS/Blakset) eller kan have 4 (DSB). Begynder du med DSB, er overgangen til NNS lille.`)}

<h2>Fordelingspoint — den præcise regel</h2>

${rb(`<strong>Kerneproblem:</strong> "Fordelingspoint" er et af bridgens mest misforståede begreber. Mange spillere tæller dem med allerede ved åbningen — det er en klassisk nybegynderfejl der fører direkte til for høje kontrakter.`, 'warn')}

<h3>Den absolutte grundregel</h3>
${rb(`<strong>Fordelingspoint tælles KUN efter fit er fundet.</strong><br><br>
Åbningsmelding og svarmelding baseres <em>udelukkende</em> på HP.<br>
Fordelingspoint (støttepoint) aktiveres <em>først</em> når begge parter ved at de har 8+ kort i samme kulør.`)}

<h3>Tre systemer for fordelingspoint</h3>
${tbl(['System','Void (0 kort)','Singleton (1 kort)','Doubleton (2 kort)','Bruges i'],[
  ['<strong>Korthedssystem (klassisk)</strong>','3 FP','2 FP','1 FP','DSB, mange begynderbøger'],
  ['<strong>Støttepointskala (moderne)</strong>','5 FP','3 FP','1 FP','NNS, Blakset, Ældresagen-kompendiet'],
  ['<strong>Længdepointssystem</strong>','—','—','—','5.-kort: +1, 6.-kort: +2 osv. — bruges af åbner'],
])}

${rb(`<strong>Anbefaling:</strong> Brug den moderne skala (5/3/1) — den er mere præcis og bruges i NNS og de fleste moderne danske undervisningsmaterialer.`)}

<h3>Hvornår tæller man fordelingspoint?</h3>
${tbl(['Situation','Tæl FP?','Årsag'],[
  ['Du åbner 1♥ med singleton i klør','<span class="no">NEJ</span>','Ingen fit fundet endnu — åbn på rene HP'],
  ['Du svarer på makkers åbning uden fit','<span class="no">NEJ</span>','Fit ikke bekræftet'],
  ['Makker åbner 1♥, du har 4 hjerter','<span class="yes">JA</span>','8-korts fit fundet — tæl FP ved støttemeldingen'],
  ['Du støtter makkeres kulør','<span class="yes">JA</span>','Fit bekræftet — tæl FP nu'],
  ['Fit er fundet, du melder videre','<span class="yes">JA</span>','Behold FP i resten af auktionen'],
  ['Du spiller i NT','<span class="no">NEJ</span>','Ingen trumf — FP er irrelevante i NT-kontrakter'],
  ['Fit er fundet MEN du spiller NT til slut','<span class="no">NEJ</span>','Fit hjælper ikke i NT — drop FP igen'],
])}

<h3>Hvornår skal man IKKE tælle fordelingspoint</h3>
${rb(`<strong>Liste over klassiske fejl:</strong><br><br>
❌ <strong>Åbne på 12 HP + 3 FP = "15 point"</strong> — forkert. Åbn KUN på 12 HP hvis fordeling er god nok, ikke fordi FP giver dig 15.<br><br>
❌ <strong>Tælle FP i sanstrumf</strong> — forkert. Singletoner og void'er er stort set værdiløse i NT (du kan ikke trumfe).<br><br>
❌ <strong>Tælle FP ved indmelding</strong> — forkert. Fit med makker er ikke fundet endnu.<br><br>
❌ <strong>Tælle FP for singleton honnør (K, D, B)</strong> — problematisk. En singleton K er 3 HP + 3 FP = 6 point? Nej — singleton honnører er typisk overvurderede. K som singleton er en svag K (modstanderne kan "løbe" om den). Nogen systemer reducerer til 0 FP for singleton honnør.<br><br>
❌ <strong>Tælle FP hos åbner</strong> — åbner bør kun tælle <em>længdepoint</em> (det 6. kort = +1, 7. kort = +2), ikke korthedsfp.`)}

<h3>Fordelingspoint vs. taberberegning</h3>
${rb(`Erfarne spillere bruger ofte <strong>taberberegning (losing trick count)</strong> frem for fordelingspoint — en mere præcis metode til at vurdere skæve hænder med fit.<br><br>
<strong>Grundprincip:</strong> Tæl tabere (kort der kan tage stik) i dine tre længste kulører — max 3 pr. kulør. Åbningshånd = typisk 7 tabere. Kombiner med makkers tabere: 24 minus kombinerede tabere = estimerede stik.<br><br>
Eksempel: Du har 7 tabere, makker viser 7 tabere (simpel støtte). 24−14=10 stik → 4♥-parti sandsynligt.<br><br>
Taberberegning er mere pålidelig end FP ved skæve fordelinger fordi den modellerer kortenes spilkraft direkte frem for at tælle abstrakte "point".`)}

<h2>Systemoversigt: Vigtigste åbningszoner</h2>
${tbl(['Melding','HP-zone','Fordeling','System'],[
  ['1♣/1♦','13–20 HP','3+ kort (tvunget minor)','Alle systemer'],
  ['1♥','13–20 HP','DSB: 4+, NNS/Blakset: 4+','Se note om hjerte'],
  ['1♠','13–20 HP','NNS/Blakset: 5+, DSB: 4+','Vigtig forskel!'],
  ['1NT','15–17 HP','Afbalanceret (jævn)','Alle systemer'],
  ['2♣ (krav)','22+ HP','Enhver','Alle systemer'],
  ['Svag 2♦/2♥/2♠','6–10 HP','6-korts kulør','NNS, Blakset (ikke DSB)'],
  ['2NT','20–21 HP','Afbalanceret','Alle systemer'],
  ['3-åbninger','5–10 HP','7-korts kulør','Alle systemer'],
])}

${tip(`Tag-med huskeregel: <strong>HP styrer auktionen, FP justerer støttemeldingen.</strong> Åbn aldrig "på" fordelingspoint. Tæl dem kun når fit er bekræftet og du er i trumfspil.`)}
`},


    ];
