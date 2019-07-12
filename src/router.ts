import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'; // 막대 그래프

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/path-practice',
      name: 'path-practice',
      component: () => import('./views/path'),
    },
    {
      path: '/summarnote-bargraph',
      name: 'summarnote-bargraph',
      component: () => import('./views/SummarNoteBarGraph'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
