<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">全国新能源日运行曲线</h3> -->
    <div id='chart0' class='barChart'></div>
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
      this.$get("/echarts?bj=XNYSCLJJYDL").then((res) => {
        var data  = res.data
        if(data != null && data != ''){
          var datas2 = data[0].累计电量
          var datas1 = data[0].累计同比
          this.data2 = datas2.split(',')
          this.data1 = datas1.split(',')
        }
        var date = new Date;
        this.dataName = [date.getFullYear()-1+'年累计电量',date.getFullYear()-1+'年累计同比']
        this.name = date.getFullYear()-1+'年累计电量'
        this.name1 = date.getFullYear()-1+'年累计同比'
        this.drawBarChart()
      })
    },
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart0'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.dataName
        },
        
        calculable: true,
        grid: [
          {
            left: 50,
            right: 50
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '亿千瓦时',
						min: 0,
            axisLabel: {
              formatter: '{value} '
            }
          },{
            type: 'value',
            name: '%',
            min: 0,
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
        ],
        series: [
          {
            name: this.name1,
            type: 'line',
            yAxisIndex: 1,
            data: this.data1,
          },{
            name: this.name,
            type: 'bar',
            yAxisIndex: 0,
            data: this.data2,
          }
        ]
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
</style>
