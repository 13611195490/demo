// import { $getList } from '@/api/analysis'

const planSite = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: []
  },
  mutations: {
    GET_LIST_plan_site: (state, res) => {
      state.list = [
        { name: '酒泉', didian: '丰源', year: '2020', type: '光伏', zjrl: 150, location: [98.87895202636615, 40.5623774656097] },
        { name: '嘉峪关', didian: '安地', year: '2022', type: '风电', zjrl: 250, location: [95.9785614013669, 40.009257610157796] }
      ]
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    }
  },
  actions: {
    async GetList_plan_site({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_LIST_plan_site', result)
      params.cb()
    }
  }
}

export default planSite
