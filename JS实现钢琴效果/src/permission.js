import router from './router'
// import store from './store'
import NProgress from 'nprogress' // 路由进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from '@/utils/auth' // 校验权限
import { Message } from 'element-ui'
// import { mapServerAddress } from './../config/globalvar'
// const loadjs = require('loadjs')
const whiteList = ['/login'] // 白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
  // if (getJSESSIONID()) {
    if (to.path === '/login' || to.path === '' || to.path === '/' ) { 
      next()
      NProgress.done()
    } else {
      // next()
      if (store.getters.addRouters.length === 0) {
        // doSomethings...
        // 动态添加可访问路由表router.addRoutes(store.getters.addRouters)
        store.dispatch('SetToken').then(() => {
          store.dispatch('GenerateRoutes').then(() => {
            if (store.getters.addRouters.length === 0) {
              Message.error('没有权限')
              next(false)
              NProgress.done()
            } else {
              router.addRoutes(store.getters.addRouters)
              next(to.path) // hack
            }
          })
        }).catch((err) => {
          console.log('err：', err)
          next({ path: '/' })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1 || to.path === '/model/operation') {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
