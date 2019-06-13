<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart0' class='barChart'></div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return{
			dataname1:[]
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
      var mychart = echart.init(document.getElementById('chart0'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['外送电力最大输送能力']
        },
        /* toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        }, */
        calculable: true,
        yAxis: [{
          type: 'value',
          name: '亿千瓦时',
					
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            
          },
          data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        }],
        series: [{
          name: '外送电力最大输送能力',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname1
        }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			var that=this
			that.$get("/echarts?bj=TDZDSSLL").then((res)=>{
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
							// alert(e.region_name)
							that.dataname1.push(e.第一季度,e.第二季度,e.第三季度,e.第四季度)
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
