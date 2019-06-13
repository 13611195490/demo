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
          trigger: 'axis'
        },
        legend: {
          data: this.legendName
        },
        calculable: true,
        yAxis: [{
          type: 'value',
          name: '万千瓦',
					max: 2500,
					min:0
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
          name: '集中式',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname4
        }, {
          name: '分散式',
					
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname3
        }, {
            name: this.name,
            type: 'line',
            data: this.dataname2,
            markPoint: {
              
            }
          },{
            name: '光伏规划装机',
            type: 'line',
            data: this.dataname5,
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
			this.$get("/echarts?bj=GFGHZJBWSD").then((res)=>{
				console.log(res.data)
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
              // alert(e.region_name)
              var date = new Date();
              var year = date.getFullYear();
              that.name = year+1+'年光伏规划装机'
              that.legendName = ['集中式', '分散式', year+1+'年光伏规划装机', '光伏规划装机' ]
							that.dataname1.push(e.name)
							that.dataname2.push(e.光伏规划装机后一年)
							that.dataname3.push(e.分散式)
							that.dataname4.push(e.集中式)
							that.dataname5.push(e.当前装机规模)
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
