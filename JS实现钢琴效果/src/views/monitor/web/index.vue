<template>
<div id="content">
  <div class="rate clearfix">
    <el-breadcrumb separator=" > " class="breadcrumb">
      <el-breadcrumb-item>当前位置： 消纳监测</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/monitor/elcIn' }"><b>并网监测</b></el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
  <div class="monitorWeb">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">装机结构和发电量结构</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">    
							<chart0 :chart="echartData"></chart0>        	 
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">历年装机变化</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart1 :chart="echartData"></chart1>   
            
          </div>
          
        </div>
      </el-col>
    </el-row>
    <!-- <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">分市风电累计装机</h3>
          <div class='webEchart bgImg3' id='barWebEchart' style="height:450px">
            
          </div>
           <chart2 :chart="echartData"></chart2> 
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">风电月度新增装机</h3>
          <div class='webEchart bgImg4' id='barWebEchart' style="height:450px">
            
          </div>
          <chart3 :chart="echartData"></chart3> 
        </div>
      </el-col>
    </el-row>
    <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">分市太阳能累计装机</h3>
          <div class='webEchart bgImg5' id='barWebEchart' style="height:450px">
          </div>
           <chart2 :chart="echartData"></chart2> 
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">太阳能月度新增装机</h3>
          <div class='webEchart bgImg6' id='barWebEchart' style="height:450px">
          </div>
           <chart3 :chart="echartData"></chart3> 
        </div>
      </el-col>
    </el-row> -->
    <el-row class="tableCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">分地区风电及光伏累计装机</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<chart2 :chart="echartData"></chart2>
          </div>
          
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
            <h3 class="header-label">新能源场站座数</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width: 100%;">
						<!-- <chart3 :chart="echartData"></chart3> -->
						<div class="main-box">
								<div class="min-box">
									<div class="label label-one">
										<div class="label-box"></div>
											<div class="label-one-left">
												<h3>风电站：</h3>
												<p><span>{{this.bean.fengdian}}</span>座</p>
											</div>
											<div class="label-one-right">
												<h3>分散式发电：</h3>
												<p><span>{{this.bean.fensan}}</span>座</p>
											</div>
									</div>
								</div>
								<div class="min-box">
									<div class="label label-two">
										<div class="label-box"></div>
										<div class="label-two-left">
											<h3>光伏电站	：</h3>
											<p><span>{{this.bean.guangfu}}</span>座</p>
										</div>
										<div class="label-two-right">
											<h3>光伏扶贫：</h3>
											<p><span>{{this.bean.guangfufupin}}</span>座</p>
										</div>
									</div>
								</div>
								
									
						</div>
						
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
import axios from "axios"
export default {
  name: 'monitorWeb',
  components: { chart0, chart1, chart2, chart3, chart4 },
  data() {
    return {
      bean:{
        fengdian:0,
        guangfu:0,
        guangfufupin:0,
        fensan:0
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      	this.$get("/echarts?bj=XNYCZZS").then((res)=>{
          if(res.data != null && res.data != ''){
            this.bean.fengdian = res.data[0]['风电站']
            this.bean.guangfu = res.data[0]['分散式电站']
            this.bean.guangfufupin = res.data[0]['光伏电站']
            this.bean.fensan = res.data[0]['光伏扶贫']
          }
        })
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.monitorWeb{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.main-box{
	width: 100%;
	height: 420px;
	margin-left: 100px;
}
.min-box{
	width: 100%;
	height: 140px;
}
.label-box{
	width: 10px;
	height: 30px;
	background: blue;
}
.label{
	
	display: inline;
}
.label-two .label-box{
	background: rgba(135,51,102);
}
.label-three .label-box{
	background: orange;
}
.label-one-left{
	float: left;
	margin-left: 50px;
}
.label-one-right{
	margin-left: 25%;
	float: left;
}
.label-two-left{
	float: left;
	margin-left: 50px;
}
.label-two-right{
	margin-left: 25%;
	float: left;
}
.label-three-left{
	margin-left: 50px;
}
.label h3{
	font-size: 20px;
}
.label p{
	font-size: 14px;
}
.label p span{
	font-size: 30px;
	line-height: 50px;
	padding-right: 10px;
}
/* .bgImg1{
  background-image: url('../../../assets/images/甘肃/01各类电源装机和发电量.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/02历年装机变化情况.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/03各地市风电装机.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/04风电分月度新增装机.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg5{
  background-image: url('../../../assets/images/甘肃/03各地市光伏装机.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg6{
  background-image: url('../../../assets/images/甘肃/04光伏分月度新增装机.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg7{
  background-image: url('../../../assets/images/甘肃/2_3.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg8{
  background-image: url('../../../assets/images/甘肃/2_4.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
} */
</style>
