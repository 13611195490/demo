<template>
	<div class='webEchart' id='barWebEchart'>
 <el-select v-model="value" placeholder="请选择" class="select" @change="getval()">
 	<el-option
 	  v-for="item in options"
 	  :key="item.value"
 	  :label="item.label"
 	  :value="item.value">
 	</el-option>
   </el-select>
    
    <div id='chart9' class='barChart'>
	
  </div>
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
			options: [],
			value: '000015'
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
	this.queryDict()
},
  methods: {
		queryDict(){
				axios.get("/queryDict").then((res) => {
					if(res.data != null){
						this.options = res.data
					}
				})
			},
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart9'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.legendName
        },
         
        grid: [{
          left: 50,
          right: 50
        }],
        yAxis: [{
          name: '%',
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        series: this.series
      };
			mychart.setOption(option)
		window.addEventListener("resize",function(){
			mychart.resize()
		})
    },
		getdata(){
			this.$get("/echarts?bj=DXFH&param="+this.value).then((res)=>{
				if(res.data!=null && res.data!=""){
				 	 var series = []
					 var legendName = []
					 if (res.data != null && res.data != "") {
								var data = res.data
								data.forEach(element => {
									$.each(element, function (key, value) {
											var newData = {
												name: key,
												type: 'line',
												data: value,
												markPoint: {
													data: [{ type: 'max', name: '最大值' },{ type: 'min', name: '最小值' }]
												}
											}
											legendName.push(key)
											series.push(newData)
									});
								});
								this.series = series
								this.legendName = legendName
						  }
				}
				this.drawBarChart()
			})
		},
		getval(){
				this.getdata()
				// console.log(this.value)
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
#barWebEchart{
		position: relative;
	}
	.select{
		width: 150px;
		position: absolute;
		top: -10px;
		right: 50px;
		z-index: 99;
	}
</style>
