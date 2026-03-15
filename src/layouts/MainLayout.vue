<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Install banner -->
    <q-banner v-if="pwa.installPrompt" class="bg-dark text-white" dense inline-actions>
      <template v-slot:avatar>
        <q-icon name="install_mobile" />
      </template>
      Installér som app
      <template v-slot:action>
        <q-btn flat label="Installér" color="primary" @click="pwa.installApp()" />
        <q-btn flat label="✕" @click="pwa.dismiss()" />
      </template>
    </q-banner>

    <!-- Mobile header -->
    <q-header class="lt-md" style="background:var(--surface);border-bottom:1px solid var(--border)">
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="grey-7" @click="drawerOpen = !drawerOpen" />
        <q-toolbar-title style="font-family:var(--serif);font-size:15px;font-weight:700;color:var(--accent);text-align:center">
          ♠♥ Bridge Lærebog
        </q-toolbar-title>
        <q-btn flat dense round :icon="theme.isDark ? 'light_mode' : 'dark_mode'" color="grey-7" @click="theme.toggle()" />
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer v-model="drawerOpen" :width="270" :breakpoint="768" bordered show-if-above
      :class="theme.isDark ? 'bg-dark' : 'bg-white'">
      <q-scroll-area class="fit" style="background:var(--surface)">
        <!-- Logo -->
        <div class="logo">
          <div class="logo-suits">
            <span class="s">♠</span><span class="r">♥</span><span class="r">♦</span><span class="s">♣</span>
          </div>
          <div class="logo-title">Bridge Lærebog</div>
          <div class="logo-sub">Skolebridge · Ny Nordisk</div>
        </div>

        <!-- Theme toggle -->
        <div style="padding:8px 12px">
          <q-btn flat dense no-caps class="full-width"
            :icon="theme.isDark ? 'light_mode' : 'dark_mode'"
            :label="theme.isDark ? 'Lyst tema' : 'Mørkt tema'"
            @click="theme.toggle()"
            style="font-family:var(--mono);font-size:11px;color:var(--text-dim)" />
        </div>

        <!-- Progress -->
        <div class="prog-wrap">
          <div class="prog-bar">
            <div class="prog-fill" :style="{ width: progress.prog + '%' }"></div>
          </div>
          <div class="prog-txt">
            {{ progress.done.length }} / {{ lessonsCount }} lektioner gennemført
          </div>
        </div>

        <!-- Reference nav -->
        <div class="nav-grp">
          <div class="nav-grp-title">Reference</div>
          <div class="nav-item" :class="{ active: $route.path === '/dict' }"
            @click="navigate('/dict')">
            <span class="nn">A–Z</span><span>Bridgeordbog</span>
          </div>
          <div class="nav-item" :class="{ active: $route.path === '/hp' }"
            @click="navigate('/hp')">
            <span class="nn">HP</span><span>Point &amp; zoner</span>
          </div>
        </div>

        <!-- Lesson groups -->
        <div v-for="group in lessonGroups" :key="group.title" class="nav-grp">
          <div class="nav-grp-title">{{ group.title }}</div>
          <div v-for="i in group.indices" :key="i" class="nav-item"
            :class="{ active: $route.path === '/lesson/' + i }"
            @click="navigateLesson(i)">
            <span class="nn">{{ group.symbol || String(i + 1).padStart(2, '0') }}</span>
            <span>{{ lessons[i].short }}</span>
            <span class="chk" v-if="progress.done.includes(i)">✓</span>
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <!-- Page -->
    <q-page-container>
      <router-view />
    </q-page-container>
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

const drawerOpen = ref(false);
const lessonsCount = lessons.length;

function navigate(path: string) {
  router.push(path);
  drawerOpen.value = false;
}

function navigateLesson(i: number) {
  progress.go(i);
  router.push('/lesson/' + i);
  drawerOpen.value = false;
}
</script>
