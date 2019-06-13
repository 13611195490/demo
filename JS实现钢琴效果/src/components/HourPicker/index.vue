<template>
  <div class="nsd-item-area" :style="{width: width + 'px'}" > 
    <div class="content_tag" v-for="(item, index) in showTagArry" :key="index">
      <el-tag closable @close="handleCloseTage(item, index)">
        {{ item }}
      </el-tag>
    </div>
    <div class="timePickerNewText" @click="addTimeFunc" v-if="showSelectText">+  添加巡更时间</div>
    <div class="timeSelect" v-if="showSelectTime">
      <el-time-picker size="small" v-model="startTime" placeholder="选择开始时间" format="HH:mm" value-format="HH:mm"></el-time-picker>
      <el-time-picker size="small" v-model="endTime" placeholder="选择结束时间" format="HH:mm" value-format="HH:mm"></el-time-picker>
      <div class="timePickerNewtag" v-if="showTagTomm">
        <el-tag type="danger">次日</el-tag>
      </div>
      <div style="float:right;" v-if="startTime && endTime" v-on:click="judgeTime">
        <el-tag>确定</el-tag>
      </div>
      <div v-else v-on:click="closeTime" style="float:right;">
        <el-tag type="info" v-on:click="closeTime">关闭</el-tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: '500',
    data: [],
    click: ''
  },
  data() {
    return {
      prompt: '',
      startTime: null,
      timeRange: null,
      endTime: null,
      showTagArry: this.data || [],
      isConflict: false,
      showSelectTime: false,
      showSelectText: true
    }
  },
  watch: {
    // 判断是不是次日
    endTime: function(curVal) {
      if (this.compareTime(this.startTime, curVal)) {
        this.showTagTomm = true
      } else {
        this.showTagTomm = false
      }
    },
    startTime: function(curVal) {
      if (this.compareTime(curVal, this.endTime)) {
        this.showTagTomm = true
      } else {
        this.showTagTomm = false
      }
    }
  },
  methods: {
    addTimeFunc() {
      this.showSelectTime = true
      this.showSelectText = false
      this.$emit('click', event)
    },
    handleCloseTage(item, index) {
      this.showTagArry.splice(index, 1)
      this.$emit('getHourPickerTime', this.showTagArry)
    },
    closeTime() {
      this.isConflict = false
      this.startTime = null
      this.endTime = null
      this.showSelectTime = false
      this.showSelectText = true
    },
    judgeTime() {
      this.isConflict = false
      if (!this.endTime || !this.startTime) {
        return false
      }
      // if (!this.startTime && this.endTime) {
      //   // 判断开始结束时间是否为空
      //   this.$alert('开始时间为空，请重新选择', '警告', {
      //     confirmButtonText: '关闭',
      //     type: 'warning'
      //   })
      //   return false
      // }
      // if (!this.endTime && this.startTime) {
      //   this.$alert('结束时间为空，请重新选择', '警告', {
      //     confirmButtonText: '关闭',
      //     type: 'warning'
      //   })
      //   return false
      // }
      // 判断时间是否有交叉
      if (this.showTagArry.length > 0) {
        this.showTagArry.forEach((element, index) => {
          let startEnd = []
          startEnd = element.split('--')
          this.checkTime(startEnd[0], startEnd[1], this.startTime, this.endTime)
        })
      }
      if (!this.isConflict) {
        this.showTagArry.push(this.startTime + '--' + this.endTime)
        this.startTime = null
        this.endTime = null
        this.showSelectTime = false
        this.showSelectText = true
        this.$emit('getHourPickerTime', this.showTagArry)
      }
    },
    checkTime(a, b, x, y) {
      const times1 = []
      const times2 = []
      if (a < b) {
        // 未跨天
        times1.push([a, b])
      } else {
        // 跨天
        times1.push([a, '24:00'], ['00:00', b])
      }
      if (x < y) {
        times2.push([x, y])
      } else {
        times2.push([x, '24:00'], ['00:00', y])
      }

      var flag = false
      // 循环比较时间段是否冲突
      for (let i = 0; i < times1.length; i++) {
        if (flag) break
        for (let j = 0; j < times2.length; j++) {
          if (this.check(times1[i][0], times1[i][1], times2[j][0], times2[j][1])) {
            flag = true
            break
          }
        }
      }
      if (flag) {
        this.$alert('时间段不允许交叉', '警告', {
          confirmButtonText: '关闭',
          type: 'warning'
        })
        this.isConflict = true
        return false
      } else {
        return true
      }
    },
    check(a, b, x, y) {
      if (y < a || b < x) {
        return false
      } else {
        return true
      }
    },
    compareTime(time1, time2) {
      if (time1 && time2) {
        const date = new Date()
        const t1 = time1.split(':')
        const t2 = time2.split(':')
        return date.setHours(t1[0], t1[1]) >= date.setHours(t2[0], t2[1])
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped rel="stylesheet/less" lang="less">
  .nsd-item-area {
    min-height: 80px;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    overflow: hidden;
    padding: 5px 5px;
  }

  .timePickerNewText{
    float: left;
    margin-left: 5px;
    height: 40px;
    color: #53ACEB!important;
    font-size: 15px;
    line-height: 42px;
  }

  .content_tag{
    float: left;
    height: 36px;
  }

  .timeSelect{
    float: left;
  }

  .el-tag{
    margin-right: 10px;
    height: 31px;
  }

  .el-tag--danger {
    float: left;
    margin-left: 5px;
    background-color: rgba(255,73,73,.1);
    border-color: rgba(255,73,73,.2);
    color: #ff4949;
  }

  .timePickerNewtag{
    margin-top: 4px;
    float: right;
  }
    
</style>