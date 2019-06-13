<template>
  <div class="webEchart" id="barWebEchart">
    <div id="chart1" class="barChart"></div>
  </div>
</template>
<script>
import axios from "axios";
import echart from "echarts";
export default {
  data() {
    return {
      pieData: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    drawBarChart() {
      var mychart = echart.init(document.getElementById("chart1"), "macarons");
      var option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["信息", "警告", "异常"]
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "日志",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: this.pieData
          }
        ]
      };
      mychart.setOption(option);
      window.addEventListener("resize", function() {
        mychart.resize();
      });
    },
    getdata() {
      var _this = this;
      axios.post("/sys/log/selectLogByLevel").then(res => {
        if (res.data.date != null && res.data.date != "") {
          _this.pieData = res.data.date;
        }
        this.drawBarChart();
      });
    }
  }
};
</script>
<style scoped>
.barChart {
  height: 500px;
}
.listTable {
  padding-left: 1%;
  padding-right: 1%;
}
</style>
