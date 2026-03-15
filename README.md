# Bridge Lærebog 🃏

Interaktiv bridge lærebog baseret på **Skolebridge for Voksne** og **Ny Nordisk Standard**.

**[▶ Åbn appen](https://DITBRUGERNAVN.github.io/bridge-larebog)**

---

## Indhold

- 25 lektioner med interaktive quiz
- Komplet bridgeordbog (95+ termer, med engelske og alternative termer)
- Interaktive meldeforløbs-eksempler med hover-forklaringer
- HP-beregner med real-time feedback
- Lys/mørkt tema
- Installerbar som app (PWA) på iPhone, iPad, Android

---

## 🚀 Opsætning på GitHub Pages (5 min)

### Trin 1 — Opret repository

```bash
# Gå til github.com → New repository
# Navn: bridge-larebog
# Synlighed: Public (kræves til gratis GitHub Pages)
# Klik: Create repository
```

### Trin 2 — Upload filer

Enten via browser (drag & drop) eller git:

```bash
git clone https://github.com/DITBRUGERNAVN/bridge-larebog.git
cd bridge-larebog

# Kopier alle filer hertil:
# index.html, manifest.json, sw.js, icon-192.png, icon-512.png, .nojekyll

git add .
git commit -m "Bridge lærebog — initial"
git push
```

### Trin 3 — Aktivér GitHub Pages

1. Gå til dit repo → **Settings** → **Pages**
2. Under *Source*: vælg **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Klik **Save**

Efter ~60 sekunder er siden live på:
`https://DITBRUGERNAVN.github.io/bridge-larebog`

### Trin 4 — Opdater manifest.json

Åbn `manifest.json` og erstat `start_url`:
```json
"start_url": "/bridge-larebog/"
```
*(Tilpas til dit repo-navn)*

---

## 📱 Installér som app

### iPhone / iPad (Safari)
1. Åbn siden i **Safari** (ikke Chrome/Firefox)
2. Tryk **Del**-knappen (firkant med pil op)
3. Vælg **"Føj til hjemmeskærm"**
4. Giv den et navn og tryk **Tilføj**

> Appen åbner derefter uden browser-chrome i fuld skærm.

### Android (Chrome)
1. Åbn siden i **Chrome**
2. Tryk de tre prikker (⋮) → **"Føj til startskærm"**  
   — eller vent på den automatiske installationsbanner
3. Tryk **Installér**

### Desktop (Chrome/Edge)
- Klik på **installér-ikonet** (⊕) i adresselinjen
- Eller brug menuen → **"Installér Bridge Lærebog"**

---

## ♻️ Offline-understøttelse

Service workeren cacher alle filer ved første besøg.  
Appen **virker offline** efter første indlæsning — perfekt til bridgeklubben.

---

## 🔄 Opdatering

Når du opdaterer `index.html`:
1. Ændr versionsnummeret i `sw.js`: `const CACHE = 'bridge-v2';`
2. Push begge filer til GitHub
3. GitHub Pages deployer automatisk inden for ~60 sekunder

---

## Licens

Til privat og uddannelsesmæssig brug. Bridgeregler og -terminologi © Danmarks Bridgeforbund.
