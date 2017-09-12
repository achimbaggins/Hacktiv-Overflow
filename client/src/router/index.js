import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Threadslist from '@/components/Threadslist'
import ThreadDetail from '@/components/ThreadDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/threads',
      component: Home,
      children: [
        {
          path: 'threads/:slug',
          component: ThreadDetail,
          props: true
        }
      ]
    }
  ]
})
