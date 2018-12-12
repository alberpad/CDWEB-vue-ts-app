import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todos',
      component: () => import(/* webpackChunkName: "todos" */ './views/TodoApp/component')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import(/* webpackChunkName: "todos" */ './views/TodoApp/component')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login/component')
    },
    {
      path: '/secret',
      name: 'secret',
      component: () => import(/* webpackChunkName: "secret" */ './views/Secret/component')
    }
  ]
});
