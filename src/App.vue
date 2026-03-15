<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from 'stores/theme';
import { useProgressStore } from 'stores/progress';
import { usePwaStore } from 'stores/pwa';

const theme = useThemeStore();
const progress = useProgressStore();
const pwa = usePwaStore();

onMounted(() => {
  theme.init();
  progress.init();
  pwa.init();
});
</script>
