<template>
    <div id='componChartFirstsub' class='barChart'>
   </div>
</template>
<script>
import axios from "axios"
import echart from 'echarts'
export default {
  data(){
    return {
      dataname1:[],
      dataname2:[],
      param:'',
      year:'',
      value: '',
      options: [], 
    }
  },
  props: {
    chart: Object
  },
  watch: {
    chart: {
      handler(a, b) {
        if (a) {
          this.drawBarCharts()
        }
      },
      deep: true
    }
  },
  created(){
    this.getdata()
  },
  methods: {
    drawBarCharts() {
      var mychart = echart.init(document.getElementById('componChartFirstsub'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['分时段发电量'],
           x: 'right',    
           y: '8px',
        },
        
        grid: [{
          top:70,
          bottom:100,
          left: 50,
          right: 0
        }],
        yAxis: [{
          name: '亿千瓦时',
          type: 'value',
            min: 0,
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: true,
        
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
          },
          data: this.dataname1
        }],
        series: [{
          name: '分时段发电量',
          type: 'line',
          data: this.dataname2
        }]
      };
       mychart.setOption(option)
        window.addEventListener("resize",function(){
        mychart.resize()
         
      })
    },
    getdata(){
      const role= {
        "param" :"FDL",
        "year" :2019
      }
      var that = this
      axios.post("/queryEchartsByYear",role).then((res)=>{
        console.log(res.data)
        if(res.data!=null && res.data!="" ){
            res.data.forEach(function(e){
            that.dataname1.push(e.name)
            that.dataname2.push(e.发电量)
          })
        }
        this.drawBarCharts()
      })
    }
  }
}
</script>
<style scoped>

</style>
