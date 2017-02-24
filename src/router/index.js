import Vue from 'vue'
import Router from 'vue-router'
import About from 'components/Page-About'
import Contact from 'components/Page-Contact'
import Main from 'components/Page-Main'

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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
