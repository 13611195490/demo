<template>
  <div class='webEchart' id='barWebEchart'>
  	<el-button type="primary" class="buttonFanhui" v-if="buttonDisplay" @click="ClickbuttonFanhui">返回</el-button>
    <el-select v-model="selectedOptions" class="Elcascader" placeholder="请选择"  size="small"@change="handleChange">
	 	<el-option
	 	  v-for="item in options"
	 	  :key="item.value"
	 	  :label="item.label"
	 	  :value="item.value"
	 	  >
 	</el-option>
   </el-select>
      </el-cascader>
       <div id='chart2'  v-if="sss" class='barChart'>
		<componChartSecond></componChartSecond>
	  </div>
	  <div id="selects" v-if="ssss">
		<componChartSecondsub></componChartSecondsub>
	  </div>
  </div>
</template>
<script>
import axios from "axios"
import echart from 'echarts'
import componChartSecond from './componChartSecond.vue'//1.引入组件
import componChartSecondsub from './componChartSecondsub.vue'//1.引入组件
export default {
	 components:{
      componChartSecond,//2.注册组件3.上边调用组件
      componChartSecondsub//2.注册组件3.上边调用组件
	},
	data(){
		return {
			sss:true,
			ssss:false,
			buttonDisplay:false,
			value:'',
			options: [
			    {
				  value: '选项1',
				  label: '甘肃省'
				}, {
				  value: '选项2',
				  label: '白银市'
				}, {
				  value: '选项3',
				  label: '天水市'
				}, {
				  value: '选项4',
				  label: '张掖市'
				}, {
				  value: '选项5',
				  label: '武威市'
				}, {
				  value: '选项6',
				  label: '陇南市'
				}, {
				  value: '选项7',
				  label: '金昌市'
				}, {
				  value: '选项8',
				  label: '甘南藏族'
				}, {
				  value: '选项9',
				  label: '平凉市'
				}, {
				  value: '选项10',
				  label: '庆阳市'
				}, {
				  value: '选项11',
				  label: '定西市'
				}, {
				  value: '选项12',
				  label: '嘉酒市'
				}, {
				  value: '选项13',
				  label: '兰州市'
				}, {
				  value: '选项14',
				  label: '临夏回族'
				}, {
				  value: '选项15',
				  label: '酒泉市'
				}],
				selectedOptions:['']
		}
	},
  methods: {
	//1.点击返回按钮
  	ClickbuttonFanhui(){
     this.sss=true;
     this.ssss=false;
     this.buttonDisplay=false;
     this.selectedOptions=[''];
  	},
  	//2.点击下拉框值
  	handleChange(value) {
            if(value){ 
              this.sss=false; 
              this.ssss=true;
              this.buttonDisplay=true;
            }  
		},   
  }
}
</script>
<style scoped>
.barChart {
  height: 480px;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
#barWebEchart{
		position: relative;
	}
.Elcascader{
	width: 150px;
	position: absolute;
	top: -10px;
	right: 50px;
	z-index: 99;
}
.buttonFanhui{
position: absolute;
right: 160px;
padding: 8px;
top: -39px;
}
.Elcascader{
  position: absolute;
  right: 0px;
  top:-40px;
}

</style>
