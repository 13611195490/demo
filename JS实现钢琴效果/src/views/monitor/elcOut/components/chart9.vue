<template>
  <div class='webEchart' id='barWebEchart'>
    
    <div id='chart9' class='barChart'>
			
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
  mounted() { // 在没有接口时使用，有接口时删除
    this.drawBarChart()
  },
  methods: {
    drawBarChart() {
      var chart9 = echart.init(document.getElementById('chart9'), 'macarons')
      chart9.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最大负荷', '最小负荷']
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
              type: ['line', 'bar']
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
          name: '%',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        series: [{
          name: '最大负荷',
          type: 'line',
          data: [4.09, 10.23, 14.32, 12.27, 18.41, 20.45, 61.35, 22.50, 18.41, 10.23, 12.27, 0.00],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '最小负荷',
          type: 'line',
          data: [0.16, 0.40, 0.56,	0.48,	0.71,	0.79, 2.38, 0.87, 0.71, 0.40, 0.48, 0.00],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }]
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
