<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">历年装机变化</h3> -->
    <div id='chart1' class='barChart'></div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return {
			dataname1:[],
			dataname2:[],
			dataname3:[],
			dataname4:[],
			dataname5:[]
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
					axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
        },
        legend: {
					orient: 'horizontal',
					type: 'plain',
					x:'center',
          data: ['火电', '水电', '风电', '太阳能', '光伏']
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
				bar:{
					barGap: '30%'
				},
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value
            }
          },
          boundaryGap: true,
          data: this.years
					
        }],
        series: [{
          name: '火电',
					barWidth:50,
					position:'right',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname1,
          markPoint: {
            
          }
        }, {
          name: '水电',
					barWidth:50,
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data:this.dataname2,
          markPoint: {
            
          }
        }, {
          name: '风电',
					barWidth:50,
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname3,
          markPoint: {
            
          }
        }, {
          name: '光伏',
					barWidth:50,
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname4,
          markPoint: {
            
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
      var date=new Date;
      var year=date.getFullYear(); 
      var years = []
      for (var index = 1; index < 9; index++) {
        years.push(year-9+index)
      }
      this.years = years
			this.$get("/echarts?bj=LNZJBH").then((res)=>{
				if(res.data!=null && res.data!=""){
          that.dataname1=res.data[1]["火电"]
          that.dataname2=res.data[2]["水电"]
          that.dataname3=res.data[0]["风电"]
          that.dataname4=res.data[3]["光伏"]
				}
				// console.log(that.dataname1)
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
#chart1{
	width: 100%;
}
</style>
