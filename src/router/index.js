import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/travelQuery'
  },
  {
    path: '/travelQuery',
    component: Layout,
    children: [{
      path: '/',
      name: 'travelQuery',
      component: () => import('@/views/travelQuery/index'),
      meta: { title: 'travelQuery', icon: 'travelQuery' }
    }]
  },
  {
    path: '/trafficTravel',
    component: Layout,
    children: [{
      path: '/',
      name: 'trafficTravel',
      component: () => import('@/views/trafficTravel/index'),
      meta: { title: 'trafficTravel', icon: 'trafficTravel' }
    }]
  },
  {
    path: '/infoService',
    component: Layout,
    children: [{
      path: '/',
      name: 'infoService',
      component: () => import('@/views/infoService/index'),
      meta: { title: 'infoService', icon: 'infoService' }
    }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
