<template>
  <div class="projectSet">
    <h3 class="header-label">模型数据维护</h3>
		<div class="absorptiveLocal">
			<el-col :span="22" :offset="1" >
				<el-tabs v-model="activeName">
					<!-- <el-tab-pane name="first" :key="'first'">
						<span slot="label"><i class="nsd-icon-date"></i> 标签管理</span>
						<labelManage :currentTab="activeName" />
					</el-tab-pane> -->
					<el-tab-pane name="second" :key="'second'">
						<span style="color:white" slot="label"><i class="nsd-icon-date" ></i> 标签条目管理</span>
						<entryManage :currentTab="activeName" />
					</el-tab-pane>
				</el-tabs>
			</el-col>
		</div>
    
  </div>
</template>
<script>

import labelManage from './widget/labelManage'
import entryManage from './widget/entryManage'

export default {
  name: 'modelIndex',
  components: { labelManage, entryManage },
  data() {
    return {
       activeName: 'second',
    }
  },
  methods: {
		
  }
}

</script>
<style src="../../../styles/public.css"></style>
<style scoped>
	.absorptiveLocal{
	  background:#8fc0ed;
	  border-radius: 10px;
	  min-height: 100%;
	  
	}
</style>

