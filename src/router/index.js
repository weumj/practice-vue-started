import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/heroes',
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '@/views/heroes'),
  },
  {
    path: '/heroes/:id',
    name: 'hero-detail',
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '@/views/HeroDetail'),
    props: r => ({ id: parseInt(r.params.id, 10), derivedHero: r.params.hero }),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bundle.about" */ '@/views/about'),
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
