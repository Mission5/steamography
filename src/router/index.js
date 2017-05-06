import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import About from 'components/Page-About'
import Contact from 'components/Page-Contact'
import Main from 'components/Page-Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-98658016-1',
  router
})

export default router
