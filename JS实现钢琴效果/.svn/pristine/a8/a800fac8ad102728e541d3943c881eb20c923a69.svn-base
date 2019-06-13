// import { $getList, $getChart, $getDetail, $addData, $deleteData } from '@/api/assess'

const assess = {
  state: {
    list: [],
    chart: {},
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: {
      data1: '111',
      data2: '222',
      data3: '333'
    }
  },
  mutations: {
    GET_LIST_assess: (state, res) => {
      state.list = [{
        data1: '2019年',
        data2: '2019指数平滑',
        data3: '2019指数平滑',
        data4: '影响因素参数保存'
      }, {
        data1: '2018年',
        data2: '2018指数平滑',
        data3: '2018指数平滑',
        data4: '影响因素参数保存'
      }]
      if (res.type === '') {
        state.list = []
      }
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    },

    GET_CHART_assess(state, detail) {
      state.chart = {
        xAxisdata: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        legenddata: ['2019年预测功率值', '2018年功率值', '2017年功率值'],
        seriesdata: {
          '2019年预测功率值': [154.61, 141.13, 111.73, 84.07, 72.91, 59.31, 41.2, 29.65, 24.98, 15.06, 6.84, 2.63],
          '2018年功率值': [134.61, 121.13, 91.73, 64.07, 62.91, 49.31, 31.2, 19.65, 14.98, 5.06, 0.84, 2.63],
          '2017年功率值': [114.61, 101.13, 71.73, 44.07, 42.91, 39.31, 21.2, 9.65, 2.98, 0.06, 6.84, 2.63]
        }
      }
    },

    GET_DETAIL_assess(state, detail) {
      state.detail = {
        data1: '11111',
        data2: '22222',
        data3: '33333'
      }
    },

    DELETE_REPORT_assess(state, deleteId) {
			state.list.splice(deleteId.id,1)
      // state.list = state.list.filter((item) => { return item.id !== deleteId })
    },

    ADD_DATA_assess(state, detail) {
      const addData = {
        data1: '2017年',
        data2: '2017指数平滑',
        data3: '2017指数平滑',
        data4: '影响因素参数保存'
      }
      state.list.push(addData)
    }
  },
  actions: {
    async GetList_assess({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      // const result = null
      commit('GET_LIST_assess', params)
      params.cb()
    },

    async GetChart_assess({ commit, state }, params) {
      // let result = null
      // result = await $getChart({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_CHART_assess', result)
      params.cb()
    },

    async GetDetail_assess({ commit, state }, params) {
      // let result = null
      // await $getDetail(params)
      // result && commit('GET_DETAIL', result.data)
      // params.cb && params.cb()
      // commit('GET_DETAIL', result)
      commit('GET_DETAIL_assess', params.id)
      params.cb()
    },

    async DeleteData_assess({ commit, state }, params) {
      // let result = null
      // result = await $deleteData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('DELETE_REPORT_assess', params)
      params.cb()
    },

    async Add_assess({ commit, state }, params) {
      // let result = null
      // result = await $addData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('ADD_DATA_assess', result)
      params.cb()
    }
  }
}

export default assess
