<template>
  <div class='webEchart' id='barWebEchart'>
    <el-select v-model="value" placeholder="甘肃省" class="select">
    	<el-option
    	  v-for="item in options"
    	  :key="item.value"
    	  :label="item.label"
    	  :value="item.value">
    	</el-option>
      </el-select>
    <div id='chart4' class='barChart'>
			
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
			param:'',
			year:'',
				options: [{
					  value: '选项1',
					  label: '甘肃省'
					}, {
					  value: '选项2',
					  label: '白银市'
					}, {
					  value: '选项3',
					  label: '天水市'
					}, {
					  value: '选项4',
					  label: '张掖市'
					}, {
					  value: '选项5',
					  label: '武威市'
					}, {
					  value: '选项6',
					  label: '陇南市'
					}, {
					  value: '选项7',
					  label: '金昌市'
					}, {
					  value: '选项8',
					  label: '甘南藏族'
					}, {
					  value: '选项9',
					  label: '平凉市'
					}, {
					  value: '选项10',
					  label: '庆阳市'
					}, {
					  value: '选项11',
					  label: '定西市'
					}, {
					  value: '选项12',
					  label: '嘉酒市'
					}, {
					  value: '选项13',
					  label: '兰州市'
					}, {
					  value: '选项14',
					  label: '临夏回族'
					}, {
					  value: '选项15',
					  label: '酒泉市'
					}],
					value: '选项1'
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
	/*this.getdata()*/
		
	},
	 mounted(){
    this.getdata()
  },
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart4'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['常规能源总出力'],
           x: 'right',    
           y: '8px'
        },
        grid: [{
          top:70,
          bottom:50,
          left: 50,
          right: 20
        }],
        yAxis: [{
          name: '万千瓦',
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
        series: [{
          name: '常规能源总出力',
          type: 'line',
          data: this.dataname1,
          markPoint: {
           
          }
        }]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			const role= {
				"param" :"CGNYZCL",
				"year" :2019
			}
			var that = this
			axios.post("/queryEchartsByYear",role).then((res)=>{
				// console.log(res.data)
				if(res.data!=null && res.data!=""){
					that.dataname1=res.data[0]["常规能源总出力"]
				}
				
				this.drawBarChart()
			})
		}
  }
}
</script>
<style scoped>
.barChart {
  height: 500px;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
#barWebEchart{
	position: relative;
	}
	.select{
  position: absolute;
  width: 150px;
  right: 0px;
  top:-40px;
	}
</style>
