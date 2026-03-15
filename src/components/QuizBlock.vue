<template>
  <div class="quiz">
    <div class="quiz-ttl">✦ Øvelsesopgave</div>
    <div class="quiz-q" v-html="quiz.question"></div>
    <div v-if="quiz.hand" v-html="quiz.hand" style="margin-bottom:14px"></div>
    <div class="quiz-opts">
      <button v-for="(o, i) in quiz.options" :key="i" class="qbtn" :disabled="answered"
        :class="answered ? (i === quiz.correct ? 'correct' : (pick === i ? 'wrong' : '')) : ''"
        @click="pick = i; answered = true">
        {{ o }}
      </button>
    </div>
    <div v-if="answered" class="qres" :class="pick === quiz.correct ? 'c' : 'w'"
      v-html="(pick === quiz.correct ? '✓ Rigtigt! ' : '✗ Forkert. ') + quiz.explain">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Quiz } from 'src/data/lessons';

defineProps<{ quiz: Quiz }>();

const answered = ref(false);
const pick = ref<number | null>(null);
</script>
