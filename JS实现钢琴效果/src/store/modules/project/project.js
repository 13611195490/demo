// import { $getList, $getDetail, $deleteData } from '@/api/project'

const project = {
  state: {
    list: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 20,
    totalPage: 2,
    detail: {}
  },
  mutations: {
    GET_LIST_pproject: (state, res) => {
      state.list = [{
        data1: 11166666666,
        data2: 222,
        data3: 333,
        data4: 444,
        data5: 555,
        data6: 666,
        data7: 777,
        data8: 888,
        data9: 999
      }, {
        data1: 111,
        data2: 222,
        data3: 333,
        data4: 444,
        data5: 555,
        data6: 666,
        data7: 777,
        data8: 888,
        data9: 999
      }]
      if (res.type === 'gffp') {
        state.list = [{
          data1: '八领村村级电站',
          data2: '常规村级',
          data3: '国家',
          data4: '国能发新能',
          data5: '102',
          data6: '永登县',
          data7: '国定贫困县',
          data8: '八领村',
          data9: '是',
          data10: '2018-03-20',
          data11: '是',
          data12: '是',
          data13: '否',
          data14: '公司',
          data15: '是',
          data16: '2018-09-11',
          data17: '102',
          data18: '220/380V',
          data19: '1.72',
          data20: '200',
          data21: '27.12',
          data22: '0.402',
          data23: '0.000',
          data24: '2.228',
          data25: '0.000',
          data26: '否',
          data27: ''
        }, {
          data1: '柏杨村村级电站',
          data2: '常规村级',
          data3: '国家',
          data4: '国能发新能',
          data5: '105',
          data6: '永登县',
          data7: '国定贫困县',
          data8: '柏杨村',
          data9: '是',
          data10: '2018-03-20',
          data11: '是',
          data12: '是',
          data13: '否',
          data14: '公司',
          data15: '是',
          data16: '2018-08-16',
          data17: '105',
          data18: '220/380V',
          data19: '3.42',
          data20: '200',
          data21: '49.82',
          data22: '0.402',
          data23: '0.000',
          data24: '2.528',
          data25: '0.000',
          data26: '否',
          data27: ''
        }]
      }
      state.currentPage = 1
      state.totalCount = 20
      state.pageSize = 10
    },

    GET_DETAIL_pproject(state, detail) {
      state.detail = detail
    },

    DELETE_REPORT_pproject(state, deleteId) {
      state.list = state.list.filter((item) => { return item.id !== deleteId })
    }
  },
  actions: {
    async GetList_pproject({ commit, state }, params) {
      // let result = null
      // result = await $getList({
      //   currPage: params.currPage,
      //   pageSize: params.pageSize || state.pageSize
      // })
      // result && commit('GET_LIST', result.data)
      // params.cb && params.cb()
      commit('GET_LIST_pproject', params)
      params.cb()
    },

    async GetDetail_pproject({ commit, state }, params) {
      // let result = null
      // result = await $getDetail(params)
      // result && commit('GET_DETAIL', result.data)
      // params.cb && params.cb()
      const result = null
      commit('GET_DETAIL_pproject', result)
      params.cb()
    },

    async DeleteData_pproject({ commit, state }, params) {
      // let result = null
      // result = await $deleteData(params)
      // result && commit('DELETE_REPORT', params.id)
      // params.cb && params.cb()
      const result = null
      commit('DELETE_REPORT_pproject', result)
      params.cb()
    }
  }
}

export default project
