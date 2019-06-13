<template>
    <div id='componChartSecond' class='barChart'>
      
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
      dataname3:[],
      param:'',
      year:'',
      param:'',
      year:'',
      options: [],
        value: ''
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
     drawBarChart() {
      var mychart = echart.init(document.getElementById('componChartSecond'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['弃风', '弃光'],
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
          name: '弃风',
          type: 'bar',
          data: this.dataname2
        },{
          name: '弃光',
          type: 'bar',
          data:this.dataname3
        }]
      };
      
       mychart.setOption(option)
        
      window.addEventListener("resize",function(){
        mychart.resize()
         
      })
    },
    getdata(){
      const role= {
        "param" :"QFQGSL",
        "year" :2019
      }
      var that = this
      axios.post("/queryEchartsByYear",role).then((res)=>{
        // console.log(res.data)
        if(res.data!=null && res.data!="" ){
          res.data.forEach(function(e){
            that.dataname1.push(e.name)
            that.dataname2.push(e.弃风量)
            that.dataname3.push(e.弃光量)
          })
        }   
        this.drawBarChart()
      })
    }
  }
}
</script>
<style scoped>

</style>
