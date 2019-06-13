<template>
 <div class='webEchart' id='barWebEchart'>
	 <el-select v-model="selectedOptions" placeholder="甘肃省" class="select" size="small">
	 	<el-option
	 	  v-for="item in options"
	 	  :key="item.value"
	 	  :label="item.label"
	 	  :value="item.value"
	 	   @change="handleChange">
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
			dataname1:[],
			dataname2:[],
			param:'',
			year:'',
			selectedOptions:'选项1',
			value: '',
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
	/*this.getdata()	*/
	},
   mounted(){
    this.getdata()
  },
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById('chart1'), 'macarons')
      var option={
       tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        
    },
     grid: [{
          top:70,
          bottom:50,
          left: 50,
          right: 50
        }],
    legend: {
        data:['小时','负荷率'],
         x: 'right',    
         y: '8px',
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '小时',
            min: 0,
            max: 24,
            interval: 6,
            axisLabel: {
                formatter: '{value} h'
            }
        },
        {
            type: 'value',
            name: '负荷率',
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'小时',
            type:'line',
            yAxisIndex: 0,
            data:[2.0, 4.9, 7.0, 2.2, 2.6, 7.7, 15.6, 3, 3.6, 2.0, 6.4, 3.3]
        },
       
        {
            name:'负荷率',
            type:'line',
            yAxisIndex: 1,
            data:[5.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
      };
			mychart.setOption(option)
			window.addEventListener("resize",function(){
				mychart.resize()
			})
    },
		getdata(){
			const role= {
				"param" :"LYXSSFHL",
				"year" :2018
			}
			var that = this
			axios.post("/queryEchartsByYear",role).then((res)=>{
				if(res.data!=null && res.data!="" ){
					that.dataname1=res.data[0]["利用小时数"]
					that.dataname2=res.data[1]["负荷率"]
				}
				this.drawBarChart()
			})
		}
  }
}

</script>
<style scoped>
.barChart{
  height: 500px;
}
.listTable{
  padding-left: 1%;
  padding-right: 1%;
}
#barWebEchart{
		position: relative;
	}
.select{
position: absolute;
width: 150px;
top: -40px;
right: 0px;
z-index: 99;
}
.buttonFanhui{
position: absolute;
right: 229px;
padding: 8px;
top: -39px;
}
.buttonFanhuione{
position: absolute;
right: 160px;
padding: 8px;
top: -39px;
}
</style>
