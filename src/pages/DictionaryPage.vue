<template>
  <q-page padding>
    <div class="lhdr" data-bg="A–Z">
      <div class="lnum">Reference</div>
      <div class="ltitle">Bridgeordbog</div>
      <div class="lintro">Alle centrale bridge-termer præcist defineret. Søg i feltet nedenfor eller rul alfabetisk.</div>
    </div>
    <div class="dict-wrap">
      <q-input v-model="search" @update:model-value="filter()" outlined dense placeholder="Søg efter term…"
        clearable class="q-mb-lg">
        <template v-slot:prepend><q-icon name="search" /></template>
      </q-input>
      <template v-for="grp in filtered" :key="grp.letter">
        <div>
          <div class="dict-letter">{{ grp.letter }}</div>
          <div v-for="e in grp.entries" :key="e.term" class="dict-entry">
            <div class="dict-term" v-html="e.term + (e.cat ? '<span>' + e.cat + '</span>' : '')"></div>
            <div v-if="e.alt"
              v-html="'<span style=\'font-size:11px;color:grey;display:block;margin-bottom:5px\'>↔ ' + e.alt + '</span>'">
            </div>
            <div class="dict-def" v-html="cs(e.def)"></div>
            <div v-if="e.ex" class="dict-ex" v-html="'Eks.: ' + cs(e.ex)"></div>
          </div>
        </div>
      </template>
      <div v-if="filtered.length === 0" style="color:grey;padding:20px 0;font-size:14px">
        Ingen resultater.
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { dictionaryData, type DictGroup } from 'src/data/dictionary';
import { colorSuits } from 'src/data/colorSuits';

const cs = (s: string) => colorSuits(s);

const search = ref('');
const filtered = ref<DictGroup[]>(dictionaryData);

function filter() {
  const q = search.value.toLowerCase().trim();
  if (!q) {
    filtered.value = dictionaryData;
    return;
  }
  const result: DictGroup[] = [];
  for (const grp of dictionaryData) {
    const entries = grp.entries.filter(e =>
      e.term.toLowerCase().includes(q) ||
      (e.alt && e.alt.toLowerCase().includes(q)) ||
      e.def.toLowerCase().includes(q)
    );
    if (entries.length) result.push({ letter: grp.letter, entries });
  }
  filtered.value = result;
}
</script>
