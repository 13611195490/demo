<template>
<div id="content">

  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
      <el-breadcrumb-item>当前位置： 新能源评估</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/assess/develop' }"><b>开发建设评估</b></el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
  <div class="assessDevelop">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">风电规划装机并网进度</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart0 :chart="echartData"></chart0>
					</div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">集中式光伏规划装机并网进度</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart1 :chart="echartData"></chart1>
					</div>
          
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard">
     <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">新能源装机各区域占比</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart2 :chart="echartData"></chart2> 
					</div>
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">集中式和分布式电源装机占比</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart3 :chart="echartData"></chart3> 
						<!-- <chart4 :chart="echartData"></chart4> -->
					</div>
        </div>
      </el-col>      
      <!-- <div class="clearfix nsd-row chart">
        <h3 class="header-label">最大最小负荷</h3>
          <div class='webEchart bgImg3' id='barWebEchart' style="height:450px"></div>
         <chart2 :chart="echartData"></chart2> 
      </div>
    </el-row>
    <el-row class="tableCard rootCard2">
      <div class="clearfix nsd-row chart">
        <h3 class="header-label">典型日负荷与新能源出力匹配情况</h3>
          <div class='webEchart bgImg4' id='barWebEchart' style="height:450px"></div>
         <chart3 :chart="echartData"></chart3> 
      </div> -->
    </el-row>
  </div>
	
</div>
</template>
<script>
	import chart0 from "./components/chart0.vue"
	import chart1 from "./components/chart1.vue"
	import chart2 from "./components/chart2.vue"
	import chart3 from "./components/chart3.vue"
export default {
  name: 'assessDevelop',
	
  data() {
    return {
      saveChart0Data: {},
      saveChart1Data: {},
      saveChart2Data: {},
      saveChart3Data: {},
			saveChart4Data: {},
      echartData: {
        chart0: {},
        chart1: {},
        chart2: {},
        chart3: {},
				chart4: {}
      }
    }
  },
	components:{
		chart0,
		chart1,
		chart2,
		chart3
	},
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() { }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.assessDevelop{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/6.2.1.1风电规划装机并网进度.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/6.2.1.2新能源装机各区域占比.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/6.2.1.3新能源装机各区域占比.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/6.2.1.4集中式和分布式电源装机占比.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>