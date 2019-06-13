import {$getModelLabelList} from '@/api/model'
import axios from "axios"
const label = {
	state: {
		list:[],
		currentPage: 1,
		pageSize: 10,
		totalCount: 20,
		totalPage: 2,
		detail: []
	},
	mutations: {
		GET_LIST_label: (state,res) =>{
				state.list = [{
					CreateDate: '2019',
					Creator: '啦啦啦',
					VersionName: '风电数据',
					Description: '风电的准确数据'
				},{
					CreateDate: '2018',
					Creator: '啦啦啦',
					VersionName: '风电数据',
					Description: '风电的准确数据'
				},{
					CreateDate: '2017',
					Creator: '啦啦啦',
					VersionName: '风电数据',
					Description: '风电的准确数据'
				}]
				state.currentPage = 1
				state.totalCount = 20
				state.pageSize = 10
			},
			GET_DETAIL_label(state, detail) {
				state.detail={
					CreateDate: '111',
					Creator: '222',
					VersionName: '333',
					Description: '444'
				}
			},
			DELETE_REPORT_label(state, deleteId) {
				state.list.splice(deleteId.id,1)
			  // state.list = state.list.filter((item) => { return item.id !== deleteId })
			},
			ADD_DATA_label(state, detail) {
			  const addData = {
			    CreateDate: '2017',
			    Creator: '啦啦啦',
			    VersionName: '风电数据',
			    Description: '风电的准确数据'
			  }
			  state.list.push(addData)
			}
	},
	actions: {
		async GetList_label({ commit, state }, params) {
		  let result = null
		  result = await $getModelLabelList({
		    currPage: params.currPage,
		    pageSize: params.pageSize || state.pageSize
		  })
		  result && commit('GetList', result.data)
		  params.cb && params.cb()
		  console.log(result.data)
		 /* axios.get("http://192.168.0.131:8080/gs/queryAll").then((res)=>{
			  console.log(res.data)
		  }) */
		  /* const result = null
		  commit('GET_LIST_label', result)
		  params.cb() */
		},
		async GetDetail_label({ commit, state }, params) {
		  // let result = null
		  // await $getDetail(params)
		  // result && commit('GET_DETAIL', result.data)
		  // params.cb && params.cb()
		  // commit('GET_DETAIL', result)
		  commit('GET_DETAIL_label', params.id)
		  params.cb()
		},
		async DeleteData_label({ commit, state }, params) {
		  // let result = null
		  // result = await $deleteData(params)
		  // result && commit('DELETE_REPORT', params.id)
		  // params.cb && params.cb()
		  const result = null
		  commit('DELETE_REPORT_label', params)
		  params.cb()
		},
		async Add_label({ commit, state }, params) {
		  // let result = null
		  // result = await $addData(params)
		  // result && commit('DELETE_REPORT', params.id)
		  // params.cb && params.cb()
		  const result = null
		  commit('ADD_DATA_label', result)
		  params.cb()
		}
	}
}
export default label