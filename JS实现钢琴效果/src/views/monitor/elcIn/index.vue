<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 新能源监测</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/plan/list' }">用电监测</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
  <div class="monitorElcIn">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">两年内的月度</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart0 :chart="echartData" ></chart0>
						<chart3 :chart="echartData" style="display: none;"></chart3>
					</div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">分地市用电量</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart1 :chart="echartData"></chart1>

					</div>
         
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard">
     <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">最大最小负荷</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart9 :chart="echartData"></chart9> 
					</div>
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">典型日负荷与新能源出力匹配情况</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart10 :chart="echartData"></chart10> 
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
	import axios from "axios"
import chart1 from './components/chart1.vue'
import chart0 from './components/chart0.vue'
import chart10 from './components/chart10.vue'
import chart9 from './components/chart9.vue'
import chart3 from './components/chart3.vue'

export default {
  name: 'monitorElcIn',
  components: { chart0, chart1, chart10, chart9, chart3 },
  data() {
    return {
      saveChart0Data: {},
      saveChart1Data: {},
			saveChart10Data: {},
			saveChart9Data: {},
			saveChart3Data: {},
      echartData: {
        chart0: {},
        chart1: {},
				chart9: {},
				chart3: {},
        chart10: {}
				
      }
    }
  },
  created() {
    
		
  },
  methods: {
    
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.monitorElcIn{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/1_1.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/1_2.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/1_3.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/1_4.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>