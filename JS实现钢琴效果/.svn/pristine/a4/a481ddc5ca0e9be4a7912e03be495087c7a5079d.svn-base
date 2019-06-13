<template>
  <div class='webEchart' id='barWebEchart'>
    <div id='chart0' class='barChart'>
			<div class="box">
				<div>
					<div class="header">
						<h3>火电灵活性改造项目数</h3>
					</div>
					<p><span>{{this.bean.data1}}</span>个</p>
				</div>
				<div>
					<div class="header">
						<h3>改造总容量</h3>
					</div>
					<p><span>{{this.bean.data3}}</span>万千瓦</p>
				</div>
				<div>
					<div class="header">
						<h3>提升调节能力</h3>
					</div>
					<p><span>{{this.bean.data4}}</span>万千瓦</p>
				</div>
				<div>
					<div class="header">
						<h3>总体改造进度</h3>
					</div>
					<p><span>{{this.bean.data2}}</span>%</p>
				</div>
			</div>
			
		</div>
  </div>
</template>
<script>
import echart from 'echarts'
import axios from "axios"
export default {
  data(){
	  return{
		  bean:{
			  data1:0,
			  data2:0,
			  data3:0,
			  data4:0,
		  }
	  }
  },
  mounted() { // 在没有接口时使用，有接口时删除
	this.drawBarChart()
  },
  methods: {
    drawBarChart() {
       this.$get("/echarts?bj=HDLHXGZQK").then((res) => {
		   this.bean.data1 = res.data[0].火电灵活性改造项目数
		   this.bean.data2 = res.data[0].总体改造进度
		   this.bean.data3 = res.data[0].改造总容量
		   this.bean.data4 = res.data[0].提升调节能力
	   })
    }
  }
}

</script>
<style scoped>
	#chart0{
		width: 100%;
		height: 450px;
	}
	#chart0 .box{
		width: 100%;
		height: 100%;
		margin-left: 10px;
	}
	#chart0 .box div{
		width: 50%;
		height: 50%;
		float: left;
		position: relative;
	}
	#chart0 .box div:nth-child(1){
		border-bottom: 1px dotted #98BBE1;
		border-right: 1px dotted #98BBE1;
	}
	#chart0 .box div:nth-child(2){
		border-bottom: 1px dotted #98BBE1;
		border-left: 1px dotted #98BBE1;
	}
	#chart0 .box div:nth-child(3){
		border-top: 1px dotted #98BBE1;
		border-right: 1px dotted #98BBE1;
	}
	#chart0 .box div:nth-child(4){
		border-top: 1px dotted #98BBE1;
		border-left: 1px dotted #98BBE1;
	}
	#chart0 .box div .header{
		width: 80%;
		height: 20%;
		border-radius: 5px;
		background: rgba(108,169,226);
		color: white;
		margin-left: 10%;
		margin-top: 10%;
	}
	#chart0 .box div .header h3{
		text-align: center;
		line-height: 45px;
		font-size: 20px;
	}
	#chart0 .box div p{
		position: absolute;
		top: 50%;
		left: 40%;
	
	}
	#chart0 .box div p span{
		font-size: 35px;
		margin: 10px;
	}
	
</style>
