// import { $getList, $getDetail, $deleteData } from '@/api/project'

const life = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: {}
  },
  mutations: {
    GET_LIST: (state, res) => {
      state.list = [{
        data1: 111,
        data2: 222,
        data3: 333,
        data4: 444,
        data5: 555,
        data6: 666
      }, {
        data1: 111,
        data2: 222,
        data3: 333,
        data4: 444,
        data5: 555,
        data6: 666
      }, {
        data1: 111,
        data2: 222,
        data3: 333,
        data4: 444,
        data5: 555,
        data6: 666
      }]
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    },

    GET_DETAIL(state, detail) {
      state.detail = detail
    },

    DELETE_REPORT(state, deleteId) {
      state.list = state.list.filter((item) => { return item.id !== deleteId })
    }
  },
  actions: {
    async GetList_plife({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_LIST', result)
      params.cb()
    },

    async GetDetail_plife({ commit, state }, params) {
      // let result = null
      // result = await $getDetail(params)
      // result && commit('GET_DETAIL', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_DETAIL', result)
      params.cb()
    },

    async DeleteData_plife({ commit, state }, params) {
      // let result = null
      // result = await $deleteData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('DELETE_REPORT', result)
      params.cb()
    }
  }
}

export default life
