<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">全国日典型负荷曲线</h3>
    <div id='chart6' class='barChart'></div>
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
      var chart6 = echart.init(document.getElementById('chart6'), 'macarons')
      chart6.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2018年6全国日运行负荷曲线', '2018年5全国日运行负荷曲线']
        },
        toolbox: {
          show: false,
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
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        }],
        series: [{
          name: '2018年6全国日运行负荷曲线',
          type: 'line',
          data: [0.8, 0.9, 0.7, 0.6, 0.55, 0.55, 0.45, 0.42, 0.52, 0.53, 0.54, 0.51, 0.4, 0.42, 0.44, 0.38, 0.42, 0.42, 0.45, 0.55, 0.67, 0.78, 0.8, 0.77],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '2018年5全国日运行负荷曲线',
          type: 'line',
          data: [0.77, 0.5, 0.45,	0.55,	0.65,	0.7, 0.63, 0.49, 0.48],
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
