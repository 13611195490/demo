// import { $getList } from '@/api/analysis'

const planRoute = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: []
  },
  mutations: {
    GET_LIST_plan_route: (state, res) => {
      state.list = [
        { name: '张掖', name2: '庆阳', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[105.730846, 34.600993], [106.742697, 35.335517], [107.662562, 35.719036]] },
        { name: '酒泉', name2: '玉门', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[103.835924, 36.055896], [105.749243, 34.593386]] },
        { name: '庆阳', name2: '兰州', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[100.460021, 38.935723], [102.630902, 37.988247], [103.826726, 36.070834]] },
        { name: '兰州', name2: '白银', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[98.496109, 39.75], [97.038123, 40.329782]] },
        { name: '平凉', name2: '张掖', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[105.728546, 34.600993], [104.932863, 33.401994], [103.451881, 34.600993]] }
      ]
      state.list = [
        { name: '酒泉', name2: '张掖', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[98.495075, 39.747156], [100.511879, 38.925661]] },
        { name: '兰州', name2: '武威', suggest: '联络线路重过载：建议增加联络或改善已有线路', line: [[103.830291, 36.093979], [102.627568, 37.959844]] }
      ]
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    }
  },
  actions: {
    async GetList_plan_route({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_LIST_plan_route', result)
      params.cb()
    }
  }
}

export default planRoute
