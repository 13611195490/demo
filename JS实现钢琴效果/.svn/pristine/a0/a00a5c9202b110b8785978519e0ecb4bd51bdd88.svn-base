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
		return{
			dataname1:[],
			dataname2:[],
			dataname3:[],
			dataname4:[]
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
      var mychart = echart.init(document.getElementById('chart3'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis',
          formatter:function(params){
          var html = params[2].seriesName + ' : ' + params[2].data
          if(params[0].data != ""){
            html+="</br>"+params[0].seriesName + ' : ' + params[0].data
          }
          if(params[1].data != ""){
            html+="</br>"+params[1].seriesName + ' : ' + params[1].data
          }
          return html
        }
        },
        legend: {
          data: ['超规模', '滞后', '保障性收购利用小时数']
        },
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '万千瓦',
          type: 'value',
					max: 2500,
					min: 0,
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          data: this.dataname1,
					axisLabel:{
						formatter:function(value){
							return value.split("").join("\n")
						}
					}
				}],
        series: [{
          name: '超规模',
          type: 'bar',
          data: this.dataname2,
         
        }, {
          name: '滞后',
          type: 'bar',
          data: this.dataname3,
        },{
          name: '保障性收购利用小时数',
          type: 'line',
          data: this.dataname4,
					smooth: 0,
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
			that.$get("/echarts?bj=BZXSGLYXSS").then((res)=>{
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
							that.dataname1.push(e.name)
              if(e.规模 == "超规模"){
                that.dataname2.push(e.保障性收购利用小时数后一年)
              }else{
                that.dataname2.push('')
              }
              if(e.规模 == "滞后"){
                that.dataname3.push(e.保障性收购利用小时数前一年)
              }else{
                that.dataname3.push('')
              }
							that.dataname4.push(e.保障性收购利用小时数)
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
