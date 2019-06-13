<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart3' class='barChart'>
	    <h3 class="h3-style">各聚合电网间受阻断面统计</h3>
	    <el-table :data="tableData" border style="width: 100%;" height='470'>
		    <el-table-column prop="sqoneone" align="center" label="分区一" width="80"></el-table-column>
		    <el-table-column prop="sqonetwo" align="center" label="分区二"></el-table-column>
		    <el-table-column prop="itemone" align="center" label="传输总电量（万千瓦时）" width="120"></el-table-column>
		    <el-table-column prop="itemtwo" align="center" label="正向输电量（万千瓦时）" width="120"></el-table-column>
		    <el-table-column prop="itemthree" align="center" label="反向输电量（万千瓦时）" width="120"></el-table-column>
	  </el-table>
	</div>
  </div>
</template>
<script>
import axios from "axios"
import echart from 'echarts'
export default {
 data(){
	 return {
		  tableData: [{
          sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000',
        }, {
          sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
          sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }, {
           sqoneone: '兰州',
          sqonetwo: '青海',
          itemone: '1000',
          itemtwo: '2000',
          itemthree: '3000'
        }]
	 }
 },
  mounted() { // 在没有接口时使用，有接口时删除
    this.$nextTick(function(){
    	 this.drawBarChart()
    })
  },
  methods: {
    drawBarChart() {
			/* axios.get("../../../../../static/asseschart7.json").then((res)=>{
				console.log(res.data)
				this.list=res.data.data
			}) */
			
    }
  }
}
</script>
<style scoped>
.h3-style{
    text-align: center;
    font-size: 18px;
    margin-bottom:10px; 
}
</style>
