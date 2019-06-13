<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="hidenPopup">
    <el-row>
      <el-col :span="24">
        <el-steps :active="active" finish-status="success" direction="vertical">
          <el-step title="数据准备" description="正在准备计算数据" icon="el-icon-edit" ></el-step>
          <el-col :span="22" :offset="2">
            <el-progress :text-inside="false" :stroke-width="18" :percentage="percentage1" v-show="visible1[0]"></el-progress>
            <div class="pText" v-show="visible1[0]"><i class="header-icon el-icon-info"></i>正在抽取地区数据...</div>
            <!-- <div class="pText" v-show="visible1[1]">正在抽取华北地区数据……</div>
            <div class="pText" v-show="visible1[2]">正在抽取东南地区数据……</div>
            <div class="pText" v-show="visible1[3]">正在抽取广西地区数据……</div>
            <div class="pText" v-show="visible1[4]">抽取地区数据完成!!</div> -->
            <div class="pText" v-show="visible1[5]"><i class="header-icon el-icon-info"></i>正在抽取通道数据...</div>
            <!-- <div class="pText" v-show="visible1[6]">正在抽取一级通道数据……</div>
            <div class="pText" v-show="visible1[7]">正在抽取二级通道数据……</div>
            <div class="pText" v-show="visible1[8]">正在抽取三级通道数据……</div>
            <div class="pText" v-show="visible1[9]">抽取通道数据完成!!</div> -->
            <div class="pText" v-show="visible1[10]"><i class="header-icon el-icon-info"></i>正在抽取电源数据...</div>
            <!-- <div class="pText" v-show="visible1[11]">正在抽取一级电源数据……</div>
            <div class="pText" v-show="visible1[12]">正在抽取二级电源数据……</div>
            <div class="pText" v-show="visible1[13]">正在抽取三级通道数据……</div>
            <div class="pText" v-show="visible1[14]">抽取电源数据完成!!</div> -->
            <div class="pText" v-show="visible1[15]">数据准备完成!!</div>
          </el-col>
          <el-step title="正在计算" description="后台正在计算，请稍候……" icon="el-icon-edit" ></el-step>
          <el-col :span="22" :offset="2" :visible="visibleTitle2">
            <el-progress :text-inside="false" :stroke-width="18" :percentage="percentage2" v-show="visible2[0]"></el-progress>
            <div class="pText" v-show="visible2[0]"><i class="header-icon el-icon-info"></i>发电功率计算完成</div>
            <div class="pText" v-show="visible2[1]"><i class="header-icon el-icon-info"></i>用电功率计算完成</div>
            <div class="pText" v-show="visible2[2]"><i class="header-icon el-icon-info"></i>注入功率计算完成</div>
            <div class="pText" v-show="visible2[3]"><i class="header-icon el-icon-info"></i>输出功率计算完成</div>
            <div class="pText" v-show="visible2[4]"><i class="header-icon el-icon-info"></i>储能量计算完成</div>
            <div class="pText" v-show="visible2[5]"><i class="header-icon el-icon-info"></i>弃电量计算完成</div>
            <div class="pText" v-show="visible2[6]"><i class="header-icon el-icon-info"></i>实际开机计算完成</div>
            <div class="pText" v-show="visible2[7]"><i class="header-icon el-icon-info"></i>可用开机计算完成</div>
            <div class="pText" v-show="visible2[8]"><i class="header-icon el-icon-info"></i>强迫开机计算完成</div>
            <div class="pText" v-show="visible2[9]"><i class="header-icon el-icon-info"></i>最大发电计算完成</div>
            <div class="pText" v-show="visible2[10]"><i class="header-icon el-icon-info"></i>最小发电计算完成</div>
            <div class="pText" v-show="visible2[11]"><i class="header-icon el-icon-info"></i>最大用电计算完成</div>
            <div class="pText" v-show="visible2[12]"><i class="header-icon el-icon-info"></i>最小用电计算完成</div>
            <div class="pText" v-show="visible2[13]"><i class="header-icon el-icon-info"></i>最大注入计算完成</div>
            <div class="pText" v-show="visible2[14]"><i class="header-icon el-icon-info"></i>最大储能量计算完成</div>
            <div class="pText" v-show="visible2[15]"><i class="header-icon el-icon-info"></i>最大发电变化计算完成</div>
            <div class="pText" v-show="visible2[16]"><i class="header-icon el-icon-info"></i>最大用电变化计算完成</div>

            <!-- <div class="pText" v-show="visible2[0]"><i class="header-icon el-icon-info"></i>正在计算功率</div>
            <div class="pText" v-show="visible2[1]">发电功率计算完成!!</div>
            <div class="pText" v-show="visible2[2]">用电功率计算完成!!</div>
            <div class="pText" v-show="visible2[3]">注入功率计算完成!!</div>
            <div class="pText" v-show="visible2[4]">输出功率计算完成!!</div>
            <div class="pText" v-show="visible2[5]"><i class="header-icon el-icon-info"></i>正在计算储能量</div>
            <div class="pText" v-show="visible2[6]">储能量计算完成!!</div>
            <div class="pText" v-show="visible2[7]"><i class="header-icon el-icon-info"></i>正在计算弃电量</div>
            <div class="pText" v-show="visible2[8]">弃电量计算完成!!</div>
            <div class="pText" v-show="visible2[9]"><i class="header-icon el-icon-info"></i>正在计算开机</div>
            <div class="pText" v-show="visible2[10]">实际开机计算完成!!</div>
            <div class="pText" v-show="visible2[11]">可用开机计算完成!!</div>
            <div class="pText" v-show="visible2[12]">强迫开机计算完成!!</div>
            <div class="pText" v-show="visible2[13]"><i class="header-icon el-icon-info"></i>正在计算开机</div>
            <div class="pText" v-show="visible2[14]">最大发电计算完成!!</div>
            <div class="pText" v-show="visible2[15]"><i class="header-icon el-icon-info"></i>正在计算开机</div>
            <div class="pText" v-show="visible2[16]">最小发电计算完成!!</div>
            <div class="pText" v-show="visible2[17]"><i class="header-icon el-icon-info"></i>正在计算开机</div>
            <div class="pText" v-show="visible2[18]">最大用电计算完成!!</div>
            <div class="pText" v-show="visible2[19]"><i class="header-icon el-icon-info"></i>正在计算开机</div>
            <div class="pText" v-show="visible2[20]">最小用电计算完成!!</div>
            <div class="pText" v-show="visible2[21]"><i class="header-icon el-icon-info"></i>正在计算最大注入</div>
            <div class="pText" v-show="visible2[22]">最大注入计算完成!!</div>
            <div class="pText" v-show="visible2[23]"><i class="header-icon el-icon-info"></i>正在计算最大储能量</div>
            <div class="pText" v-show="visible2[24]">最大储能量计算完成!!</div>
            <div class="pText" v-show="visible2[25]"><i class="header-icon el-icon-info"></i>正在计算最大发电变化</div>
            <div class="pText" v-show="visible2[26]">最大发电变化计算完成!!</div>
            <div class="pText" v-show="visible2[27]"><i class="header-icon el-icon-info"></i>正在计算最大用电变化</div>
            <div class="pText" v-show="visible2[28]">最大用电变化计算完成!!</div> -->
          </el-col>
          <el-step title="数据入库" icon="el-icon-edit" ></el-step>
          <el-col :span="22" :offset="2" :visible="visibleTitle3">
            <el-progress :text-inside="false" :stroke-width="18" :percentage="percentage3" v-show="visible3[0]"></el-progress>
            <div class="pText" v-show="visible3[0]"><i class="header-icon el-icon-info"></i>数据格式转换中...</div>
            <!-- <div class="pText" v-show="visible3[1]">图形数据格式转换完成!!</div>
            <div class="pText" v-show="visible3[2]">表格数据格式转换完成!!</div> -->
            <div class="pText" v-show="visible3[3]"><i class="header-icon el-icon-info"></i>数据入库中...</div>
            <div class="pText" v-show="visible3[4]">数据入库完成!!</div>
          </el-col>
        </el-steps>
      </el-col>
    </el-row>
    <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button>    -->
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close">完成</el-button>
      <el-button @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        count1: 0,
        count2: 0,
        count3: 0,
        percentage1: 0,
        percentage2: 0,
        percentage3: 0,
        percentageArr1: [0, 6, 9, 14, 19, 28, 35, 44, 50, 60, 70, 76, 80, 88, 92, 100],
        percentageArr2: [0, 3, 6, 9, 11, 14, 19, 22, 28, 32, 35, 38, 41, 44, 48, 50, 52, 55, 60, 63, 68, 70, 76, 80, 85, 88, 92, 97, 100],
        percentageArr3: [0, 35, 70, 80, 100],
        visible1: [false, false, false, false],
        visible2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        visible3: [false, false, false]
      }
    },
    props: {
      title: String,
      visible: Boolean
    },
    watch: {
      visible: {
        handler(a, b) {
          this.active = 0
          this.count1 = 0
          this.count2 = 0
          this.count3 = 0
          this.percentage1 = 0
          this.percentage2 = 0
          this.percentage3 = 0
          this.percentageArr1 = [0, 6, 9, 14, 19, 28, 35, 44, 50, 60, 70, 76, 80, 88, 92, 100]
          this.percentageArr2 = [0, 6, 9, 11, 14, 22, 28, 35, 38, 41, 48, 50, 52, 60, 63, 70, 76, 80, 88, 92, 100]
          this.percentageArr3 = [0, 35, 70, 80, 100]
          this.visible1 = [false, false, false, false]
          this.visible2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
          this.visible3 = [false, false, false]
          setInterval(this.timer, 500)
        },
        deep: false
      }
    },
    // mounted() {
    //   this.count1 = 0
    //   this.count2 = 0
    //   this.count3 = 0
    //   this.active = 0
    //   this.visible1 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    //   this.visible2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    //   this.visible3 = [false, false, false, false, false]
    // },
    methods: {
      timer() {
        if (this.count1 < 16) {
          this.percentage1 = this.percentageArr1[this.count1]
          this.visible1[this.count1] = true
          this.count1++
        }
        if (this.count1 === 16) {
          this.active++
          this.count1++
          this.visible1 = [false, false, false, false]
        }
        if (this.count1 > 16 && this.count2 < 29) {
          this.percentage2 = this.percentageArr2[this.count2]
          this.visible2[this.count2] = true
          this.count2++
        }
        if (this.count2 === 18) {
          this.active++
          this.count2++
          this.visible2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        }
        if (this.count2 > 18 && this.count3 < 5) {
          this.percentage3 = this.percentageArr3[this.count3]
          this.visible3[this.count3] = true
          this.count3++
        }
        if (this.count3 === 5) {
          this.$message({
            type: 'success',
            message: '数据计算成功!'
          })
          this.count3++
        }
      },
      hidenPopup() {
        this.$emit('addRow')
        clearInterval(this.timer)
        this.close()
      },
      close() {
        this.$emit('hidePopup')
        this.count1 = 0
        this.count2 = 0
        this.count3 = 0
        this.active = 0
        this.visible1 = [false, false, false, false]
        this.visible2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        this.visible3 = [false, false, false]
      }
    }
  }
</script>
<style scoped>
.pText{
  margin: 3px;
  padding: 5px;
}

</style>