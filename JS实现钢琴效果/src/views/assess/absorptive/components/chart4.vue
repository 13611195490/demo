<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">各省最小负荷</h3> -->
    <div id='chart4' class='barChart'></div>
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
      var mychart = echart.init(document.getElementById('chart4'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['等效利用小时数']
        },
        /* toolbox: {
          show: false,
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
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '小时',
          type: 'value',
				
          boundaryGap: [0, 0.01]
        }],
        xAxis: [{
					axisLabel: {
					  interval: 0,
					  formatter: function(value) {
					    return value.split('').join('\n')
					  }
					},
				data: this.dataname1,
        }],
        series: [{
          name: '等效利用小时数',
          type: 'bar',
          data: this.dataname2
        }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			var that=this
			that.$get("/echarts?bj=DXLYXSSPG").then((res)=>{
				console.log(res.data)
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
							// alert(e.region_name)
							that.dataname1.push(e.name)
							that.dataname2.push(e.等效利用小时数)
							
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
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
</style>
