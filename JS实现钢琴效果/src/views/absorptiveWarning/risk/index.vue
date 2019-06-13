<template>
  <div id="content" style="height:100%">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳预警分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/absorptiveWarning/risk' }"><b>弃风弃光预警</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="riskAnaylsis" style="height:100%">

        <div class="" style="height:100%">
            <div class="clearfix nsd-row chartCenter" style="height:100%">
              <!-- <img class="img-block" src="@/assets/images/甘肃/111.png" style="width:1050px"> -->
              <arcgismap ref='arcgismap' legend='legendRisk' style="height:100%" type="gansu2"></arcgismap>
              <!-- <thermal-Chart :chart="echartData" ></thermal-Chart> -->
            </div>
         <el-select
            class="top-right-select" v-model="riskField" placeholder="请选择"  @change="queryModeChange" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>           
        </div>
    </div>
  </div>
</template>
<script>
import arcgismap from '../../map/index.vue'
export default {
  name: 'risk',
  components: { arcgismap },
  data() {
    return {
      riskField: 'wind',
      options: [{ value: 'wind', label: '弃风预警' }, { value: 'light', label: '弃光预警' }]
    }
  },
  mounted() {
    console.log(this.$refs.arcgismap)
  },
  methods: {
    queryModeChange(val) {
      this.$refs.arcgismap.setRenderToRiskLayer(val)
    }
  }
}

</script>
<style src="@/styles/public.css"></style>
<style scoped>
</style>
<style scoped>
.riskAnaylsis{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
  padding: 0px;
}
.top-right-select{
  position: absolute;
  top: 60px;
  right: 10px;
}
</style>
