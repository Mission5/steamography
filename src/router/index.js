import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import About from 'components/Page-About'
import Contact from 'components/Page-Contact'
import Main from 'components/Page-Main'
import config from 'config.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/section/:section(\\d+)',
      component: Main
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
  // ,scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  next()
})

Vue.use(VueAnalytics, {
  id: config.gaToken,
  router
})

export default router
