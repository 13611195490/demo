<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <div class="selectFrame fl mr20 pb20">
          <el-button @click="addHourVisible = true" type="primary" size="small">新增</el-button>
          <el-button @click="addBatchHourVisible = true" type="primary" size="small">批量导入</el-button>
        </div>
        <el-table :data="detailData" v-loading.body="listLoading" element-loading-text="Loading" border fit stripe highlight-current-row > 
          <el-table-column  prop="IndexItemID"  label="指标条目ID" width="160"></el-table-column>
          <el-table-column  prop="YEAR"  label="时间" width="160"></el-table-column>
          <el-table-column  prop="HourIndex"  label="小时计数" width="160"></el-table-column>
          <el-table-column  prop="DATA"  label="数据" width="160"></el-table-column>
          <el-table-column  label="操作" width="160">
            <template slot-scope="scope">
              <el-button @click="showUpdateHour(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footerCoperation">
        <el-button type="primary" @click="closeEditForm">确定</el-button>
      </div>
    </nsd-right-pop>
    <hourPopup v-on:submitForm="addHour" v-on:hidePopup="addFormHide" title="新增数据" :form="addForm" editType="create" :visible="addHourVisible"></hourPopup>
    <hourPopup v-on:submitForm="updateHour" v-on:hidePopup="updateFormHide" title="编辑数据" :form="updateForm" editType="update" :visible="updateHourVisible"></hourPopup>
    <hourBatchPopup v-on:submitForm="addBatchHour" v-on:hidePopup="addBatchFormHide" title="批量导入数据" :form="addBatchForm" :visible="addBatchHourVisible"></hourBatchPopup>
  </div> 
</template>
<script>

import { mapState } from 'vuex'
import hourPopup from './hourPopup'
import hourBatchPopup from './hourBatchPopup'
import { $addHour, $updateHour, $addBatchHour } from '@/api/model.js'

export default {
  name: 'SessionDetail',
  components: {
    hourPopup, hourBatchPopup
  },
  props: {
    title: String,
    closeYearForm: Function,
    detailResult: Object
  },
  data() {
    return {
      listLoading: true,
      addHourVisible: false,
      addForm: {},
      updateHourVisible: false,
      updateForm: {},
      addBatchHourVisible: false,
      addBatchForm: {}
    }
  },
  computed: {
    ...mapState({
      detailData: state => state.modelMaintenanceEntry.detailData
    })
  },
  created() {
    this.fetchData()
    this.addForm.IndexItemID = this.detailResult.IndexItemID
    this.updateForm.IndexItemID = this.detailResult.IndexItemID
    this.addBatchForm.IndexItemID = this.detailResult.IndexItemID
  },
  methods: {
    closeEditForm() {
      this.$emit('closeYearForm')
    },
    fetchData() {
      this.listLoading = false
      var type = 'hourly'
      var IndexItemID = this.detailResult.IndexItemID
      this.$store.dispatch('GetEntryDataDetail', {
        IndexItemID,
        type,
        cb: () => {
          this.listLoading = false
        }
      })
    },
    addHour() {
      const req = [{
        IndexItemID: this.addForm.IndexItemID,
        year: this.addForm.year,
        hourIndex: this.addForm.hourIndex,
        data: this.addForm.data
      }]
      $addHour(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addHourVisible = false
          this.fetchData()
        }
      })
    },
    addFormHide() {
      this.addHourVisible = false
      this.addForm.year = ''
      this.addForm.hourIndex = ''
      this.addForm.data = ''
    },
    addBatchHour() {
      const req = [{
        IndexItemID: this.addBatchForm.IndexItemID,
        year: this.addBatchForm.year,
        pictureFile: this.addBatchForm.pictureFile
      }]
      $addBatchHour(req).then(response => {
        if (response.code === '1') {
          this.addBatchFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addHourVisible = false
          this.fetchData()
        }
      })
    },
    addBatchFormHide() {
      this.addBatchHourVisible = false
      this.addBatchForm.year = ''
      this.addBatchForm.pictureFile = ''
    },
    showUpdateHour(row) {
      if (row) {
        this.updateForm.IndexItemID = row.IndexItemID
        this.updateForm.year = row.YEAR
        this.updateForm.hourIndex = row.HourIndex
        this.updateForm.data = row.DATA
      }
      this.updateHourVisible = true
    },
    updateFormHide() {
      this.updateHourVisible = false
    },
    updateHour() {
      const req = {
        indexItemID: this.updateForm.IndexItemID,
        Year: this.updateForm.year,
        HourIndex: this.updateForm.hourIndex,
        Data: this.updateForm.data
      }
      $updateHour(req).then(response => {
        if (response.code === '1') {
          this.updateFormHide()
          this.$message({ type: 'success', message: '修改成功' })
          this.updateHourVisible = false
          this.fetchData()
        }
      })
    },
    deleteData(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DelHour', {
          indexItemID: row.IndexItemID,
          cb: () => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.fetchData()
          }
        })
      })
    }
  }
}
</script>
<style scoped>
.submitBtn{
  margin-left: 10px;
}
.wrapper{
  margin: 5px 0;
}
.sessionDetailItem{

}
</style>


