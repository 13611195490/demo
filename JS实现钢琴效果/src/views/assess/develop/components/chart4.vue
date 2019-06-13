<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">各省最小负荷</h3>
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
  mounted() { // 在没有接口时使用，有接口时删除
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
          data: ['最小负荷']
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
          boundaryGap: [0, 0.01]
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: ['新疆', '江西', '云南', '贵州', '海南', '四川', '河南', '湖北', '上海', '天津', '河北', '湖南', '广西', '宁夏', '江苏', '福建', '黑龙江', '浙江', '安徽', '北京', '吉林', '辽宁', '甘肃', '山东', '西藏', '山西', '陕西', '青海', '广东', '内蒙古', '重庆']
        }],
        series: [{
          name: '最小负荷',
          type: 'line',
          data: [14.88, 13.93, 13.47, 12.59, 12.48, 12.09, 10.57, 10.43, 10.33, 10.15, 9.78, 9.23, 9.12, 8.55, 8.09, 7.03, 5.59, 5.31, 5.17, 5.05, 3.84, 3.72, 2.5, 2.08, 1.69, 1.29, 1.11, 1.08, 1.04, 0.79, 0.4]
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
