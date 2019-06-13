<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart2' class='barChart'></div>
  </div>
</template>
<script>
import axios from "axios"
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
  created(){
		this.initData()
	},
  methods: {
    initData(){
	    this.$get("/echarts?bj=TDSSXNYDLZB").then((res)=>{
        var data = res.data
        var name = []
        var data1 = []
        var data2 = []
        var data3 = []
        if(data != null && data != ''){
          data.forEach(element => {
            name.push(element.PASSAGEWAY_NAME)
            data1.push(element.其他输电量)
            data2.push(element.新能源输电量)
            data3.push(element.新能源输电量占比)
          });
          this.name = name
          this.data1 = data1
          this.data2 = data2
          this.data3 = data3
        }
        this.drawBarChart()
      })
    },
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart2'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['其他输电量', '新能源输电量' ]
        },
        calculable: true,
        yAxis: [{
          type: 'value',
          name: '亿千瓦时',
					min:0
        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: this.name
        }],
        series: [{
          name: '其他输电量',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.data1
        }, {
          name: '新能源输电量',
          type: 'bar',
          areaStyle: {},
          stack: '电站',
          data: this.data2
        },
        { 
        name: '新能源输电量占比', 
        type: 'bar', 
        stack: '电站', 
        label: { 
          normal: { 
            show: true, 
            position: 'insideBottom', 
            formatter:'{c}%', 
            textStyle:{ color:'#000' } 
          }
        }, 
        itemStyle:{ 
        normal:{ 
        color:'rgba(128, 128, 128, 0)' 
        } 
        }, 
        data:this.data3
        }]
      };
			mychart.setOption(option)
      window.addEventListener("resize",function(){
        mychart.resize()
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
