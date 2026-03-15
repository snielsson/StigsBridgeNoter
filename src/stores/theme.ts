import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Dark } from 'quasar';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true);

  function init() {
    try {
      const t = localStorage.getItem('brtheme');
      if (t === 'light') isDark.value = false;
    } catch { /* ignore */ }
    Dark.set(isDark.value);
  }

  function toggle() {
    isDark.value = !isDark.value;
    Dark.set(isDark.value);
    try {
      localStorage.setItem('brtheme', isDark.value ? 'dark' : 'light');
    } catch { /* ignore */ }
  }

  return { isDark, init, toggle };
});
