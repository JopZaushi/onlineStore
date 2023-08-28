import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/authentication',
    name: 'authenticationUser',
    component: () => import('../views/AuthenticationUser.vue'),
  },
  {
    path: '/registration',
    name: 'registrationUser',
    component: () => import('../views/RegistrationUser.vue'),
  },
  {
    path: '/listing',
    name: 'productListing',
    component: () => import('../views/ProductListing.vue'),
  },
  {
    path: '/bin',
    name: 'shopBin',
    component: () => import('../views/ShoppingCart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
