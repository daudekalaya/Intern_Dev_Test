import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';
import AboutUs from '../src/components/AboutUs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
