<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/analysis/assess' }"><b>评估分析统计结果</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="assessLocal">
      <el-row >
        <!--<h3 class="header-label">评估分析统计结果</h3>
         <div>
          <el-tabs v-model="activeName">
            <el-tab-pane name="cgdy" style="height: 100%;">
              <span slot="label"><i class="el-icon-date"></i>常规电源统计</span>
            </el-tab-pane>
            <el-tab-pane name="xny" style="height: 100%;">
              <span slot="label"><i class="el-icon-date"></i>新能源统计</span>
            </el-tab-pane>           
          </el-tabs>
        </div> -->
        <compon-chart :currCompon="activeName"/>
      </el-row>
      
    </div>
  </div>
</template>
<script>
import componChart from './components/chart1.vue'

export default {
  components: { componChart },
  data() {
    return {
      activeName: 'cgdy'
    }
  }
}
</script>

<style src="../../../styles/public.css"></style>
<style scoped>
</style>
<style>
.assessLocal{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
</style>
