<template>
  <q-page>
    <template v-if="lesson">
      <!-- Header -->
      <div class="lhdr" :data-bg="lesson.bg">
        <div class="lnum">Lektion {{ id + 1 }} · {{ lesson.cat }}</div>
        <div class="ltitle" v-html="lesson.title"></div>
        <div class="lintro" v-html="lesson.intro"></div>
      </div>

      <!-- Content -->
      <div class="lbody" v-html="lesson.content"></div>

      <!-- Quiz -->
      <div v-if="lesson.quiz" class="lbody" style="padding-top:0">
        <QuizBlock :quiz="lesson.quiz" :key="id" />
      </div>

      <!-- Navigation -->
      <div class="lbody" style="padding-top:0">
        <div class="nav-btns">
          <button v-if="id > 0" class="btn btn-s" @click="goTo(id - 1)">← Forrige</button>
          <button v-if="!progress.done.includes(id)" class="btn btn-p" @click="progress.markDone(); goTo(id + 1)">
            Markér læst ✓
          </button>
          <button v-if="id < lessonsCount - 1 && progress.done.includes(id)" class="btn btn-p"
            @click="goTo(id + 1)">
            Næste lektion →
          </button>
          <span v-if="id === lessonsCount - 1 && progress.done.includes(id)"
            style="color:var(--accent2);font-size:14px;padding:11px 0">
            🎉 Alle lektioner gennemført!
          </span>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProgressStore } from 'stores/progress';
import { lessons } from 'src/data/lessons';
import QuizBlock from 'components/QuizBlock.vue';

const route = useRoute();
const router = useRouter();
const progress = useProgressStore();
const lessonsCount = lessons.length;

const id = computed(() => parseInt(route.params.id as string) || 0);
const lesson = computed(() => lessons[id.value]);

function goTo(i: number) {
  if (i >= 0 && i < lessonsCount) {
    progress.go(i);
    router.push('/lesson/' + i);
  }
}
</script>
