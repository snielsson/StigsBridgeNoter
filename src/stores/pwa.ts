import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePwaStore = defineStore('pwa', () => {
  const installPrompt = ref<Event | null>(null);

  function init() {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      installPrompt.value = e;
    });
  }

  async function installApp() {
    if (!installPrompt.value) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (installPrompt.value as any).prompt();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (installPrompt.value as any).userChoice;
    installPrompt.value = null;
  }

  function dismiss() {
    installPrompt.value = null;
  }

  return { installPrompt, init, installApp, dismiss };
});
