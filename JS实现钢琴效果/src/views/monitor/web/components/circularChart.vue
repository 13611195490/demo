<template>
  <div class="webEchart" id="circularWebEchart">
    <div id="circularChart" class="circularChart"></div>
  </div>
</template>
<script>
import echart from 'echarts'
// 引入热力图组件
// require('echarts/lib/chart/bar')
// 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
/* import bar from 'echarts/lib/chart/bar'
import tooltip from 'echarts/lib/component/tooltip'
import title from 'echarts/lib/component/title' */
export default {
  props: {
    chart: Object
  },
  watch: {
    chart: {
      handler(a, b) {
        if (a) {
          this.drawCircularChart()
        }
      },
      deep: true
    }
  },
  methods: {
    drawCircularChart() {
      console.log('chart', this.chart)
      var circularChart = echart.init(document.getElementById('circularChart'), 'macarons')
      circularChart.setOption({
        title: {
          text: '发电装机（万千瓦）/发电量（亿千瓦时）',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['水电', '风电', '火电', '太阳能']
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [{
          name: '发电装机（万千瓦）',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['25%', 200],
          itemStyle: {
            normal: {
              label: {
                show: true
              },
              labelLine: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            }
          },
          data: this.chart.circularInstall
        },
        {
          name: '发电量（亿千瓦时）',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['75%', 200],
          itemStyle: {
            normal: {
              label: {
                show: true
              },
              labelLine: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            }
          },
          data: this.chart.circularElc
        }]
      })
    }
  }
}
</script>
<style scoped>
.circularChart{
  height: 350px;
  margin: 30px 30px 30px 30px;
}
</style>
