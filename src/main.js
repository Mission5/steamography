// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Accordion from './components/Accordion.vue'
import Animation from './components/Animation.vue'
import Modal from './components/Modal.vue'
import Experiments from './components/Experiments.vue'
import Timeline from './components/Timeline.vue'
import Story from './components/Story.vue'
import Videos from './components/Videos.vue'
import App from './App'

Vue.component('accordion', Accordion)
Vue.component('animation', Animation)
Vue.component('modal', Modal)
Vue.component('experiments', Experiments)
Vue.component('story', Story)
Vue.component('timeline', Timeline)
Vue.component('videos', Videos)

import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

