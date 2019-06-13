<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">各省最高/最低同时率</h3>
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
  mounted() {
    // 在没有接口时使用，有接口时删除
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
          data: ['最高同时率', '最低同时率']
        },
        toolbox: {
          show: false,
          feature: {}
        },
        calculable: true,
        yAxis: [
          {
            type: 'value',
            name: '万千瓦'
          },
          {
            type: 'value',
            name: '%'
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              formatter: function(value) {
                return value.split('').join('\n')
              }
            },
            data: [
              '山东',
              '新疆',
              '江苏',
              '安徽',
              '河北',
              '浙江',
              '青海',
              '甘肃',
              '内蒙古',
              '河南',
              '宁夏',
              '山西',
              '陕西',
              '江西',
              '湖北',
              '广东',
              '云南',
              '辽宁',
              '湖南',
              '吉林',
              '贵州',
              '四川',
              '黑龙江',
              '福建',
              '西藏',
              '广西',
              '天津',
              '上海',
              '海南',
              '北京',
              '重庆'
            ]
          }
        ],
        series: [
          {
            name: '最高同时率',
            type: 'line',
            yAxisIndex: 1,
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
              942.38,
              1203.2,
              1047.39,
              922.22,
              1218.37,
              936.66,
              1514.21,
              1115.32,
              3179.87,
              811.66,
              1326.94,
              1370.62,
              1219.45,
              819.13,
              922.45,
              621.38,
              1344.59,
              1066.89,
              553.18,
              1066.54,
              1070.77,
              1454.76,
              1125.84,
              707.73,
              894,
              959.62,
              954.87,
              556.74,
              1087.22,
              974.95,
              385.51
            ]
          },
          {
            name: '最低同时率',
            type: 'line',
            yAxisIndex: 1,
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
              94.38,
              120.2,
              104.39,
              92.22,
              121.37,
              93.66,
              151.21,
              111.32,
              317.87,
              81.66,
              132.94,
              137.62,
              121.45,
              81.13,
              92.45,
              62.38,
              134.59,
              106.89,
              55.18,
              106.54,
              107.77,
              145.76,
              112.84,
              70.73,
              89,
              95.62,
              95.87,
              55.74,
              108.22,
              97.95,
              38.51
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
