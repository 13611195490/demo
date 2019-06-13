<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
      <el-breadcrumb-item>当前位置： 新能源评估</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/assess/out' }"><b>外送消纳能力评估</b></el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
  <div class="assessOut">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">通道最大输送能力</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">     
							<chart0 :chart="echartData"></chart0>        	
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">通道输送电量</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
            <chart1 :chart="echartData"></chart1>   
          </div>
          
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">通道输送新能源电量占比</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						 <chart2 :chart="echartData"></chart2>
          </div>
         
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">通道电力交易情况</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart3 :chart="echartData"></chart3>
          </div>
          
        </div>
      </el-col>  
    </el-row>    
    <!-- <el-row class="tableCard rootCard2">
      <div class="clearfix nsd-row chart">
        <chart4 :chart="echartData"></chart4>
      </div>
    </el-row> -->
  </div>
</div>
</template>
<script>
	import chart0 from "./components/chart0.vue"
	import chart1 from "./components/chart1.vue"
	import chart2 from "./components/chart2.vue"
	import chart3 from "./components/chart3.vue"
export default {
  name: 'assessOut',
  data() {
    return {
			saveChart0Data: {},
			saveChart1Data: {},
			saveChart2Data: {},
			saveChart3Data: {},
			echartData: {
			  chart0: {},
			  chart1: {},
			  chart2: {},
			  chart3: {}
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
    fetchData() {

    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.assessOut{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/6_14.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/6_15.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/6_16.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/6_17.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>
