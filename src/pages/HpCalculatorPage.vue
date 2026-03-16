<template>
  <q-page padding>
    <div class="lhdr" data-bg="HP">
      <div class="lnum">Reference · Matematik</div>
      <div class="ltitle">Pointsystem og zoner</div>
      <div class="lintro">Forstå <em>hvorfor</em> HP-grænserne er præcis der de er — ikke som regler der skal huskes, men som matematik der kan udledes.</div>
    </div>
    <div class="lbody">

      <h2>Grundlaget: 40 HP i pakken</h2>
      <p>En kortpakke indeholder præcis <strong>40 HP</strong> fordelt på 52 kort:</p>
      <div class="pts">
        <div class="pt-item"><div class="pt-card">A</div><div class="pt-lbl">4 × 4 = 16</div></div>
        <div class="pt-item"><div class="pt-card">K</div><div class="pt-lbl">4 × 3 = 12</div></div>
        <div class="pt-item"><div class="pt-card">Q</div><div class="pt-lbl">4 × 2 = 8</div></div>
        <div class="pt-item"><div class="pt-card">J</div><div class="pt-lbl">4 × 1 = 4</div></div>
        <div class="pt-item"><div class="pt-card" style="font-size:14px">Σ</div><div class="pt-lbl">= 40 HP</div></div>
      </div>
      <p>Gennemsnit pr. hånd: 40 ÷ 4 = <strong>10 HP</strong>. Det er dit udgangspunkt for alle beregninger.</p>

      <h2>Zonemodellen</h2>
      <p>Tænk på den <em>kombinerede</em> styrke hos makkerparret som fire zoner. Modstanderne har resten af de 40 HP.</p>

      <div style="margin:24px 0">
        <div style="display:flex;height:48px;border-radius:5px;overflow:hidden;border:1px solid rgba(128,128,128,0.2)">
          <div style="width:50%;background:#2a2a38;display:flex;align-items:center;justify-content:center;font-size:11px;color:grey">20 HP · Delkontrakt</div>
          <div style="width:17.5%;background:rgba(200,169,110,.3);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--q-primary)">25 HP · Parti</div>
          <div style="width:20%;background:rgba(200,169,110,.55);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--q-primary)">33 HP · Slem</div>
          <div style="width:12.5%;background:rgba(200,169,110,.85);display:flex;align-items:center;justify-content:center;font-size:11px;color:#0e0e12">37 HP</div>
        </div>
        <div style="display:flex;font-size:11px;color:grey;margin-top:6px;gap:2px">
          <div style="width:50%">←── del ──→</div>
          <div style="width:17.5%;text-align:center">parti</div>
          <div style="width:20%;text-align:center">slem</div>
          <div style="width:12.5%;text-align:center">grand</div>
        </div>
      </div>

      <table class="tbl">
        <thead><tr><th>Zone</th><th>Kombinerede HP</th><th>Modstanderne har</th><th>Estimerede stik</th><th>Kontrakt</th></tr></thead>
        <tbody>
          <tr><td>Delkontrakt</td><td>20–24 HP</td><td>16–20 HP</td><td>7–8 stik</td><td>1–2 niveau</td></tr>
          <tr><td><strong>Parti</strong></td><td><strong>25–32 HP</strong></td><td><strong>8–15 HP</strong></td><td><strong>9–11 stik</strong></td><td><strong>3NT / 4♥♠ / 5♣♦</strong></td></tr>
          <tr><td>Lilleslem</td><td>33–36 HP</td><td>4–7 HP</td><td>12 stik</td><td>6-trinnet</td></tr>
          <tr><td>Storeslem</td><td>37–40 HP</td><td>0–3 HP</td><td>13 stik</td><td>7-trinnet</td></tr>
        </tbody>
      </table>

      <h2>Regnekalkulator: Stikestimering</h2>
      <p>Formlen: <span style="background:rgba(0,0,0,0.03);padding:2px 8px;border-radius:3px;font-family:var(--mono)">Estimerede stik ≈ (kombinerede HP ÷ 40) × 13</span></p>

      <!-- Interactive calculator -->
      <div style="background:rgba(0,0,0,0.03);border:1px solid rgba(128,128,128,0.2);border-radius:6px;padding:24px;margin:20px 0">
        <div style="display:flex;gap:32px;flex-wrap:wrap;margin-bottom:20px">
          <div>
            <div style="font-size:11px;color:grey;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Dine HP</div>
            <div style="display:flex;align-items:center;gap:10px">
              <q-btn flat dense icon="remove" @click="myHP = Math.max(0, myHP - 1)" style="background:transparent;border:1px solid rgba(128,128,128,0.2);color:inherit;width:32px;height:32px" />
              <span style="font-size:28px;font-weight:600;color:var(--q-primary);min-width:40px;text-align:center">{{ myHP }}</span>
              <q-btn flat dense icon="add" @click="myHP = Math.min(40, myHP + 1)" style="background:transparent;border:1px solid rgba(128,128,128,0.2);color:inherit;width:32px;height:32px" />
            </div>
          </div>
          <div>
            <div style="font-size:11px;color:grey;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Makkeres HP</div>
            <div style="display:flex;align-items:center;gap:10px">
              <q-btn flat dense icon="remove" @click="mkHP = Math.max(0, mkHP - 1)" style="background:transparent;border:1px solid rgba(128,128,128,0.2);color:inherit;width:32px;height:32px" />
              <span style="font-size:28px;font-weight:600;color:var(--q-positive);min-width:40px;text-align:center">{{ mkHP }}</span>
              <q-btn flat dense icon="add" @click="mkHP = Math.min(40, mkHP + 1)" style="background:transparent;border:1px solid rgba(128,128,128,0.2);color:inherit;width:32px;height:32px" />
            </div>
          </div>
          <div style="display:flex;flex-direction:column;justify-content:flex-end">
            <div style="font-size:11px;color:grey;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Total</div>
            <span style="font-size:28px;font-weight:600;color:inherit">{{ total }}</span>
          </div>
        </div>

        <!-- Result bar -->
        <div style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;font-size:11px;color:grey;margin-bottom:6px">
            <span>0</span><span>20</span><span>25</span><span>33</span><span>37</span><span>40</span>
          </div>
          <div style="height:12px;background:rgba(128,128,128,0.2);border-radius:6px;position:relative;overflow:visible">
            <div :style="{ width: Math.min(total / 40 * 100, 100) + '%', background: zoneColor, height: '100%', borderRadius: '6px', transition: 'width .2s' }"></div>
            <div style="position:absolute;top:-4px;left:50%;width:1px;height:20px;background:rgba(128,128,128,0.2)"></div>
            <div style="position:absolute;top:-4px;left:62.5%;width:1px;height:20px;background:rgba(200,169,110,.4)"></div>
            <div style="position:absolute;top:-4px;left:82.5%;width:1px;height:20px;background:rgba(200,169,110,.6)"></div>
            <div style="position:absolute;top:-4px;left:92.5%;width:1px;height:20px;background:rgba(200,169,110,.8)"></div>
          </div>
        </div>

        <!-- Verdict -->
        <div style="background:transparent;border:1px solid rgba(128,128,128,0.2);border-radius:4px;padding:16px 20px">
          <div style="font-size:11px;color:grey;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Analyse</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
            <div>
              <div style="font-size:11px;color:grey;margin-bottom:3px">Estimerede stik</div>
              <div style="font-size:20px;font-weight:600" :style="{ color: zoneColor }">{{ estStik }}</div>
            </div>
            <div>
              <div style="font-size:11px;color:grey;margin-bottom:3px">Zone</div>
              <div style="font-size:14px;font-weight:500" :style="{ color: zoneColor }">{{ zoneName }}</div>
            </div>
            <div>
              <div style="font-size:11px;color:grey;margin-bottom:3px">Modstanderne har</div>
              <div style="font-size:14px;color:grey">{{ 40 - total }} HP</div>
            </div>
          </div>
          <div style="margin-top:12px;font-size:13.5px;color:grey;line-height:1.6;padding-top:10px;border-top:1px solid rgba(128,128,128,0.2)">{{ verdict }}</div>
        </div>
      </div>

      <h2>Hvorfor præcis 13 HP til åbning?</h2>
      <div class="rbox">
        <strong>Logikken:</strong> Med 13 HP og makkeres gennemsnitlige 10 HP = 23 HP total — <em>ikke</em> nok til parti.<br><br>
        Men med 13 HP har du mulighed for parti <em>hvis makker har mere end gennemsnit</em>: 13 + 12 = 25 HP → parti. Åbningen siger: "Vi har muligvis parti — lad os undersøge." Under 13 HP er sandsynligheden for parti for lav til at det betaler sig at åbne.
      </div>

      <div class="rbox g">
        <strong>Kontrol:</strong> Kan du vinde 7 stik med 13 HP hvis makker er helt blank?<br>
        13 HP ≈ (13/40) × 13 = <strong>4,2 stik alene</strong>. Med fordeling og lidt held: 6–7 stik. Ja — 7-stiks kontrakten (1-trinnet) holder typisk.
      </div>

      <h2>Hvorfor 1NT er 15–17 HP (og ikke bredere)?</h2>
      <p>Sammenlign med kulør-åbning der dækker 13–20 HP (8 HP variation). Det er bredt — men auktionen fortsætter i flere runder og indsnævrer præcisionen.</p>
      <p>1NT er <em>en</em> melding der skal fortælle makker nok til at slutkontrahere direkte. Makker beregner:</p>

      <table class="tbl">
        <thead><tr><th>Zone</th><th>Åbner (1NT)</th><th>Makker behøver</th><th>Makkers svar</th></tr></thead>
        <tbody>
          <tr><td>Ingen parti</td><td>15–17 HP</td><td>0–7 HP</td><td>PAS</td></tr>
          <tr><td>Mulig parti</td><td>15–17 HP</td><td>8–9 HP</td><td>2NT (invitation)</td></tr>
          <tr><td>Sikker parti</td><td>15–17 HP</td><td>10+ HP</td><td>3NT direkte</td></tr>
        </tbody>
      </table>

      <p>Med 3 HP spændvidde (15–17) kan makker beregne grænsen præcist. Var spændvidden 5+ HP ville makker ikke vide om "invitation" er passende.</p>

      <h2>Partisummens matematik — stikværdi fra bunden</h2>
      <p>Partigrænsen er <strong>100 point i stikværdi</strong>. Her er regnestykket for hver kontraktstype:</p>

      <table class="tbl">
        <thead><tr><th>Kontrakt</th><th>Stikværdi-formel</th><th>Total</th><th>Parti?</th></tr></thead>
        <tbody>
          <tr><td class="bid">3NT</td><td>40 (første NT-stik) + 2 × 30 = 40+60</td><td>100 pt</td><td>✓ lige præcis</td></tr>
          <tr><td class="bid">4♥/4♠</td><td>4 × 30</td><td>120 pt</td><td>✓</td></tr>
          <tr><td class="bid">3♥/3♠</td><td>3 × 30</td><td>90 pt</td><td>✗ delkontrakt</td></tr>
          <tr><td class="bid">5♣/5♦</td><td>5 × 20</td><td>100 pt</td><td>✓ men 11 stik!</td></tr>
          <tr><td class="bid">4♣/4♦</td><td>4 × 20</td><td>80 pt</td><td>✗ delkontrakt</td></tr>
        </tbody>
      </table>

      <div class="rbox g">
        <strong>Nøglen til at forstå minor-ulempen:</strong> Klør og ruder giver kun 20 pt/stik mod majors' 30 pt/stik. Det betyder minor skal have 5 stik over 6 (= 11 totalt) for at nå 100 pt. Major behøver kun 4 stik over 6. Forskellen: 1 ekstra stik. Og 1 ekstra stik er i praksis meget svært at sikre.
      </div>

      <h2>Slemzonen — modstandernes stik</h2>
      <p>Logikken bag 33 HP til lilleslem er elegant:</p>

      <table class="tbl">
        <thead><tr><th>Jeres HP</th><th>Modstandernes HP</th><th>Modst. estimerede stik</th><th>I tager</th><th>Slem?</th></tr></thead>
        <tbody>
          <tr><td>33 HP</td><td>7 HP</td><td>≈ (7/40)×13 = 2,3 → 1–2 stik</td><td>11–12 stik</td><td>Mulig</td></tr>
          <tr><td>35 HP</td><td>5 HP</td><td>≈ 1,6 → 0–1 stik</td><td>12–13 stik</td><td>God</td></tr>
          <tr><td>37 HP</td><td>3 HP</td><td>≈ 1,0 → 0–1 stik</td><td>12–13 stik</td><td>Storeslem mulig</td></tr>
        </tbody>
      </table>

      <div class="rbox">
        <strong>Vigtig nuance:</strong> HP-beregning garanterer ikke slem. Et enkelt es hos modstanderne (4 HP) kan ødelægge det hele. Derfor: brug Blackwood (4NT) til at kontrollere om modstanderne har esser <em>uanset</em> det samlede HP-tal.
      </div>

      <h2>Fordelingens korrekturfaktorer</h2>
      <p>HP alene undervurderer hænder med god fordeling og overvurderer flade hænder:</p>

      <table class="tbl">
        <thead><tr><th>Fordeling</th><th>Justering af stikestimering</th><th>Begrundelse</th></tr></thead>
        <tbody>
          <tr><td>4-3-3-3 (maksimalt flad)</td><td>−1 stik</td><td>Ingen trumffordel, ingen kortkulørfordel</td></tr>
          <tr><td>4-4-3-2</td><td>±0</td><td>Neutral</td></tr>
          <tr><td>5-4-2-2</td><td>+0,5 stik</td><td>Lang kulør giver ét ekstra smallkortstik</td></tr>
          <tr><td>5-5-2-1</td><td>+1–2 stik</td><td>To lange kulører = mange ekstra stik</td></tr>
          <tr><td>Singleton med fit</td><td>+1–2 stik</td><td>Kan trumfe modstandernes udspil</td></tr>
          <tr><td>Void med fit</td><td>+2–3 stik</td><td>Kan trumfe to gange gratis</td></tr>
        </tbody>
      </table>

      <h2>Samlet resumé: De vigtige grænser og deres logik</h2>
      <table class="tbl">
        <thead><tr><th>Grænse</th><th>HP</th><th>Regnestykket</th></tr></thead>
        <tbody>
          <tr><td>Åbning</td><td>13</td><td>13 + makkeres gns. 10 = 23. Med 12 hos makker → 25 = parti mulig</td></tr>
          <tr><td>1NT åbning</td><td>15–17</td><td>Smal 3-HP zone → makker kan beregne parti-grænsen præcist</td></tr>
          <tr><td>2NT åbning</td><td>20–21</td><td>20+5 = 25 → parti. Makker behøver kun 4–5 HP</td></tr>
          <tr><td>Parti</td><td>25+</td><td>(25/40)×13 = 8,1 stik → ca. 9–10 med fordeling</td></tr>
          <tr><td>Lilleslem</td><td>33+</td><td>Modstanderne har 7 HP ≈ 0–1 stik</td></tr>
          <tr><td>Storeslem</td><td>37+</td><td>Modstanderne har 3 HP ≈ 0 stik</td></tr>
        </tbody>
      </table>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const myHP = ref(13);
