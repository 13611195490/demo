// import { $getList, $getDetail, $deleteData } from '@/api/plan'

const plan = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: []
  },
  mutations: {
    GET_LIST_pplan: (state, res) => {
      state.list = [{
        data1: '2019年普通规划',
        data2: '2019',
        data3: '现状'
      }, {
        data1: '2020年普通规划',
        data2: '2020',
        data3: '过渡'
      }, {
        data1: '2025年普通规划',
        data2: '2025',
        data3: '远景'
      }]
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    },

    GET_DETAIL_pplan(state, detail) {
      const a = [{
        data1: '111',
        data2: '222',
        data3: '333'
      }, {
        data1: '111',
        data2: '222',
        data3: '333'
      }]
      const b = [{
        data1: '1111',
        data2: '2222',
        data3: '3333'
      }, {
        data1: '1111',
        data2: '2222',
        data3: '3333'
      }]
      const c = [{
        data1: '11111',
        data2: '22222',
        data3: '33333'
      }, {
        data1: '11111',
        data2: '22222',
        data3: '33333'
      }]
      switch (detail) {
        case 'hd': state.detail = a; break
        case 'sd': state.detail = b; break
        case 'cn': state.detail = c; break
        default: state.detail = c
      }
    },

    DELETE_REPORT_pplan(state, deleteId) {
			state.list.splice(deleteId.id,1)
      // state.list = state.list.filter((item) => { return item.id !== deleteId })
    }
  },
  actions: {
    async GetList_pplan({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_LIST_pplan', result)
      params.cb()
    },

    async GetDetail_pplan({ commit, state }, params) {
      // let result = null
      // await $getDetail(params)
      // result && commit('GET_DETAIL', result.data)
      // params.cb && params.cb()
      // commit('GET_DETAIL', result)
      commit('GET_DETAIL_pplan', params.id)
      params.cb()
    },

    async DeleteData_pplan({ commit, state }, params) {
      // let result = null
      // result = await $deleteData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('DELETE_REPORT_pplan', params)
      params.cb()
    }
  }
}

export default plan
