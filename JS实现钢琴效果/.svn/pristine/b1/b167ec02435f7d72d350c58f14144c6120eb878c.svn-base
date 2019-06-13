<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">历年装机变化</h3> -->
    <div id='chart1' class='barChart'></div>
  </div>
</template>
<script>
import echart from 'echarts'
import axios from "axios"
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
 	created(){
		this.initData()
	},
  methods: {
    initData(){
      this.$get("/echarts?bj=SNFDJYQ").then((res) => {
        var data = res.data
        var dataName = []
        var series = []
        if(data != null && data != ''){
          data.forEach(element => {
            $.each(element, function (key, value) {
              var dom ={
                name: key,
                position:'right',
                type: 'bar',
                stack: '总量',
                data: value
              }
              dataName.push(key)
              series.push(dom)
            })
          });
          this.dataName = dataName
          this.series = series
        }
         this.drawBarChart()
      })
    },
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart1'), 'macarons')
			var option = {
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
          data: this.dataName
        },
       
        yAxis: [{
          name: '亿千瓦时',
          type: 'value',
					min: 0,
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value
            }
          },
          boundaryGap: true,
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					
        }],
        series: this.series
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
