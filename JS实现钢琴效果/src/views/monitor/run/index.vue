<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
      <el-breadcrumb-item>当前位置： 消纳监测</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/monitor/elcIn' }"><b>运行监测</b></el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
  <div class="monitorRun">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">省内新能源市场交易累计电量</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">     
								<chart0 :chart="echartData"></chart0>       
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">省内发电权交易</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
            <chart1 :chart="echartData"></chart1>  
          </div>
          
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">跨省跨区新能源交易</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart2 :chart="echartData"></chart2>
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">标杆上网电价图一</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart3 :chart="echartData"></chart3>
          </div>
        </div>
      </el-col>   
    </el-row>  
    <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">销售电价</h3>
          <div class='webEchart ' id='barWebEchart' style="height:850px;width: 100%;">
						<chart4 :chart="echartData"></chart4>
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">标杆上网电价图二</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart5 :chart="echartData"></chart5>
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

import chart0 from './components/chart0.vue'
import chart1 from './components/chart1.vue'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import chart4 from './components/chart4.vue'
import chart5 from './components/chart5.vue'
export default {
  name: 'monitorWeb',
  components: { chart0, chart1, chart2, chart3, chart4, chart5 },
  data() {
    return {}
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
.monitorRun{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/4_1.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/4_2.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/4_3.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/4_4.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg5{
  background-image: url('../../../assets/images/甘肃/4_5.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>
