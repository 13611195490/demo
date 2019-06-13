<template>
  <div class="mod-log">
    <el-form :inline="true" :model="searchForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-select v-model="searchForm.TYPE" placeholder="查询类型" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.OPERATION" placeholder="事件描述" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="searchForm.start"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          placeholder="开始时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="searchForm.end"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          placeholder="结束时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button @click="delHistory()">清理</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border style="width: 100%" @sort-change="changeTableSort">>
      <!-- <el-table-column prop="id" header-align="center" align="center" label="id编号"></el-table-column>	 -->
      <el-table-column sortable="custom" prop="userName" header-align="center" align="center" label="用户名"></el-table-column>
      <el-table-column sortable="custom" prop="operation" header-align="center" align="center" label="日志描述"></el-table-column>
      <el-table-column sortable="custom" prop="time" header-align="center" align="center" label="请求时长"></el-table-column>
      <el-table-column sortable="custom" prop="ip" header-align="center" align="center" label="IP地址"></el-table-column>
      <el-table-column sortable="custom" header-align="center" align="center" width="200" label="日志类型">
        <template
          slot-scope="scope"
        >{{ scope.row.type === '0' ? '系统日志' : ( scope.row.type === '1' ? '业务日志' : '' ) }}</template>
      </el-table-column>
      <el-table-column sortable="custom" prop="isok" header-align="center" align="center" label="事件结果">
        <template
          slot-scope="scope"
        >{{ scope.row.isok === '0' ? '成功' : ( scope.row.type === '1' ? '1失败' : '' ) }}</template>
      </el-table-column>
      <el-table-column sortable="custom" prop="level" header-align="center" align="center" label="日志级别"></el-table-column>
      <el-table-column sortable="custom" header-align="center" align="center" width="180" label="日志时间">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>


<script>
import { Message } from 'element-ui'
import { parseTime } from "@/utils/index";
export default {
  data() {
    return {
      searchForm: {
        TYPE: "",
        OPERATION: "",
        start: "",
        end: "",
        orderField: "",
        orderTpye: ""
      },
      options: [
        {
          value: 0,
          label: "系统日志"
        },
        {
          value: 1,
          label: "业务日志"
        }
      ],
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      selectionDataList: []
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    parseTime,
    // 获取数据列表
    getDataList() {
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        TYPE: this.searchForm.TYPE,
        OPERATION: this.searchForm.OPERATION,
        start: this.searchForm.start,
        end: this.searchForm.end,
        orderField: this.searchForm.orderField,
        orderTpye: this.searchForm.orderTpye,
        size: this.pageIndex,
        current: this.pageIndex
      };
      var dateVali = this.calculateTimeDiff(params.start,params.end)
      if(!dateVali){
        Message.warning("开始时间和截止时间必须同时选定，且开始时间不能大于截止时间!!");
        return
      }
      this.$get("/sys/log/list", params).then(data => {
        if (data && data.code === 0) {
          this.dataList = data.page.records;
          this.totalPage = data.page.total;
          if (this.totalPage >= 10000) {
            this.$notify.error({
              title: "提示",
              message: "日志消息已达到最大上限10000条，请及时清理。",
              duration: 0
            });
          } else if (this.totalPage >= 10000 * 0.8) {
            this.$notify({
              title: "警告",
              message: "日志消息已达到%80，请及时清理。",
              type: "warning"
            });
          }
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    getDate(date) {
      var dates = date.split("-");
      var dateReturn = "";
      var dateReturn1 = "";
      var dateReturn2 = "";
      for (var i = 0; i < dates.length; i++) {
        dateReturn += dates[i];
      }
      var dates1 = dateReturn.split(":");
      for(var j=0; j<dates1.length; j++){
          dateReturn1+=dates1[j];
      }
      var dates2 = dateReturn1.split(" ");
      for(var k=0; k<dates2.length; k++){
          dateReturn2+=dates2[k];
      }
      return dateReturn2;
    },
    calculateTimeDiff(time1, time2) {
      if (time1 && time2 && this.getDate(time1) < this.getDate(time2)) return true
      if (!time1 && !time2) return true
      return false
    },
    /* 改变排序规则 */
    changeTableSort(val) {
      val.order === 'descending' ? this.searchForm.orderTpye = 'desc' : this.searchForm.orderTpye = 'asc'
      this.searchForm.orderField = val.prop
      this.getDataList()
    },
    delHistory() {
      this.$post("/sys/log/manuallyDelete").then(data => {
        if (data && data.code === 0) {
          this.$message({
            message: "操作成功",
            type: "success",
            duration: 1500
          });
          this.getDataList();
        }
      });
    }
  }
};
</script>
