import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import codename from '@/views/codeName'
import project from '@/views/project'
import think from '@/views/think'
import music from '@/views/music'
import about from '@/views/about'
import service from '@/views/service'
import guestbook from '@/views/guestbook'
import taobao from '@/views/taobao'
import aliyun from '@/views/aliyun'
import errend from '@/views/errend'
import app from '@/views/app'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/codename',
      name: 'codename',
      component: codename
    }, {
      path: '/project',
      name: 'project',
      component: project
    }, {
      path: '/think',
      name: 'think',
      component: think
    }, {
      path: '/music',
      name: 'music',
      component: music
    }, {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/service',
      name: 'service',
      component: service
    }, {
      path: '/guestbook',
      name: 'guestbook',
      component: guestbook
    }, {
      path: '/taobao',
      name: 'taobao',
      component: taobao
    }, {
      path: '/aliyun',
      name: 'aliyun',
      component: aliyun
    }, {
      path: '/errend',
      name: 'errend',
      component: errend
    }, {
      path: '/app',
      name: 'app',
      component: app
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
})
