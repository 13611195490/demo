<template>
  <div class='webEchart' id='barWebEchart'>
    <!-- <h3 class="header-label">装机结构和发电量结构</h3> -->
    <div id='chart0' class='barChart'></div>
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
			dataname4:[]
		}
	},
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
		this.getdata()
	
		
	},
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart0'), 'macarons')
			var option={
        tooltip: {
           trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          data: ['水电', '火电', '风电', '太阳能']
        },
        graphic:[{
         type:'text',
         left:'center',
         top:'45%',
         style:{
           text:'累计发电量'+'\n'+'[亿千瓦时]',
           textAlign:'center',
           fontSize:14,
         }
       }],
        series: [
					{
					  name: '装机',
					  type: 'pie',
					  radius: ['30%', '50%'],
					  avoidLabelOverlap: false,
					  label: {
					    normal: {
                position: 'inner'
					    }
					  },
					  labelLine: {
					    normal: {
					      show: true
					    }
					  },
					  data:this.data2
					},{
            name: '发电量',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                padding: [2, 2, 2, 2],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 10,
                    lineHeight: 15
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data:this.data1
          }
        ]
      };
			
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			var that=this
			this.$get("/echarts?bj=ZJHFD").then((res)=>{
        var datas1 = []
        var datas2 = []
				if(res.data!=null && res.data!=""){
					res.data.forEach(function(e){
              var data = {}
              var data1 = {}
              if(e.name == '风电'){
                 data = {name:'风电',value:e.value}
              }
              if(e.name == '火电'){
                 data = {name:'火电',value:e.value}
              }
              if(e.name == '水电'){
                 data = {name:'水电',value:e.value}
              }
              if(e.name == '太阳能'){
                 data = {name:'太阳能',value:e.value}
              }
               if(e.name == '风电发电量'){
                 data1 = {name:'风电',value:e.value}
              }
              if(e.name == '火电发电量'){
                 data1 = {name:'火电',value:e.value}
              }
              if(e.name == '水电发电量'){
                 data1 = {name:'水电',value:e.value}
              }
              if(e.name == '太阳能发电量'){
                 data1 = {name:'太阳能',value:e.value}
              }
              datas1.push(data)
              datas2.push(data1)
						})
            this.data1 = datas1
            this.data2 = datas2
				}
				
						that.drawBarChart()
			})
				
			
		}
  }
}
</script>
<style scoped>
.barChart {
  height: 400px;
	width: 100%;
}
.barChart canvas{
	width: 100%;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
</style>
