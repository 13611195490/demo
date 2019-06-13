<template>
<div id="content">
  <div class="rate clearfix">
  </div>
  <div class="sysAudit">
    <el-row class="tableCard firstCard">
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">统计系统日志和业务日志</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart0></chart0>
					</div>
        </div>
      </el-col>
      <el-col :span="12" class="rootCard">
        <div class="clearfix nsd-row chart">
          <h3 class="header-label">统计信息，警告，异常日志</h3>
          <div class='webEchart ' id='barWebEchart' style="height:450px;width:100%;">
						<chart1></chart1>
					</div>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
import axios from "axios"
import chart0 from './components/chart0'
import chart1 from './components/chart1'

export default {
  name: 'sysAudit',
  components: { chart0, chart1 },
  data() {
    return {

    }
  },
  created() {
    
		
  },
  methods: {
    
  }
}
</script>
<style src="../../../../styles/public.css"></style>
<style scoped>
.sysAudit{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
</style>