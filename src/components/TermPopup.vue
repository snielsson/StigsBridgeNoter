<template>
  <q-dialog v-model="show" position="bottom" seamless>
    <q-card style="max-width:500px;width:100%">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ entry?.term }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section v-if="entry?.cat" class="q-pt-none">
        <q-badge color="primary" :label="entry.cat" />
      </q-card-section>
      <q-card-section v-if="entry?.alt" class="q-pt-none text-caption text-grey">
        ↔ {{ entry.alt }}
      </q-card-section>
      <q-card-section v-if="entry" v-html="cs(entry.def)"></q-card-section>
      <q-card-section v-if="entry?.ex" class="q-pt-none text-caption text-italic" style="opacity:0.7">
        Eks.: {{ entry.ex }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { lookupTerm } from 'src/data/termLinker';
import { colorSuits } from 'src/data/colorSuits';
import type { DictEntry } from 'src/data/dictionary';

const cs = (s: string) => colorSuits(s);

const props = defineProps<{ term: string | null }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const show = ref(false);
const entry = ref<(DictEntry & { letter: string }) | null>(null);

watch(() => props.term, (val) => {
  if (val) {
    entry.value = lookupTerm(val) || null;
    show.value = !!entry.value;
  } else {
    show.value = false;
  }
});

watch(show, (val) => {
  if (!val) emit('close');
});
</script>
