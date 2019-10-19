import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Login from '~/pages/login'
import Secret from '~/pages/secret'
import Articles from '~/pages/articles'
import { scrollBehavior } from '~/utils/scroll'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/login', name: 'About', component: Login },
  { path: '/secret', name: 'Secret', component: Secret },
  { path: '/articles', name: 'Articles', component: Articles },
  {
    path: '/articles/:id',
    name: 'Articles-id',
    component: Articles
  }
]

export function createRouter() {
  return new Router({
    mode: 'history',
    routes,
    scrollBehavior
  })
}
