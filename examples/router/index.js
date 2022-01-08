import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../scene/Home'
import Demo from '../scene/Demo'
import Document from '../scene/Document'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'FunPlus - A Vue2.x UI Component Library.'
    },
    component: Home
  },
  {
    path: '/play',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于 - FunPlus - A Vue2.x UI Component Library.'
    },
    component: () => import('../scene/About')
  },
  {
    path: '/design/:routeId',
    name: 'Design',
    meta: {
      title: '设计 - FunPlus - A Vue2.x UI Component Library.'
    },
    component: Document
  },
  {
    path: '/document/:routeId',
    name: 'Document',
    meta: {
      title: '文档 - FunPlus - A Vue2.x UI Component Library.'
    },
    component: Document
  },
  {
    path: '/components/:routeId',
    name: 'Components',
    meta: {
      title: '组件 - FunPlus - A Vue2.x UI Component Library.'
    },
    component: Document
  },
  {
    path: '/sources',
    name: 'Developer',
    meta: {
      title: '资源 - FunPlus - A Vue2.x UI Component Library.'
    },
    component: () => import('../scene/Developer')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {})

export default router
