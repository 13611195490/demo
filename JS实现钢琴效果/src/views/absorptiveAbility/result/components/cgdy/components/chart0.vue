<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class='header-label'>常规电源总发电量</h3>
    <div id='chart0' class='barChart'></div>
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
      var chart0 = echart.init(document.getElementById('chart0'), 'macarons')
      chart0.setOption({
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
            name: '万千瓦'
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
            data: [
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
          }
        ],
        series: [
          {
            name: '总发电量',
            type: 'bar',
            stack: '总发电量',
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
            data: [
              597.47,
              83.42,
              361.76,
              542.49,
              425.52,
              475.49,
              108.18,
              98.78,
              105.87,
              419.14,
              94.21,
              293.55,
              190.49,
              221.21
            ]
          }
        ]
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
