<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">各省电源弃电率</h3>
    <div id='chart4' class='barChart'></div>
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
      var chart4 = echart.init(document.getElementById('chart4'), 'macarons')
      chart4.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['风电发电量', '弃电率']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: [
            '内蒙古',
            '青海',
            '新疆',
            '江苏',
            '河北',
            '宁夏',
            '甘肃',
            '山东',
            '安徽',
            '浙江',
            '山西',
            '陕西',
            '河南',
            '云南',
            '江西',
            '湖北',
            '广东',
            '四川',
            '吉林',
            '辽宁',
            '天津',
            '西藏',
            '黑龙江',
            '福建',
            '湖南',
            '贵州',
            '广西',
            '海南',
            '上海',
            '北京',
            '重庆'
          ]
        },
        yAxis: [
          {
            type: 'value',
            name: '万千瓦时'
          },
          {
            type: 'value',
            name: '%'
          }
        ],
        series: [
          {
            name: '风电发电量',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [
              113.84,
              113.19,
              102.71,
              80.68,
              77.41,
              75.55,
              73.42,
              72.78,
              61.93,
              56.33,
              55.5,
              52.12,
              44.36,
              33.28,
              29.65,
              28.21,
              20.18,
              16.38,
              13.14,
              11.59,
              6.24,
              6.12,
              5.73,
              5.66,
              5.61,
              4.24,
              3.99,
              3.34,
              2.58,
              2.03,
              0.25
            ]
          },
          {
            name: '弃电率',
            type: 'line',
            yAxisIndex: 1,
            areaStyle: {},
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [
              0,
              6.24,
              21.54,
              0,
              2.02,
              6.27,
              20.3,
              0.51,
              0,
              0,
              0.84,
              9.27,
              0,
              0.59,
              0,
              0,
              0,
              0,
              3.08,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
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
