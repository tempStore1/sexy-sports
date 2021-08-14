import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/match',
        component: () => import('../views/Match.vue'),
      },
      {
        path: '/ranking',
        component: () => import('../views/Ranking.vue'),
      },
      {
        path: '/list',
        component: () => import('../views/List.vue'),
      },
      {
        path: '/user',
        component: () => import('../views/User.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
