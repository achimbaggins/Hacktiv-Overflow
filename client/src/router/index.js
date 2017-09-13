import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ThreadSummary from '@/components/ThreadSummary'
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
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: ThreadSummary
        },
        {
          path: ':slug',
          component: ThreadDetail,
          props: true
        }
      ]
    }
  ]
})
