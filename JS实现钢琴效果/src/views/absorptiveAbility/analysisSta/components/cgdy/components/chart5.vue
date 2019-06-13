<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class='header-label'>常规电源总运行容量时间序列</h3>
    <div id='chart5' class='barChart'></div>
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
        '嘉峪关市',
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
        '临夏回族自治州',
        '甘南藏族自治州'
      ]
      var legendSelected = {}
      var xAxisData = []
      var seriesData = []
      for (let index = 1; index <= 12; index++) {
        xAxisData.push(index + '月')
      }

      data.forEach(e => {
        var series = {
          name: e,
          type: 'line',
          stack: '总量',
          data: [],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }
        for (let index = 1; index <= 12; index++) {
          series.data.push((Math.random() * 4500).toFixed(0))
        }
        seriesData.push(series)
        legendSelected[e] = false
      })
      legendSelected['全省'] = true

      var chart = echart.init(document.getElementById('chart5'), 'macarons')
      chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: data,
          selected: legendSelected,
          type: 'scroll',
          left: 20,
          right: 20,
          bottom: 1
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
            name: '万千瓦'
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: xAxisData
          }
        ],
        series: seriesData
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
