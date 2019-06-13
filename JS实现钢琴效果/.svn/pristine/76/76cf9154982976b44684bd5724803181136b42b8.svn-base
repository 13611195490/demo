<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
      <el-breadcrumb-item>当前位置： 新能源评估</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/assess/absorptive' }"><b>消纳利用评估</b></el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
  <div class="absorptiveLocal">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">风电弃电率控制目标</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">    
								<chart0 :chart="echartData" ></chart0>         
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">光伏弃电率控制目标</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
            <chart1 :chart="echartData"></chart1>   
          </div>
          
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard ">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">可再生能源电力消纳及比重目标完成进度</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart2 :chart="echartData"></chart2>
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">新能源保障性收购利用小时数完成进度</h3>
          <div class='webEchart' id='barWebEchart' style="height:450px;width: 100%;">
						<chart3 :chart="echartData"></chart3>
          </div>
          
        </div>
      </el-col>  
    </el-row>    
    <el-row class="tableCard ">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">新能源等效利用小时数评估</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart4 :chart="echartData"></chart4>
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
	import chart4 from "./components/chart4.vue"
export default {
  name: 'absorptiveLocal',
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
		chart3,
		chart4
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
<style scoped scope>
.absorptiveLocal{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/6.2.2.1风电弃电率控制目标.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/6.2.2.2光伏弃电率控制目标.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/6.2.2.3可再生能源电力消纳及比重目标完成进度.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/6.2.2.4新能源保障性收购利用小时数完成进度.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg5{
  background-image: url('../../../assets/images/甘肃/6.2.2.5新能源等效利用小时数评估.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>
