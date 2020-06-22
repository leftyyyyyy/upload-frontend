import Vue from 'vue'
import Router from 'vue-router'
import Files from './components/Files.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'files',
      component: Files
    }
  ]
})