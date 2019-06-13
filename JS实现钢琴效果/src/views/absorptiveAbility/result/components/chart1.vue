<template>
  <div id="content">
    <div class="analysisAssess">
      <el-row class="tableCard firstCard">
        <el-col class="rootCard">
          <div class="clearfix queryData">
            <div class="searchInner fl clearfix">
              <div style="display: inline-block;">
                <span class="frameName">选择分析结果</span>
                <el-select class="typeSelect" v-model="type" placeholder="请选择" style="width:180px">
                  <el-option label="2019年-指数平滑" value="2019年-指数平滑"></el-option>
                  <el-option label="2018年-指数平滑" value="2018年-指数平滑"></el-option>
                </el-select>
              </div>
              <div style="display: inline-block;margin-left:20px;">
                  <span class="frameName">负荷预测</span>
                  <el-select class="typeSelect" v-model="type" placeholder="请选择" style="width:180px">
                    <el-option label="2019年-指数平滑" value="2019年-指数平滑"></el-option>
                    <el-option label="2018年-指数平滑" value="2018年-指数平滑"></el-option>
                  </el-select>
              </div>
              <div style="display: inline-block;margin-left:20px;">
                <span class="frameName">发电预测</span>
                <el-select class="typeSelect" v-model="type" placeholder="请选择" style="width:180px">
                  <el-option label="2019年-指数平滑" value="2019年-指数平滑"></el-option>
                  <el-option label="2018年-指数平滑" value="2018年-指数平滑"></el-option>
                </el-select>
              </div>
            </div>
            <el-button type="primary" class="see">查看</el-button>
          </div>
        </el-col>
      </el-row> 
      <el-row class="tableCard firstCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <h3 class="header-label">总发电量，分时段发电量</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
							 <chart0  class="webEchartsub" :chart="echartData"></chart0>
            </div> 
          </div> 
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">利用小时数、负荷率（常规能源）</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
							<chart1 :chart="echartData"></chart1>   
            </div>
            
          </div>
        </el-col>
      </el-row>    
      <el-row class="tableCard firstCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
            <h3 class="header-label">利用小时数、负荷率（新能源）</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
               <chart11  class="webEchartsub" :chart="echartData"></chart11>
            </div> 
          </div> 
        </el-col>
         <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">弃风光量</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
              <chart2 :chart="echartData"></chart2>
            </div>
            
          </div>
        </el-col>
      </el-row>    
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">弃风光率</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
							 <chart3 :chart="echartData"></chart3>
            </div>     
          </div>
        </el-col>
         <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">常规能源总出力</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
              <chart4 :chart="echartData"></chart4>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">新能源总出力</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
							<chart5 :chart="echartData"></chart5>
            </div>
            
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">发电受阻功率</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
              <chart6 :chart="echartData"></chart6>
            </div>
            
          </div>
        </el-col>
      </el-row>
       <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">各聚合电网间受阻断面</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
							<chart7 :chart="echartData"></chart7>
            </div>
          </div>
        </el-col>
         <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">传输功率</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
              <chart8 :chart="echartData"></chart8>
            </div>
            
          </div>
        </el-col>
      </el-row> 
     <!--  <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">总运行容量（按月份）</h3>
            <div class='webEchart publincEchaet' id='barWebEchart'>
                 <chart13 :chart="echartData"></chart13> 
            </div>
          </div>
        </el-col>

      </el-row>  -->
    </div>
  </div>
</template>
<script>
	import chart0 from "./components/chart0.vue"
	import chart1 from "./components/chart1.vue"
	import chart2 from "./components/chart2.vue"
	import chart3 from "./components/chart3.vue"
	import chart4 from "./components/chart4.vue"
	import chart5 from "./components/chart5.vue"
	import chart6 from "./components/chart6.vue"
	import chart7 from "./components/chart7.vue"
	import chart8 from "./components/chart8.vue"
  import chart11 from "./components/chart11.vue"
  import chart13 from "./components/chart13.vue"
export default {
  name: 'componChart',
  data() {
     
    return {
      type: '2019年-指数平滑',
			saveChart0Data: {},
			saveChart1Data: {},
			saveChart2Data: {},
			saveChart3Data: {},
			saveChart4Data: {},
			saveChart5Data: {},
			saveChart6Data: {},
			saveChart7Data: {},
			saveChart8Data: {},
      saveChart11Data: {},
			echartData: {
			  chart0: {},
			  chart1: {},
			  chart2: {},
			  chart3: {},
				chart4: {},
				chart5: {},
				chart6: {},
				chart7: {},
				chart8: {}
			},
			
    }
  },
	components:{
		chart0,
		chart1,
		chart2,
		chart3,
		chart4,
		chart5,
		chart6,
		chart7,
		chart8,
    chart11,
    chart13
	},
	mounted(){
		this.fn()
	},
	methods:{
		fn(){
			if(this.type=="2019年-指数平滑"){
				console.log(2019)
			}else if(this.type=="2018年-指数平滑"){
				console.log(2018)
			}
      
			}
      
	}
}
</script>
<style src="@/styles/public.css"></style>
<style scoped>
.see{
  margin-left:20px;
}
.triggerDate{
  position: relative;
}
.elDatePick{
  position: absolute;
    top: 0;
    opacity: 0;
    left: 90px;
    z-index: -1;
}
.pageContainer{
  padding: 20px 0
}
.analysisAssess{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../../assets/images/甘肃/5_1.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../../assets/images/甘肃/5_2.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../../assets/images/甘肃/5_3.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../../assets/images/甘肃/5_4.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg5{
  background-image: url('../../../../assets/images/甘肃/5_5.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg6{
  background-image: url('../../../../assets/images/甘肃/5_6.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg7{
  background-image: url('../../../../assets/images/甘肃/5_7.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg8{
  background-image: url('../../../../assets/images/甘肃/5_8.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg9{
  background-image: url('../../../../assets/images/甘肃/5_9.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg10{
  background-image: url('../../../../assets/images/甘肃/5_10.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg11{
  background-image: url('../../../../assets/images/甘肃/5_11.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg12{
  background-image: url('../../../../assets/images/甘肃/5_12.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.componChartFirst{
   position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: red;
  left: 0px;
}
.publincEchaet{
  height:500px;
  width: 100%;
}
.webEchartsub{
 position:relative;  
 height:500px;
 width: 100%;
}
</style>
