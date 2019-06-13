<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">风电月度新增装机</h3>
    <div id='chart3' class='barChart'></div>
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
      var chart3 = echart.init(document.getElementById('chart3'), 'macarons')
      chart3.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2018年月度新增装机']
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
        yAxis: [{
          type: 'value',
          name: '万'
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: ['山东', '新疆', '江苏', '安徽', '河北', '浙江', '青海', '甘肃', '内蒙古', '河南', '宁夏', '山西', '陕西', '江西',
            '湖北', '广东', '云南', '辽宁', '湖南', '吉林', '贵州', '四川', '黑龙江', '福建', '西藏', '广西', '天津', '上海',
            '海南', '北京', '重庆']
        }],
        series: [{
          name: '2018年月度新增装机',
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
          data: [597.47, 83.42, 361.76, 542.49, 425.52, 475.49, 108.18, 98.78, 105.87, 419.14, 94.21,
            293.55, 190.49, 221.21, 226.35, 175.6627617, 24.7882, 170.56, 146.15, 103.14,
            110.87134, 38.77, 77.53, 64.95, 46.5, 56.513606, 8.34, 22.52, 2.628, 0.5, 12.07]
        }]
      })
    }
  }
}

</script>
<style scoped>
.barChart{
  height: 400px;
}
.listTable{
  padding-left: 1%;
  padding-right: 1%;
}
</style>
