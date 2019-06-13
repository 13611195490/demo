import { constantRouterMap } from '@/router/index'
import { getToken } from '@/utils/auth'
import { $getMenuList } from '@/api/login'
import Layout from '@/views/layout/Layout'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    token: '',
    sessionId: ''
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      // state.addRouters = asyncRouterMap
      // state.routers = constantRouterMap.concat(asyncRouterMap)
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_SESSIONID: (state, sessionId) => {
      state.sessionId = sessionId
    }
  },
  actions: {
		async SetRoute({ commit, state }, params) {
				console.log(params)
   
      commit('SET_ROUTERS', params.r)
      params.cb()
    },
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        var token = getToken()
        $getMenuList(token).then(res => {
          let first = true
          const firstMenu = {}
          const asyncRouters = res.menuList.map(menu => {
            const menuObj = {}
            menuObj.path = `/${menu.path}`
            menuObj.component = Layout
            menuObj.meta = {
              title: menu.meta.title,
              icon: menu.meta.icon,
            }
            menuObj.children = []
            if (menu.children.length > 0) {
              menu.children.map(child => {
                if (child.children && child.children.length > 0) {
                  child.children.map(childs => {
                    if (first) {
                      firstMenu.path = ''
                      firstMenu.redirect = `${menu.path}/${child.path}/${childs.path}`
                      first = false
                    }
                    const childObj = {}
                    childObj.path = childs.path
                    childObj.component = resolve => require([`@/views/${menu.path}/${child.path}/${childs.path}`], resolve)
                    childObj.meta = {
                      title: childs.meta.title,
                      icon: childs.meta.icon,
                    }
                    menuObj.children.push(childObj)
                  })
                } else {
                  if (first) {
                    firstMenu.path = ''
                    firstMenu.redirect = `${menu.path}/${child.path}`
                    first = false
                  }
                  const childObj = {}
                  childObj.path = child.path
                  childObj.component = resolve => require([`@/views/${menu.path}/${child.path}`], resolve)
                  childObj.meta = {
                    title: child.meta.title,
                    icon: child.meta.icon,
                  }
                  menuObj.children.push(childObj)
                }


                // if (first) {
                //   firstMenu.path = ''
                //   firstMenu.redirect = `${menu.path}/${child.path}`
                //   first = false
                // }
                // const childObj = {}
                // childObj.path = child.path
                // childObj.component = resolve => require([`@/views/${menu.path}/${child.path}`], resolve)
                // childObj.meta = {
                //   title: child.meta.title,
                //   icon: child.meta.icon,
                // }
                // menuObj.children.push(childObj)
              })
            } else {
              if (first) {
                firstMenu.path = ''
                firstMenu.redirect = `${menu.path}/index`
                first = false
              }
              const childObj = {}
              childObj.path = 'index'
              childObj.component = resolve => require([`@/views/${menu.path}/index`], resolve)
              childObj.meta = {
                title: menu.meta.title,
                icon: menu.meta.icon,
              }
              menuObj.children.push(childObj)
            }
            return menuObj
          })
          if (Object.keys(firstMenu).length !== 0) {
            asyncRouters.push(firstMenu)
          } else {
            // 没有权限
            removeToken()
          }
          console.log("asyncRouters",asyncRouters)
          commit('SET_ROUTERS', asyncRouters)
          resolve()
        })
      })
    },
    SetToken({ commit }) {
      return new Promise((resolve, reject) => {
        const token = getToken()
        if (token) {
          // 获取用户菜单时使用， 确保是登录过的
					commit('SET_TOKEN', token)
          resolve()
        } else {
          reject()
        }
      })
    },
    SetSessionId({ commit }) {
      return new Promise((resolve, reject) => {
        const sessionId = getToken()
        if (sessionId) {
          // 获取用户菜单时使用， 确保是登录过的
          commit('SET_SESSIONID', sessionId)
          resolve()
        } else {
          reject()
        }
      })
    }
  }
}

export default permission
