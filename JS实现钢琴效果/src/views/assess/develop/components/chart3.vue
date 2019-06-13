<template>
  <div class='webEchart' id='barWebEchart'>
		<h3 class="feng">风电</h3><h3 class="guang">光伏</h3>
    <div id='chart3' class='barChart'></div>
  </div>
</template>
<script>
import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return{
			dataname1:[],
			dataname2:[]
		}
	},
  props: {
    chart: Object
  },
  watch: {
    chart: {
      handler(a, b) {
        if (a) {
          this.drawBarChart()
        }
      },
      deep: true
    }
  },
 	created(){
		this.getdata()
		
	},
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart3'), 'macarons')
      var option={
          legend: {},
          tooltip: {},
          dataset: {
              source: [
                  ['风电', '1', '2'],
                  this.data1,
                  this.data2
              ]
          },
          series: [{
              type: 'pie',
              radius: 60,
              center: ['25%', '30%']
          }, {
              type: 'pie',
              radius: 60,
              center: ['75%', '30%'],
              encode: {
                  itemName: '风电',
                  value: '2'
              }
          }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			var that=this
			that.$get("/echarts?bj=JZSHFBSDYZJZB").then((res)=>{
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
              that.data1 =  ['分布式电源装机', e.风电分布式电源装机, e.光伏分布式电源装机]
              that.data2 =  ['集中式新能源电源', e.风电集中式电源装机, e.光伏集中式电源装机]
						})
				  }
				
						that.drawBarChart()
			})
		}
  }
}
</script>
<style scoped>
.barChart {
  height: 400px;
}
.webEchart{
	position: relative;
}
.feng{
	position: absolute;
	top: 20px;
	left: 150px;
}
.guang{
	position: absolute;
	top: 20px;
	left: 580px;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
</style>
