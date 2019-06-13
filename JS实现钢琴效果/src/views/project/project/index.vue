<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 新能源项目管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/project/project' }"><b>项目管理</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="projectProject">
      <el-row class="chart">
        <h3 class="header-label">项目数据维护</h3>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane name="xny">
              <span slot="label"><i class="el-icon-date"></i>集中式风电项目</span>
              <table1 :currentTab="activeName" />
            </el-tab-pane>
            <el-tab-pane name="gf">
              <span slot="label"><i class="el-icon-date"></i>集中式光伏项目</span>
              <table2 :currentTab="activeName" />
            </el-tab-pane>
            <el-tab-pane name="gffp">
              <span slot="label"><i class="el-icon-date"></i>光伏扶贫项目</span>
              <table3 :currentTab="activeName" />
            </el-tab-pane>
            <!-- <el-tab-pane name="fd">
              <span slot="label"><i class="el-icon-date"></i>分散式风电项目</span>
            </el-tab-pane> -->
          </el-tabs>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>

import table1 from './components/table'
import table2 from './components/table1'
import table3 from './components/table2'
//import entryManage from './widget/entryManage'

export default {
  name: 'projectProject',
  components: {
    table1,
    table2,
    table3
  },
  data() {
    return {
      activeName: 'xny',
    }
  },
  methods: {

  }
}
</script>
<style src="../../../styles/public.css"></style>

<style>
.projectProject{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
  padding: 20px;
}
</style>