const mkHP = ref(10);

const total = computed(() => myHP.value + mkHP.value);
const estStik = computed(() => ((total.value / 40) * 13).toFixed(1));

const zoneColor = computed(() => {
  const t = total.value;
  if (t >= 37) return '#c8a96e';
  if (t >= 33) return '#a8c89e';
  if (t >= 25) return '#7eb8a0';
  return '#8a8478';
});

const zoneName = computed(() => {
  const t = total.value;
  if (t >= 37) return 'Storeslem-zone';
  if (t >= 33) return 'Slem-zone';
  if (t >= 25) return 'Parti-zone';
  if (t >= 20) return 'Delkontrakt-zone';
  return 'For svagt';
});

const verdict = computed(() => {
  const t = total.value;
  const opp = 40 - t;
  if (t >= 37) return `Modstanderne har kun ${opp} HP ≈ 0 stik. Storeslem mulig — brug Blackwood til at kontrollere esser.`;
  if (t >= 33) return `Modstanderne har ${opp} HP ≈ 1–2 stik. Lilleslem sandsynligvis mulig. Brug Blackwood (4NT) til at sikre.`;
  if (t >= 28) return 'Sikkert parti. Overvej om fordeling giver mulighed for slem (med 33+ HP total).';
  if (t >= 25) return 'Parti mulig — søg 3NT, 4♥ eller 4♠. Husk: fordeling kan øge stikpotentialet med 1–2.';
  if (t >= 22) return 'Borderline parti. Inviter (2NT, 3♥/♠) og lad makker afgøre med sin styrke.';
  if (t >= 20) return 'Delkontrakt-zone. Spil sikkert på 1- eller 2-trinnet.';
  return 'Under 20 HP samlet — pas eller spil meget lavt.';
});
</script>
