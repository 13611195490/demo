<template>
  <div class="webEchart" id="barWebEchart">
    <el-col :span="12" class="listTable">
      <div id="barChart1" class="barChart"></div>
    </el-col>
    <el-col :span="12" class="listTable">
      <div id="barChart2" class="barChart"></div>
    </el-col>
    <el-col :span="12" class="listTable">
      <div id="barChart3" class="barChart"></div>
    </el-col>
    <el-col :span="12" class="listTable">
      <div id="barChart4" class="barChart"></div>
    </el-col>
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
          this.drawBarChart()
        }
      },
      deep: true
    }
  },
  methods: {
    drawBarChart() {
      var barChart1 = echart.init(document.getElementById('barChart1'), 'macarons')
      var barChart2 = echart.init(document.getElementById('barChart2'), 'macarons')
      var barChart3 = echart.init(document.getElementById('barChart3'), 'macarons')
      var barChart4 = echart.init(document.getElementById('barChart4'), 'macarons')
      barChart1.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chart.nameNow,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: ''
            }
          },
          itemStyle: {
            normal: { color: '#00A1FF' }
          },
          data: this.chart.installNow
        }]
      })
      barChart2.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chart.nameNow,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: ''
            }
          },
          itemStyle: {
            normal: { color: '#00A1FF' }
          },
          data: this.chart.installNow
        }]
      })
      barChart3.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chart.nameNow,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: ''
            }
          },
          itemStyle: {
            normal: { color: '#00A1FF' }
          },
          data: this.chart.installNow
        }]
      })
      barChart4.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chart.nameNow,
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: ''
            }
          },
          itemStyle: {
            normal: { color: '#00A1FF' }
          },
          data: this.chart.installNow
        }]
      })
    }
  }
}
</script>
<style scoped>
.barChart{
  height: 350px;
}
.listTable{
  padding-left: 1%;
  padding-right: 1%;
}
</style>
