<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart2' class='barChart'></div>
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
 	created(){
		this.getdata()
		
	},
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart2'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['常规能源装机', '新能源装机' ]
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
          name: '万千瓦',
					max: 3000,
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
          name: '常规能源装机',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.dataname3
        }, {
          name: '新能源装机',
					
          type: 'bar',
          areaStyle: {},
          stack: '电站',
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
			this.$get("/echarts?bj=XNYZJGQYZB").then((res)=>{
				console.log(res.data)
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
							// alert(e.region_name)
							that.dataname1.push(e.name)
							that.dataname2.push(e.新能源装机)
							that.dataname3.push(e.常规能源)
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
