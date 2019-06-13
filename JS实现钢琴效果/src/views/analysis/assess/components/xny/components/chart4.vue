<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class='header-label'>新能源全年弃风/光率（量）</h3>
    <div id='xny_chart4' class='barChart'></div>
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
  mounted() {
    // 在没有接口时使用，有接口时删除
    this.drawBarChart()
  },
  methods: {
    drawBarChart() {
      // 模拟数据
      var data = [
        '全省',
        '兰州市',
        '嘉峪关,市',
        '金昌市',
        '白银市',
        '天水市',
        '武威市',
        '张掖市',
        '平凉市',
        '酒泉市',
        '庆阳市',
        '定西市',
        '陇南市',
        '临夏回,族自治,州',
        '甘南藏,族自治,州'
      ]
      var series = {
        name: '弃风/光量',
        type: 'bar',
        yAxisIndex: 0,
        data: [],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      }
      var series1 = {
        name: '弃风/光率',
        type: 'line',
        yAxisIndex: 1,
        lineStyle: { color: '#859' },
        data: [],
        markPoint: {
          itemStyle: { color: '#859' },
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        }
      }
      var seriesData = []
      for (let index = 0; index < data.length; index++) {
        series.data.push((Math.random() * 2010).toFixed(0)) // 弃风/光量
        series1.data.push((Math.random() * 100).toFixed(2)) // 弃风/光率
      }
      seriesData.push(series, series1)

      var chart = echart.init(
        document.getElementById('xny_chart4'),
        'macarons'
      )
      chart.setOption({
        tooltip: {
          trigger: 'axis'
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
        calculable: true,
        yAxis: [
          {
            type: 'value',
            name: '弃风/光量（万千瓦）',
            min: 0,
            interval: 500
          },
          {
            type: 'value',
            name: '弃风/光率（%）',
            min: 0,
            max: 100,
            interval: 10
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              formatter: function(value) {
                return value.split(',').join('\n')
              }
            },
            data: data
          }
        ],
        series: seriesData
      })
      chart.resize()
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
