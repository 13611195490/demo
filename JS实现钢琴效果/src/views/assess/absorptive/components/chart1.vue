<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart1' class='barChart'></div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return{
			dataname1:[],
			dataname2:[],
			dataname3:[],
			dataname4:[],
			dataname5:[],
			dataname6:[]
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
      var mychart = echart.init(document.getElementById('chart1'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis',
          formatter:function(params){
            var html = params[3].seriesName + ' : ' + params[3].data+"</br>"+params[4].seriesName + ' : ' + params[4].data
            if(params[0].data != ""){
              html+="</br>"+params[0].seriesName + ' : ' + params[0].data
            }
            if(params[1].data != ""){
              html+="</br>"+params[1].seriesName + ' : ' + params[1].data
            }
            if(params[2].data != ""){
              html+="</br>"+params[2].seriesName + ' : ' + params[2].data
            }
            return html
          }
        },
        legend: {
          data: ['超规模', '正常', '滞后', '约束性指标', '激励性指标']
        },
        calculable: true,
        yAxis: [{
          type: 'value',
          name: '%',
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: this.dataname1,
        }],
        series: [{
          name: '超规模',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname2
        }, {
          name: '正常',
					
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname3
        }, {
            name: '滞后',
            type: 'bar',
            // areaStyle: {},
            data: this.dataname4,
            markPoint: {
              
            }
          },{
            name: '约束性指标',
            type: 'line',
            // areaStyle: {},
            data: this.dataname5,
            smooth: 0,
          },{
            name: '激励性指标',
            type: 'line',
            // areaStyle: {},
            data: this.dataname6,
            smooth: 0,
          }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			var that=this
			that.$get("/echarts?bj=GFQDLKZMB").then((res)=>{
				if(res.data!=null && res.data!=""){
						res.data.forEach(function(e){
              that.dataname1.push(e.name)
              if(e.规模 == '超规模'){
                that.dataname2.push(e.指标)
              }else{
                that.dataname2.push('')
              }
              if(e.规模 == '正常'){
                that.dataname3.push(e.指标)
              }else{
                that.dataname3.push('')
              }
              if(e.规模 == '滞后'){
                that.dataname4.push(e.指标)
              }else{
                that.dataname4.push('')
              }
							that.dataname5.push(e.约束性指标)
							that.dataname6.push(e.激励性指标)
						})
				}
						that.drawBarChart()
			})
		}
  }
}

</script>
<style scoped>
.barChart{
  height: 400px;
}
.listTable{
  padding-left: 1%;
  padding-right: 1%;
}
</style>
