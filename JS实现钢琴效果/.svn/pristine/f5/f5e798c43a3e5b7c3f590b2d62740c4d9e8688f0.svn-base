<template>
  <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">传输功率时间序列</h3>
    <div id='chart0' class='barChart'></div>
        <el-select class="querySelect" v-model="selected" placeholder="请选择"  @change="drawBarChart">
        <el-option 
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
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
  data(){
    return{
        options:[] ,selected:1       
    }
  },
  mounted() { // 在没有接口时使用，有接口时删除
    this.drawBarChart()
    for (let index = 1; index < 6; index++) {
      this.options.push({label:"联络线"+index,value:index});    
    }
  },
  methods: {
    drawBarChart() {

      //模拟数据
      var xAxisData=[],ySeriesData=[]
      for (let index = 1; index <= 8760; index++) {
        xAxisData.push(index)
        ySeriesData.push((Math.random()*620).toFixed(0))
      }
      var chart0 = echart.init(document.getElementById('chart0'), 'macarons')
      chart0.setOption({
        tooltip: {
          trigger: 'axis'
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
        yAxis: [
          {
            type: 'value',
            name: '万千瓦'
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: xAxisData
          }
        ],
        series: [
          {
            name: '传输功率',
            type: 'line',
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
            data: ySeriesData
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
.querySelect{
    position: absolute;
    right: 50px;
    top: 10px;
}
</style>
