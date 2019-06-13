import 'babel-polyfill'
import Vue from 'vue'
// import 'babel-plugin-component'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import locale from 'element-ui/lib/locale/lang/zh-CN'
import echart from 'echarts'
// import '@/styles/index.less' // global css
import '@/assets/icons/iconfont.css'
import '@/assets/fontNsd/iconfont.css'
import '@/permission'
import App from './App'
import router from './router'
import store from './store'
import globalVar from './../config/globalvar'
import '@/components/globalComponent'
import '@/directive/globalDirective'
import VueCookie from 'vue-cookie' // api: https://github.com/alfhen/vue-cookie
import ElDict from './components/el-dict'
import { post, get } from './utils/request'
import { treeDataTranslate, transOrg, transUser, transDict } from './utils/dataCommon'
// import '@/icons/index'

Vue.use(ElementUI, { locale }, echart)
Vue.use(ElDict)
Vue.use(VueCookie)

Vue.component('el-dict', ElDict)

Vue.config.productionTip = false
Vue.prototype.$globalVar = globalVar
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.treeDataTranslate = treeDataTranslate // 树形数据转换
Vue.prototype.transOrg = transOrg // 机构翻译
Vue.prototype.transUser = transUser // 用户翻译
Vue.prototype.transDict = transDict // 数据字典翻译

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
