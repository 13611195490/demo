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
			dataname3:[],
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
          data:[year-4+'年', year+1+'年', '年均增长']
        },
        calculable: true,
        yAxis: [
					{
						type: 'value',
            name: '万千瓦',
            axisLabel: {
              formatter: '{value} '
            }
					},{
            type: 'value',
            name: '%',
            axisLabel: {
              formatter: '{value} '
            }
          }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
           
          },
          data:["火电", "风电" , "水电", "光伏发电", "光热发电", "电力外送"] ,
        }],
        series: [{
          name: year-4+'年',
          type: 'bar',
          data:this.dataname1
        }, {
          name:  year+1+'年',
          type: 'bar',
          data: this.dataname2
        },{
          name: '年均增长',
          type: 'line',
          yAxisIndex:'1',
          data: this.dataname3
        }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
      var that=this
      
			that.$get("/echarts?bj=DLXNJBZMBWCD").then((res)=>{
        var date = new Date
				var year = date.getFullYear()
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
						if(e.key==(year-4)+'年'){
							that.dataname1.push(e.火电)
							that.dataname1.push(e.风电)
							that.dataname1.push(e.水电)
							that.dataname1.push(e.光伏发电)
							that.dataname1.push(e.光热发电)
							that.dataname1.push(e.电力外送)
						}else if(e.key==(year+1)+'年'){
							that.dataname2.push(e.火电)
							that.dataname2.push(e.风电)
							that.dataname2.push(e.水电)
							that.dataname2.push(e.光伏发电)
							that.dataname2.push(e.光热发电)
							that.dataname2.push(e.电力外送)
						}else if(e.key=="年均增长"){
							that.dataname3.push(e.火电)
							that.dataname3.push(e.风电)
							that.dataname3.push(e.水电)
							that.dataname3.push(e.光伏发电)
							that.dataname3.push(e.光热发电)
							that.dataname3.push(e.电力外送)
						}
							
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
