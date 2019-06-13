<template>
  
    
    <div id='chart10' class='barChart'>
			
		
  </div>
</template>
<script>
import echart from 'echarts'
import axios from 'axios'
export default {
	data(){
		return {
			dataname1:[],
			dataname2:[],
			dataname3:[]
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
//   mounted() { // 在没有接口时使用，有接口时删除
// 	this.$nextTick(function(){
// 		this.drawBarChart()
// 	})
//     
//   },
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
          data: ['日负荷', '风电', '光伏']
        },
        
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '万千瓦',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['1时', '3时', '5时', '7时', '9时', '11时', '13时', '15时', '19时', '21时', '23时']
        }],
        series: [{
          name: '日负荷',
          type: 'line',
          data: this.dataname3,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '风电',
          type: 'line',
          data: this.dataname1,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '光伏',
          type: 'line',
          data: this.dataname2,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
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
			this.$get("/echarts?bj=RFHCLPP").then((res)=>{
				console.log(res.data)
				if(res.data!=null && res.data!=""){
					that.dataname1=res.data[0]["风电"]
          that.dataname2=res.data[1]["光伏"]
          that.dataname3=res.data[2]["日负荷"]
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

