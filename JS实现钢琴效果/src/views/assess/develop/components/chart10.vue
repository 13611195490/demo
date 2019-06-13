<template>
  <div class='webEchart' id='barWebEchart'>
    
    <div id='chart10' class='barChart'>
			
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
      var chart10 = echart.init(document.getElementById('chart10'), 'macarons')
      chart10.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['日负荷', '风电', '光伏']
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
          name: '万千瓦',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['1时', '', '3时', '', '5时', '', '7时', '', '9时', '', '11时', '', '13时', '', '15时', '', '19时', '', '21时', '', '23时']
        }],
        series: [{
          name: '日负荷',
          type: 'line',
          data: [1000, 990, 991, 1010, 1030, 1040, 1060, 1075, 1080, 1090, 1105, 1095, 1110, 1060, 1100, 1190, 1210, 1170, 1130, 1100, 1080, 1050],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '风电',
          type: 'line',
          data: [500, 420, 500, 580, 570, 620, 625, 610, 620, 300, 420, 450, 510, 520, 670, 800, 800, 850, 860, 620, 520, 600, 500, 450],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '光伏',
          type: 'line',
          data: [0, 0, 0, 0, 0, 0, 0, 190, 390, 500, 540, 580, 540, 500, 420, 350, 75, 0, 0, 0, 0, 0, 0, 0],
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

