<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">全国新能源日运行曲线</h3>
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
      var chart0 = echart.init(document.getElementById('chart0'), 'macarons')
      chart0.setOption({
        tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['降水量','折线']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '水量/ml',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    series: [
                         
                        {
                            name:'降水量',
                            type:'bar',
                            /*itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#fe6262'},
                                            {offset: 0.5, color: '#fe4141'},
                                            {offset: 1, color: '#fe1818'}
                                        ]
                                    ),
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#fe6262'},
                                            {offset: 0.5, color: '#fe4141'},
                                            {offset: 1, color: '#fe1818'}
                                        ]
                                    )
                                }
                            },*/
                            
                            /*设置柱状图颜色*/
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                          '#fe4f4f','#fead33','#feca2b','#fef728','#c5ee4a',
                                           '#87ee4a','#46eda9','#47e4ed','#4bbbee','#7646d8',
                                           '#924ae2','#C6E579','#F4E001','#F0805A','#26C0C0'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    /*信息显示方式*/
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '{b}\n{c}'
                                    }
                                }
                            },
                            data:[50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45]
                        },
                        {
                            name:'折线',
                            type:'line',
                            itemStyle : {  /*设置折线颜色*/
                                normal : {
                                   /* color:'#c4cddc'*/
                                }
                            },
                            data:[50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45]
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
</style>
