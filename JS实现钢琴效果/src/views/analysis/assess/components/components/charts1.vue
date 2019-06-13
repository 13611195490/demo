<template>
  <div class='webEchart' id='barWebEchart'>
    
    <div id='chart0' class='barChart'>
			
		</div>
  </div>
</template>
<script>
import echart from 'echarts'
export default {
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
// 		this.$nextTick(function(){
//	 		this.drawBarChart()
//   })  
// 	
//   },
	created(){
		var that=this
		setTimeout(function(){
			
			console.log(123)
			
				that.drawBarChart()
			
		},100)
		
	},
  methods: {
		   

    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart0'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['发电量']
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
              type: ['bar']
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
          boundaryGap: true,
					axisLabel: {
					  interval: 0,
					  formatter: function(value) {
					    return value.split('').join('\n')
					  }
					},
          data: ['甘肃省', '兰州市', '嘉酒', '金昌市', '白银市', '天水市', '武威市', '张掖市', '平凉市', '庆阳市', '定西市', '陇南市', '临夏回族', '甘南藏族']
        }],
        series: [{
          name: '发电量',
          type: 'bar',
          data: [320, 40, 15, 35, 50, 15, 30, 80, 15, 60, 10, 75, 20, 15],
        }]
      };
			
			 mychart.setOption(option)
				
			window.addEventListener("resize",function(){
				mychart.resize()
				 
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
