
<template>
  <div id="content" >
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳预警分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/absorptiveWarning/plan' }"><b>新能源规划分析</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>    
    <div class="xnyPlan" >           
      <el-row class="tableCard firstCard" >
         <el-col :span="24" class="">
           <div class="clearfix nsd-row chart"  >
              <h3 class="header-label">新能源规划分析</h3>        
            <el-tabs v-model="activeName" >
              <el-tab-pane name="site"  >
                <span slot="label"><i class="el-icon-date"></i>新能源规划站点分析</span>    
                <div class="ditu">此处是地图区域</div>
              </el-tab-pane>
                <el-tab-pane name="route" >
                <span slot="label"><i class="el-icon-date"></i>新能源规划线路分析</span>        
                <div class="ditu">此处是地图区域</div>   
              </el-tab-pane>
            </el-tabs> 
            <compon-table-map :currCompon="activeName"/> 
           </div>
        </el-col>          
      </el-row>
    </div>
  </div> 
</template>
<script>
import componTableMap from './components/tablemap.vue'
export default {
  components: { componTableMap },
  data() {
    return {
      activeName: 'site'
    }
  }
}
</script>
<style src="@/styles/public.css"></style>
<style scoped>
.xnyPlan{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.el-tabs__content{
    height: 100%
}
.ditu{
  height: 600px;
  width: 100%;
  background: red;
  margin-bottom:20px;
}
</style>
