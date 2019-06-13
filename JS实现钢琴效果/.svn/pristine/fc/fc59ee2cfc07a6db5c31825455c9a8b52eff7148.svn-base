<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	
 import routerUtil from "./views/login/components/routerUtil.js"
	import 'babel-polyfill'
export default {
  name: 'App',
	data() {
		return {
			nodes: this.$router.options.routes
		}
	},
	created(){
		this.$store.dispatch("getRsa", {});
		var islogin=sessionStorage.getItem("islogin")
		var treedata=JSON.parse(sessionStorage.getItem("treedata"));
	
		// var routerTable=JSON.parse(sessionStorage.getItem("routerTable"))
		console.log(treedata&&islogin)
		
		if(treedata&&islogin){
			 routerUtil.combination(treedata)
			//递归组合成嵌套路由树
			var	routerTable = routerUtil.routerTree(treedata, 0)
			this.$router.options.routes=routerTable
			this.$store.dispatch('SetRoute', {
			      r:routerTable,
						
			      cb: () => {
			        // console.log("ok")
			      }
			    }) 
			    this.$router.addRoutes(routerTable) 
			console.log(this.$router)
		}else{
			// return this.$router.push('/login')
		}
	}
}
</script>
<style>
	
  @import './assets/icons/iconfont.css';
</style>
