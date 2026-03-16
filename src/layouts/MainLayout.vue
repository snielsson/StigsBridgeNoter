<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" class="lt-md" @click="drawerOpen = !drawerOpen" />
        <q-toolbar-title>Bridge Lærebog</q-toolbar-title>
        <q-btn flat round :icon="theme.isDark ? 'light_mode' : 'dark_mode'" @click="theme.toggle()" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above :width="280" bordered>
      <q-scroll-area class="fit">
        <div class="q-pa-md">
          <div class="text-caption text-grey">Fremgang</div>
          <q-linear-progress :value="progress.prog / 100" color="primary" class="q-mt-xs" />
          <div class="text-caption text-grey q-mt-xs">
            {{ progress.done.length }} / {{ lessonsCount }} lektioner
          </div>
        </div>

        <q-separator />

        <q-list>
          <q-expansion-item icon="menu_book" label="Reference" default-opened>
            <q-item clickable v-ripple :active="$route.path === '/dict'" active-class="text-primary"
              @click="navigate('/dict')">
              <q-item-section avatar><q-icon name="sort_by_alpha" /></q-item-section>
              <q-item-section>Bridgeordbog</q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="$route.path === '/hp'" active-class="text-primary"
              @click="navigate('/hp')">
              <q-item-section avatar><q-icon name="calculate" /></q-item-section>
              <q-item-section>Point &amp; zoner</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item v-for="group in lessonGroups" :key="group.title"
            :icon="groupIcon(group.title)" :label="group.title" default-opened>
            <q-item v-for="i in group.indices" :key="i" clickable v-ripple
              :active="$route.path === '/lesson/' + (i + 1)" active-class="text-primary"
              @click="navigateLesson(i)" :inset-level="0.3">
              <q-item-section avatar>
                <q-avatar size="24px" font-size="11px" color="grey-8" text-color="white">
                  {{ group.symbol || String(i + 1).padStart(2, '0') }}
                </q-avatar>
              </q-item-section>
              <q-item-section>{{ lessons[i].short }}</q-item-section>
              <q-item-section side v-if="progress.done.includes(i)">
                <q-icon name="check_circle" color="positive" size="xs" />
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-banner v-if="pwa.installPrompt" class="fixed-bottom bg-primary text-white" inline-actions>
      <template v-slot:avatar><q-icon name="install_mobile" /></template>
      Installér som app
      <template v-slot:action>
        <q-btn flat label="Installér" @click="pwa.installApp()" />
        <q-btn flat icon="close" @click="pwa.dismiss()" />
      </template>
    </q-banner>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from 'stores/theme';
import { useProgressStore } from 'stores/progress';
import { usePwaStore } from 'stores/pwa';
import { lessons } from 'src/data/lessons';
import { lessonGroups } from 'src/data/lessonGroups';

const router = useRouter();
const theme = useThemeStore();
const progress = useProgressStore();
const pwa = usePwaStore();

const drawerOpen = ref(true);
const lessonsCount = lessons.length;

function navigate(path: string) {
  router.push(path);
}

function navigateLesson(i: number) {
  progress.go(i);
  router.push('/lesson/' + (i + 1));
}

function groupIcon(title: string): string {
  const icons: Record<string, string> = {
    'Spilforståelse': 'school',
    'Åbninger': 'play_arrow',
    'Konventioner': 'handshake',
    'Spilføring & Forsvar': 'shield',
    'Systemer': 'settings',
  };
  return icons[title] || 'folder';
}
</script>
