# Støtte til major

Når makker har åbnet 1♥ eller 1♠ og du har fit (3+ kort).

## Komplet beslutningstræ

```
Makker åbnede 1♥
│
├─ 0–5 HP                                  → PAS
│
├─ 6–10 HP + 3 ♥                           → 2♥   (simpel støtte)
├─ 6–10 HP + 5+ ♥, distribueret            → 4♥   (præemptiv parti)
│
├─ 10–12 HP + 4 ♥                          → 3♥   (limit raise, invitation)
├─ 10–12 HP + 3 ♥, jævn                    → 2NT  (uden Jacoby) eller via 2♣ ny kulør
│
├─ 13–15 HP + 4 ♥, jævn                    → 4♥   (parti direkte)
│
└─ 13+ HP + 4+ ♥                           → 2NT  (Jacoby, forcing parti)
```

## Tabel — støttemeldinger

| Melding | HP | Kortlængde | Type | Forcing? |
|---------|----|-----------|------|----------|
| 2♥ / 2♠ (simpel) | 6–10 | 3–4 | Non-forc. invitation | NEJ |
| 3♥ / 3♠ (limit raise) | 10–12 | 4 | Invitation til parti | NEJ |
| 4♥ / 4♠ (præemptiv) | 6–10 | 5+, distribueret | Blokerende parti | NEJ |
| 4♥ / 4♠ (stærk) | 13–15 | 4 | Direkte parti | NEJ |
| **2NT (Jacoby)** | **13+** | **4+** | **Forcing til parti, slemundersøgelse** | **JA** |

## Jacoby 2NT — over 1-major

**2NT over 1♥ eller 1♠ = 13+ HP, 4+ kort i kuløren, forcing til parti.**

Åbnerens svar viser singletons og styrke:

| Åbners gensvar | Betydning |
|----------------|-----------|
| 3 i ny kulør | **Singleton/void** i den meldte kulør |
| 3 i åbningskuløren | Minimum (13–14 HP), ingen singleton |
| 4 i åbningskuløren | Stærk uden singleton |
| 3NT | 15–17 HP, ingen singleton |

## Bergen-støtter (alternativ)

```
1♠ — ?  (svarer med 4-korts spar):
       ├─ 3♣  = 7–9 HP, 4 ♠   (Bergen, svag limit raise)
       ├─ 3♦  = 10–12 HP, 4 ♠ (Bergen, stærk limit raise)
       └─ 3♠  = 10–12 HP, 3 ♠ (traditionel limit raise med 3-korts)
```

## Eksempler

| Hånd | Makker åbnede | Svar |
|------|---------------|------|
| ♠K75 ♥Q84 ♦A932 ♣J64 (10 HP, 3♥) | 1♥ | **2♥** |
| ♠K875 ♥AQ4 ♦J73 ♣862 (11 HP, 4♠) | 1♠ | **3♠** (limit raise) |
| ♠KQ875 ♥3 ♦9732 ♣864 (6 HP, 5♠) | 1♠ | **4♠** (præemptiv) |
| ♠K875 ♥A3 ♦AKJ7 ♣Q62 (16 HP, 4♠) | 1♠ | **2NT** (Jacoby) |
| ♠KQ85 ♥A3 ♦KJ72 ♣K62 (14 HP, 4♠) | 1♠ | **4♠** (stærk parti) |

## Huskeregel

| Hvor mange ♥/♠? | Hvor mange HP? | Svar |
|------|------|------|
| 3 | 6–10 | 2-trin |
| 3 | 10–12 | 3-trin (limit, men 4-korts foretrækkes) |
| 4 | 6–10 | 2-trin (eller 4-trin præemptivt med fordeling) |
| 4 | 10–12 | 3-trin (limit) |
| 4 | 13–15 | 4-trin (parti) |
| 4 | 16+ | **2NT Jacoby** (slemundersøg) |
