import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Page-Main'
import About from 'components/Page-About'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
