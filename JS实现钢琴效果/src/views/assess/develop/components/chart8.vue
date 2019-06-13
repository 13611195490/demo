<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">各省用电价格</h3>
    <div id='chart8' class='barChart'></div>
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
      var chart8 = echart.init(document.getElementById('chart8'), 'macarons')
      chart8.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['用电价格', '增速']
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
        yAxis: [{
          name: '亿千瓦时',
          type: 'value'
        }, {
          name: '%',
          type: 'value'
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: ['广东', '江苏', '山东', '浙江', '河北', '河南', '内蒙古', '四川', '辽宁', '福建', '新疆', '山西', '安徽', '湖北', '湖南', '云南', '上海', '陕西', '广西', '贵州', '江西', '甘肃', '北京', '重庆', '宁夏', '黑龙江', '天津', '吉林', '青海', '海南', '西藏']
        }],
        series: [{
          name: '用电价格',
          type: 'bar',
          stack: '装机',
          markPoint: {
            data: [{
              type: 'max',
              name: '最大值'
            }, {
              type: 'min',
              name: '最小值'
            }]
          },
          data: [348.83, 442.5, 538.61, 276.02, 177.23, 177.02, 132.83, 104.16, 107.39, 182.02, 207.1, 193.43, 131.09, 105.89, 85.86, 127.58, 91.73, 130.07, 82.69, 143.1, 9.39, 99.21, 46.62, 67.75, 91.39, 24.79, 42.27, 24.19, 49.5, 17.52, 8.97]
        }, {
          name: '增速',
          type: 'line',
          yAxisIndex: 1,
          areaStyle: {
            opacity: 0.2
          },
          markPoint: {
            data: [{
              type: 'max',
              name: '最大值'
            }, {
              type: 'min',
              name: '最小值'
            }]
          },
          data: [6.22, 8.25, 11.01, 7.05, 5.43, 5.92, 4.81, 4.96, 5.3, 9.43, 11.55, 10.76, 7.32, 6.01, 5.74, 9.05, 6.39, 9.53, 6.08, 11.52, 0.73, 9.31, 4.57, 7.33, 10.3, 2.74, 5.54, 3.56, 7.76, 6.1, 18.22]
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
