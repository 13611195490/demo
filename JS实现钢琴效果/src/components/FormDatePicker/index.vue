<template>
  <el-date-picker v-if="type==='week'"
    :editable="false"
    v-model="value"
    :type="type"
    align="right"
    unlink-panels
    range-separator="-"
    :placeholder="placeholder"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :format="format" 
    :default-time="defaultTimeInput"
    @change="change"
    :popper-class="popperClass"
    :picker-options="pickerOptions">
  </el-date-picker>
  <el-date-picker v-else
    :editable="false"
    v-model="value"
    :type="type"
    align="right"
    unlink-panels
    range-separator="-"
    :placeholder="placeholder"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :format="format" 
    :value-format="valueFormat"
    :default-time="defaultTimeInput"
    @change="change"
    :popper-class="popperClass"
    :picker-options="pickerOptions">
  </el-date-picker>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'passValue'
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    hiddenShortcuts: {
      type: Boolean,
      default: false
    },
    type: {
      type: String, // 日期选择器类型
      default: 'daterange'
    },
    defaultTime: {
      type: String,
      default: '12:00:00'
    },
    defaultTimes: {
      type: Array,
      default: () => ['12:00:00', '08:00:00']
    },
    popperClass: {
      type: String,
      default: ''
    },
    /**
     * 设置禁用状态
     * 1:明天以后（包含明天）的日期不能选择
     * 2:今日以前（包含今日）的日期不能选择
     * 2:昨天以前（包含昨天）的日期不能选择
     * 2:今日以后（包含今日）的日期不能选择
     */
    disabledDateType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    switch (this.type) {
      case 'year':
        this.format = 'yyyy年'
        this.valueFormat = 'yyyy'
        this.pickerOptions.shortcuts = null
        this.defaultTimeInput = null
        break
      case 'month':
        this.format = 'yyyy-MM'
        this.valueFormat = 'yyyy-MM'
        this.pickerOptions.shortcuts = null
        this.defaultTimeInput = null
        break
      case 'date':
        this.format = 'yyyy-MM-dd'
        this.valueFormat = 'yyyy-MM-dd'
        this.pickerOptions.shortcuts = this.hiddenShortcuts ? null : this.shortcuts2
        this.defaultTimeInput = null
        break
      case 'dates':
        this.format = 'yyyy-MM-dd'
        this.valueFormat = 'yyyy-MM-dd'
        this.pickerOptions.shortcuts = null
        this.defaultTimeInput = null
        break
      case 'datetime':
        this.format = 'yyyy-MM-dd HH:mm:ss'
        this.valueFormat = 'yyyy-MM-dd HH:mm:ss'
        this.pickerOptions.shortcuts = this.hiddenShortcuts ? null : this.shortcuts2
        this.defaultTimeInput = this.defaultTime
        break
      case 'week':
        this.format = 'yyyy 第WW周'
        this.pickerOptions.shortcuts = null
        this.defaultTimeInput = null
        break
      case 'datetimerange':
        this.format = 'yyyy-MM-dd HH:mm:ss'
        this.valueFormat = 'yyyy-MM-dd HH:mm:ss'
        this.pickerOptions.shortcuts = this.hiddenShortcuts ? null : this.shortcuts1
        this.defaultTimeInput = this.defaultTimes
        break
      case 'daterange':
        this.format = 'yyyy-MM-dd'
        this.valueFormat = 'yyyy-MM-dd'
        this.pickerOptions.shortcuts = this.hiddenShortcuts ? null : this.shortcuts1
        this.defaultTimeInput = null
        break
      default:
        this.format = null
        this.valueFormat = null
        this.pickerOptions.shortcuts = null
        this.defaultTimeInput = null
    }
  },
  data() {
    return {
      defaultTimeInput: null,
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      shortcuts1: [{
        text: '最近一周',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', [start, end])
        }
      }, {
        text: '最近一个月',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.$emit('pick', [start, end])
        }
      }, {
        text: '最近三个月',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.$emit('pick', [start, end])
        }
      }],
      shortcuts2: [{
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', new Date())
        }
      }, {
        text: '昨天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.$emit('pick', date)
        }
      }, {
        text: '明天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() + 3600 * 1000 * 24)
          picker.$emit('pick', date)
        }
      }, {
        text: '前天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 2)
          picker.$emit('pick', date)
        }
      }, {
        text: '后天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 2)
          picker.$emit('pick', date)
        }
      }, {
        text: '一周前',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        }
      }, {
        text: '一周后',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        }
      }],
      pickerOptions: {
        shortcuts: null,
        disabledDate: (time) => {
          let result = false
          switch (this.disabledDateType) {
            case 1:
              result = time.getTime() > Date.now()
              break
            case 2:
              result = time.getTime() < Date.now()
              break
            case 3:
              result = time.getTime() < Date.now() - 86400000
              break
            case 4:
              result = time.getTime() > Date.now() - 86400000
              break
            default:
          }
          return result
        }
      },
      value: ''
    }
  },
  methods: {
    change() {
      this.$emit('getValue', this.value)
      this.$emit('passValue', this.value)
    }
  }
}
</script>
<style lang="less" scoped>
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange {
  width: 220px;
  :nth-child(2) {
    margin-left: 5px;
    margin-right: 3px;
  }
  :nth-child(4) {
    margin-left: 3px;
    margin-right: 3px;
  }
}
</style>


