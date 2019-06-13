 import { $getList, $getDetail, $addData, $deleteData } from '@/api/report'

const analysisRep = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: {}
  },
  mutations: {
    GET_LIST_arep: (state, res) => {
      state.list = [{
        data1: '2020年新能源消纳分析结果',
        data2: '2020',
        data3: '2019-3-2',
        data4: '管理员'
      }, {
        data1: '2019年新能源消纳分析结果',
        data2: '2019',
        data3: '2019-3-5 ',
        data4: '管理员'
      }]
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    },

    GET_DETAIL_arep(state, detail) {
      state.detail = detail
    },

    ADD_DATA_arep(state, detail) {
      const addData = {
        data1: '2018年新能源消纳分析结果',
        data2: '2018',
        data3: '2019-3-2',
        data4: '管理员'
      }
      state.list.push(addData)
    },

    DELETE_REPORT_arep(state, deleteId) {
      // state.list = state.list.filter((item) => { return item.id !== deleteId })
				state.list.splice(deleteId.id,1)
		}
  },
  actions: {
    async GetList_arep({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_LIST_arep', result)
      params.cb()
    },

    async GetDetail_arep({ commit, state }, params) {
      // let result = null
      // result = await $getDetail(params)
      // result && commit('GET_DETAIL', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_DETAIL_arep', result)
      params.cb()
    },

    async Add_arep({ commit, state }, params) {
      // let result = null
      // result = await $addData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('ADD_DATA_arep', result)
      params.cb()
    },

    async DeleteData_arep({ commit, state }, params) {
      // let result = null
      // result = await $deleteData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('DELETE_REPORT_arep', params)
      params.cb()
    }
  }
}

export default analysisRep
