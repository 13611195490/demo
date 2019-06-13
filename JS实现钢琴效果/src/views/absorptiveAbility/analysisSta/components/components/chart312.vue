<template>
  <div class='webEchart' id='barWebEchart'>
    
    <div id='chart3' class='barChart'>
			
		</div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return {
			data:[],
			dataname:[]
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
		var that=this
		setTimeout(function(){
				that.drawBarChart()
		},100);
		
	
	},
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart3'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2017年月度全社会用电量', '2018年月度全社会用电量']
        },
        toolbox: {
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
        },
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '亿千瓦时',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
					data: this.dataname,
          /* data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] */
        }],
        series: [{
          name: '2017年月度全社会用电量',
          type: 'line',
         /* data: [128, 98, 104, 102, 103, 107, 107, 109, 104, 111, 119, 98], */
				  data: this.data,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }
				]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})		
    },
		getdata(){
			var that=this
			axios.get("192.168.43.158:8080/gs/echarts/02").then((res)=>{
						res.data.forEach(function(e){
							// alert(e.region_name)
							that.dataname.push(e.region_name)
							that.data.push(e.param_value)
						})
				
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
