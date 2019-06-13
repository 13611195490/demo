import 'babel-polyfill'
// import Vue from 'vue'
// import common from './modules/common'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import life from './modules/project/life'
import project from './modules/project/project'
import plan from './modules/plan/plan'
import monthRep from './modules/report/month'
import analysisRep from './modules/analysis/analysisRep'
import xnyRep from './modules/report/xny'
import permission from './modules/permission'
import assess from './modules/assess/assess'
import getters from './getters'
import planSite from './modules/analysis/plansite'
import planRoute from './modules/analysis/planroute'
import label from './modules/maintenance/label'
import entry from './modules/maintenance/entry'
// import run from './modules/monitor/run'
// Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // common,
    app,
    permission,
    label,
    entry,
    user,
    life,
    project,
    plan,
    monthRep,
    analysisRep,
    xnyRep,
    assess,
    planSite,
    planRoute
  },
  getters
})
window.store = store
export default store
