<template>
  <div class='webEchart' id='barWebEchart'>
    
    <div id='chart10' class='barChart'>
			
		</div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return{
			dataKey:[],
      dataSeries:[]
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
      var mychart = echart.init(document.getElementById('chart10'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.dataKey
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
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        series: this.dataSeries
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			this.$get("/echarts?bj=FDQDSL").then((res)=>{
				var maps = res.data
        if(maps!=null && maps!=""){
            for (var j = 0; j < maps.length; j++) {
              var datas = maps[j];
              for (var key in datas) {
                this.dataKey.push(key)
                var item ={
                  name:key,
                  type:'line',
                  data:datas[key],
                  markPoint: {
                    data: [
                      { type: 'max', name: '最大值' },
                      { type: 'min', name: '最小值' }
                    ]
                  }
                }
                this.dataSeries.push(item)
              }
              
            }
        }
				this.drawBarChart()
				
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

