<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/analysis/sectionblock' }"><b>受阻断面统计</b></el-breadcrumb-item>
      </el-breadcrumb> 
    </div>
    <div class="sectionBlockSta">
      <el-row class="tableCard firstCard">
        <el-col :span="24" class="rootCard">
          <div class="clearfix nsd-row chart">
              <table0 ></table0>     
          </div>
        </el-col>
      </el-row>    
      <el-row class="tableCard">
        <el-col :span="24" class="rootCard">
          <div class="clearfix nsd-row chart">
            <chart0 :chart="echartData"></chart0>        
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import chart0 from './components/chart0.vue'
import table0 from './components/table0.vue'
export default {
  name: 'sectionBlockSta',
  components: { chart0,table0},
  data() {
    return {
      saveChart0Data: {},
      echartData: {
        chart0: {}
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
        
    }
  }
}
</script>
<style src="@/styles/public.css"></style>
<style scoped>
.sectionBlockSta{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
</style>

