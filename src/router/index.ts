import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/lesson/0' },
      { path: 'lesson/:id', component: () => import('pages/LessonPage.vue') },
      { path: 'dict', component: () => import('pages/DictionaryPage.vue') },
      { path: 'hp', component: () => import('pages/HpCalculatorPage.vue') },
    ],
  },
];

export default function () {
  const createHistory = typeof window === 'undefined' ? createMemoryHistory : createWebHashHistory;

  return createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
}
