// import 
const entry = {
	state: {
		list:[],
		currentPage: 1,
		pageSize: 10,
		totalCount: 20,
		totalPage: 2,
		detail: []
		
	},
	mutations: {
		GET_LIST_entry: (state,res) =>{
				state.list = [{
					IndexID: '2019',
					VersionName: '啦啦啦',
					ItemName: '风电数据',
					Area: '风电的准确数据',
					FromArea: '',
					ToArea: '',
					IndexType: '',
					PowerType: '',
					Frequency: '',
					Data: ''
				},{
					IndexID: '2019',
					VersionName: '啦啦啦',
					ItemName: '风电数据',
					Area: '风电的准确数据',
					FromArea: '',
					ToArea: '',
					IndexType: '',
					PowerType: '',
					Frequency: '',
					Data: ''
				},{
					IndexID: '2019',
					VersionName: '啦啦啦',
					ItemName: '风电数据',
					Area: '风电的准确数据',
					FromArea: '',
					ToArea: '',
					IndexType: '',
					PowerType: '',
					Frequency: '',
					Data: ''
				}]
				  state.currentPage = 1
				  state.totalCount = 20
				  state.pageSize = 10
			},
			GET_DETAIL_entry(state, detail) {
				state.detail={
					data1: '111',
					data2: '222',
					data3: '333',
					data4: '444'
				}
			},
			DELETE_REPORT_entry(state, deleteId) {
				state.list.splice(deleteId.id,1)
			  // state.list = state.list.filter((item) => { return item.id !== deleteId })
			},
			ADD_DATA_entry(state, detail) {
			  const addData = {
			    data1: '2017',
			    data2: '啦啦啦',
			    data3: '风电数据',
			    data4: '风电的准确数据'
			  }
			  state.list.push(addData)
			}
	},
	actions: {
		async GetList_entry({ commit, state }, params) {
		  // let result = null
		  // result = await $getList({
		  //   currPage: params.currPage,
		  //   pageSize: params.pageSize || state.pageSize
		  // })
		  // result && commit('GET_LIST', result.data)
		  // params.cb && params.cb()
		  const result = null
		  commit('GET_LIST_entry', result)
		  params.cb()
		},
		async GetDetail_entry({ commit, state }, params) {
		  // let result = null
		  // await $getDetail(params)
		  // result && commit('GET_DETAIL', result.data)
		  // params.cb && params.cb()
		  // commit('GET_DETAIL', result)
		  commit('GET_DETAIL_entry', params.id)
		  params.cb()
		},
		async DeleteData_entry({ commit, state }, params) {
		  // let result = null
		  // result = await $deleteData(params)
		  // result && commit('DELETE_REPORT', params.id)
		  // params.cb && params.cb()
		  const result = null
		  commit('DELETE_REPORT_entry', params)
		},
		async Add_entry({ commit, state }, params) {
		  // let result = null
		  // result = await $addData(params)
		  // result && commit('DELETE_REPORT', params.id)
		  // params.cb && params.cb()
		  const result = null
		  commit('ADD_DATA_entry', result)
		  params.cb()
		}
	}
}
export default entry