<template>
  <div class='webEchart' id='barWebEchart'>
		<h3>光伏</h3>
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
          data: ['集中式新能源电源', '分布式电源装机']
        },
        /* toolbox: {
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
        }, */
        /* yAxis: [{
          name: '亿千瓦时',
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
         
        }], */
        series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['60%', '40%'],
            data:[
                {value: 35, name:'集中式新能源电源'},
                {value: 65, name:'分布式电源装机'}
            ],
            /* itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            } */
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
