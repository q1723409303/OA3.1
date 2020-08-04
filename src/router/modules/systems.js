/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const systemsRouter = {
    path: '/systems',
    component: Layout,
    redirect: 'noRedirect',
    name: 'systems',
    meta: {title: '系统管理', icon: 'systems'},
    children: [
      {
        path: 'account', name: 'account',
        component: () => import('@/views/系统管理/账号管理/index.vue'),
        meta: {title: '账号管理', icon: 'account'}
      },
      {
        path: 'region', name: 'region',
        component: () => import('@/views/系统管理/快递管理/index.vue'),
        meta: {title: '区域管理', icon: 'region'}
      },
      {
        path: 'product', name: 'product',
        component: () => import('@/views/系统管理/产品管理/index.vue'),
        meta: {title: '产品管理', icon: 'product'}
      },
      {
        path: 'express', name: 'express',
        component: () => import('@/views/系统管理/快递管理/index.vue'),
        meta: {title: '快递管理', icon: 'express'}
      },
      {
        path: 'password', name: 'password',
        component: () => import('@/views/系统管理/修改密码/index.vue'),
        meta: {title: '修改密码', icon: 'edition'}
      }
    ]
  }

export default systemsRouter
