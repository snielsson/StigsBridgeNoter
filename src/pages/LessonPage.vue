<template>
  <q-page padding>
    <template v-if="lesson">
      <div class="lhdr" :data-bg="lesson.bg">
        <div class="lnum">Lektion {{ lessonNum }} · {{ lesson.cat }}</div>
        <div class="ltitle" v-html="lesson.title"></div>
        <div class="lintro" v-html="lesson.intro"></div>
      </div>

      <div class="lbody" v-html="lesson.content"></div>

      <div v-if="lesson.quiz" class="lbody" style="padding-top:0">
        <QuizBlock :quiz="lesson.quiz" :key="lessonNum" />
      </div>

      <div class="lbody" style="padding-top:0">
        <div class="nav-btns">
          <q-btn v-if="lessonNum > 1" flat no-caps icon="arrow_back" label="Forrige" @click="goTo(lessonNum - 1)" />
          <q-btn v-if="!progress.done.includes(idx)" color="primary" no-caps icon="check"
            label="Markér læst" @click="markAndNext()" />
          <q-btn v-if="lessonNum < lessonsCount && progress.done.includes(idx)" color="primary" no-caps
            icon-right="arrow_forward" label="Næste lektion" @click="goTo(lessonNum + 1)" />
          <span v-if="lessonNum === lessonsCount && progress.done.includes(idx)"
            class="text-positive text-body2 q-pa-sm">
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

// URL is 1-based, array is 0-based
const lessonNum = computed(() => parseInt(route.params.id as string) || 1);
const idx = computed(() => lessonNum.value - 1);
const lesson = computed(() => lessons[idx.value]);

function goTo(num: number) {
  if (num >= 1 && num <= lessonsCount) {
    progress.go(num - 1);
    router.push('/lesson/' + num);
  }
}

function markAndNext() {
  progress.markDone();
  if (lessonNum.value < lessonsCount) {
    goTo(lessonNum.value + 1);
  }
}
</script>
