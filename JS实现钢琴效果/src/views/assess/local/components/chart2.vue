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
      var mychart = echart.init(document.getElementById('chart2'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['负荷增长', '装机增长']
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
          name: '亿千瓦时',
					/* max: 60, */
					min:0
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            
          },
          data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        }],
        series: [{
          name: '负荷增长',
          type: 'bar',
//           areaStyle: {},
//           stack: '电站',
          data: this.dataname1
        },{
          name: '装机增长',
          type: 'bar',
//           areaStyle: {},
//           stack: '电站',

          data:this.dataname2
        }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
	  getdata(){
			var that=this
			that.$get("/echarts?bj=FHYZJZZ").then((res)=>{

					if(res.data!=null && res.data!=undefined){
						res.data.forEach(function(e){
							if(e.name=="负荷增长"){
								that.dataname1.push(e.第一季度)
								that.dataname1.push(e.第二季度)
								that.dataname1.push(e.第三季度)
								that.dataname1.push(e.第四季度)
							}else if(e.name=="装机增长"){
								that.dataname2.push(e.第一季度)
								that.dataname2.push(e.第二季度)
								that.dataname2.push(e.第三季度)
								that.dataname2.push(e.第四季度)
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
