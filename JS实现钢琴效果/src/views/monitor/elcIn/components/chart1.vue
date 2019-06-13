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
    <div id='chart1' class='barChart'></div>
  </div>
</template>
<script>
	import axios from "axios"
import echart from 'echarts'
export default {
	data(){
		return {
			options: [ {
				  value: '1',
				  label: '1月'
				}, {
				  value: '2',
				  label: '2月'
				}, {
				  value: '3',
				  label: '3月'
				}, {
				  value: '4',
				  label: '4月'
				}, {
				  value: '5',
				  label: '5月'
				}, {
				  value: '6',
				  label: '6月'
				}, {
				  value: '7',
				  label: '7月'
				}, {
				  value: '8',
				  label: '8月'
				}, {
				  value: '9',
				  label: '9月'
				}, {
				  value: '10',
				  label: '10月'
				}, {
				  value: '11',
				  label: '11月'
				}, {
				  value: '12',
				  label: '12月'
				}],
				value:(new Date).getMonth()+1+''
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
      var mychart = echart.init(document.getElementById('chart1'), 'macarons')
      var option={
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['全社会用电量','累计全社会用电量']
        },
         
        calculable: true,
        yAxis: [{
          type: 'value',
          name: '万千瓦'
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
				series:  [{name: '全社会用电量',	type: 'bar',data: this.data1},
									{name: '累计全社会用电量',	type: 'bar',data: this.data2}]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			this.$get("/echarts?bj=FDSYDL&param="+this.value).then((res)=>{
				var name = []
				var data1 = []
				var data2 = []
				if(res.data!=null && res.data!=""){
					var data = res.data
						data.forEach(element => {
							$.each(element, function (key, value) {
								if(key == 'name'){
									name.push(value)								
								}
								if(key == '全社会用电量'){
									data1.push(value)								
								}
								if(key == '累计全社会用电量'){
									data2.push(value)								
								}
							});
						});
						this.name = name
						this.data1 = data1
						this.data2 = data2
				}
				this.drawBarChart()
			})
			
		},
		getval(){
				this.getdata()
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
