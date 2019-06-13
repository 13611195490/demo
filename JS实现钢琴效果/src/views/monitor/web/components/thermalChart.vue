<template>
  <div class="webEchart" id="thermalWebEchart">
    <div id="thermalChart" class="thermalChart"></div>
  </div>
</template>
<script>
import echart from 'echarts'
// 引入热力图组件
// require('echarts/lib/chart/bar')
// 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// import bar from 'echarts/lib/chart/bar'
// import tooltip from 'echarts/lib/component/tooltip'
// import title from 'echarts/lib/component/title'
export default {
  props: {
    chart: Object
  },
  watch: {
    chart: {
      handler(a, b) {
        if (a) {
          this.drawThermalChartChart()
        }
      },
      deep: true
    }
  },
  methods: {
    drawThermalChartChart() {
      var thermalChart = echart.init(document.getElementById('thermalChart'), 'macarons')
      thermalChart.setOption({
        title: {
          text: '各省电源并网装机',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        // toolbox: {
        //   show: true,
        //   x: 'center',
        //   orient: 'vertical',
        //   y: 'bottom',
        //   feature: {
        //     saveAsImage: { show: true }
        //   }
        // },
        legend: {
          selectedMode: false,
          data: []
        },
        dataRange: {
          orient: 'horizontal',
          min: 0,
          max: 55000,
          text: ['高', '低'],
          splitNumber: 0,
          x: 'center'
        },
        series: [{
          name: '各省电源并网装机量',
          type: 'map',
          mapType: 'china',
          selectedMode: 'multiple',
          itemStyle: {
            normal: { label: { show: true }},
            emphasis: { label: { show: true }}
          },
          data: this.chart.thermal
          // data: [
          //   { name: '西藏', value: 605.83 }
          // ]
        }],
        animation: false
      })
    }
  }
}
</script>
<style scoped>
.thermalChart{
  height: 600px;
  margin: 30px 30px 30px 30px;
}
</style>
