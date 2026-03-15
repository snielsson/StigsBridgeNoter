import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { lessons } from 'src/data/lessons';

export const useProgressStore = defineStore('progress', () => {
  const cur = ref(0);
  const done = ref<number[]>([]);
  const view = ref<'lesson' | 'dict' | 'hp'>('lesson');

  const prog = computed(() => Math.round(done.value.length / lessons.length * 100));

  function init() {
    try {
      const d = localStorage.getItem('brdone');
      if (d) done.value = JSON.parse(d);
      const c = localStorage.getItem('brcur');
      if (c) cur.value = parseInt(c);
    } catch { /* ignore */ }
  }

  function go(i: number) {
    if (i < 0 || i >= lessons.length) return;
    cur.value = i;
    view.value = 'lesson';
    try { localStorage.setItem('brcur', String(i)); } catch { /* ignore */ }
  }

  function markDone() {
    if (!done.value.includes(cur.value)) {
      done.value.push(cur.value);
    }
    try { localStorage.setItem('brdone', JSON.stringify(done.value)); } catch { /* ignore */ }
    if (cur.value < lessons.length - 1) {
      go(cur.value + 1);
    }
  }

  return { cur, done, view, prog, init, go, markDone };
});
