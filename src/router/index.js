import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import systemsRouter from '@/router/modules/systems'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/数据SHOW/index.vue'),
        name: 'show',
        meta: { title: '首页', icon: 'show', affix: true }
      }
    ]
  },
  {
    path: '/oder_input',
    component: Layout,
    redirect: '/oder_input',
    children: [
      {
        path: '',
        component: () => import('@/views/订单/订单录入/index.vue'),
        name: 'oder_input',
        meta: { title: '订单录入', icon: 'order_input', affix: true }
      }
    ]
  },
  {
    path: '/oder_manage',
    component: Layout,
    redirect: '/oder_manage',
    children: [
      {
        path: '',
        component: () => import('@/views/订单/订单管理/index.vue'),
        name: 'oder_manage',
        meta: { title: '订单管理', icon: 'oder_manage', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/school',
    component: Layout,
    redirect: '/school',
    children: [
      {
        path: 'school',
        component: () => import('@/views/学校推广/index.vue'),
        name: 'school',
        meta: { title: '学校推广', icon: 'school', affix: true }
      }
    ]
  },
  systemsRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
