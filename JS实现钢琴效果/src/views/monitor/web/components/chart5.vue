<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">各省新能源电站座数</h3>
    <div id='chart5' class='barChart'></div>
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
      var chart5 = echart.init(document.getElementById('chart5'), 'macarons')
      chart5.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['风电站', '太阳能电站']
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
          name: '座',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          boundaryGap: false,
          data: ['上海市', '云南省', '内蒙古自治区', '北京市', '吉林省', '四川省', '天津市', '宁夏回族自治区', '安徽省', '山东省', '山西省', '广东省', '广西壮族自治区', '新疆维吾尔自治区', '江苏省', '江西省', '河北省', '河南省', '浙江省', '海南省', '湖北省', '湖南省', '甘肃省', '福建省', '西藏自治区', '贵州省', '辽宁省', '重庆市', '陕西省', '青海省', '黑龙江省']
        }],
        series: [{
          name: '风电站',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: [12, 112,	367, 1,	69,	21,	9, 154,	34,	153, 110,	40,	12,	222, 51,	19,	125, 24,	28,	4, 36,	54,	102, 43, 3, 61,	103, 5,	43,	15,	115],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        }, {
          name: '太阳能电站',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: [186,	59,	162, 47,	62,	50,	20,	146, 605, 467, 187, 147,	15,	237,	704, 462,	220, 91, 1505, 9, 383, 39, 207, 63, 20,	2,	35,	5, 59, 183,	44],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
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
