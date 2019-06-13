<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">分市风电累计装机</h3> -->
    <div id='chart2' class='barChart'></div>
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
			var date = new Date
			var year = date.getFullYear()
      var mychart = echart.init(document.getElementById('chart2'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.years
        },
      
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '亿千瓦时',
          type: 'value',
          boundaryGap: [0, 0.01]
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: this.dataname3
        }],
        series: [{
          name: this.name1,
          type: 'bar',
          data: this.dataname1
        },{
          name: this.name2,
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
      var date=new Date;
      var year=date.getFullYear(); 
      this.name1 = year+'年光伏累计装机'
      this.name2 =  year+'年风电累计装机'
      this.years = [year+'年光伏累计装机', year+'年风电累计装机']
     
			this.$get("/echarts?bj=FDQFDGF").then((res)=>{
				// console.log(res.data)
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
							// alert(e.region_name)
							that.dataname1.push(e.光伏)
							that.dataname2.push(e.风电)
							that.dataname3.push(e.name)
						})
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
</style>
