<template>
  <div class='webEchart' id='barWebEchart'>
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
    chart() {
      this.drawBarChart()
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
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function(params) {
            var value = (params.value + '').split('.')
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
            return params.seriesName + '<br/>' + params.name + ': ' + value
          }
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 20,
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          },
          text: ['High', 'Low'], // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '光伏风电',
            type: 'map',
            mapType: 'china',
            itemStyle: {
              emphasis: { label: { show: true }}
            },
            textFixed: {
              Alaska: [20, -20]
            },
            data: [
              { name: '新疆', value: 14.88 },
              { name: '江西', value: 13.93 },
              { name: '云南', value: 13.47 },
              { name: '贵州', value: 12.59 },
              { name: '海南', value: 12.48 },
              { name: '四川', value: 12.09 },
              { name: '河南', value: 10.57 },
              { name: '湖北', value: 10.43 },
              { name: '上海', value: 10.33 },
              { name: '天津', value: 10.15 },
              { name: '河北', value: 9.78 },
              { name: '湖南', value: 9.23 },
              { name: '广西', value: 9.12 },
              { name: '宁夏', value: 8.55 },
              { name: '江苏', value: 8.09 },
              { name: '福建', value: 7.03 },
              { name: '黑龙江', value: 5.59 },
              { name: '浙江', value: 5.31 },
              { name: '安徽', value: 5.17 },
              { name: '北京', value: 5.05 },
              { name: '吉林', value: 3.84 },
              { name: '辽宁', value: 3.72 },
              { name: '甘肃', value: 2.5 },
              { name: '山东', value: 2.08 },
              { name: '西藏', value: 1.69 },
              { name: '山西', value: 1.29 },
              { name: '陕西', value: 1.11 },
              { name: '青海', value: 1.085 },
              { name: '广东', value: 1.04 },
              { name: '内蒙古', value: 0.79 },
              { name: '重庆', value: 0.4 }
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
  height: 600px;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
</style>
