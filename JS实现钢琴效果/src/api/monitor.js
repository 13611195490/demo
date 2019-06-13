/* 监控 */
import request from '@/utils/request'
/* 监控报告列表 */
export function $getMonitorRepList(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryRepList',
    method: 'post',
    data: params
  })
}
/* 监控报告详情展示 */
export function $showRepDetail(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/showRepDetail',
    method: 'post',
    data: params
  })
}
/* 监控报告下载 */
export function $repDownload(params) {
  return request({
    url: '/xnyxn_business/business/powerdata/downloadTbsysReport.do',
    method: 'post',
    data: params
    // ,
    // responseType: 'blob'
  })
}
/* 监控报告删除 */
export function $repDel(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/repDel',
    method: 'post',
    data: params
  })
}
/* 监控报告批量删除 */
export function $repBatchDel(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/repBatchDel',
    method: 'post',
    data: params
  })
}
/* 监控指标树 */
export function queryIndicatorsTree(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getParamTree.do',
    method: 'post',
    data: params
  })
}
/* 监控区域树 */
export function queryAreaTree(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getAreaTree.do',
    method: 'post',
    data: params
  })
}
/* 监控指标列表 */
export function queryIndicatorsList(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryIndicatorsList',
    method: 'post',
    data: params
  })
}
/* 获取year图表所用数据 */
export function $getYearChart(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryYearChart',
    method: 'post',
    data: params
  })
}
/* 获取web热力图表所用数据 */
export function $getThermalChart(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryThermalChart',
    method: 'post',
    data: params
  })
}
/* 获取web环形图表所用数据 */
export function $getCircularChart(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryCircularChart',
    method: 'post',
    data: params
  })
}
/* 获取web环形图表所用数据 */
export function $getBarChart(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryBarChart',
    method: 'post',
    data: params
  })
}
export function $getMonitorWebList(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryWebList',
    method: 'post',
    data: params
  })
}
/* 获取elcIn图表所用数据 */
export function $getChart0(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryYearChart',
    method: 'post',
    data: params
  })
}

export function $getChart1(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryYearChart',
    method: 'post',
    data: params
  })
}
export function $getChart2(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryBarChart',
    method: 'post',
    data: params
  })
}
export function $getChart3(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryBarChart',
    method: 'post',
    data: params
  })
}
export function $getChart4(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryCircularChart',
    method: 'post',
    data: params
  })
}
export function $getChart5(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryCircularChart',
    method: 'post',
    data: params
  })
}
export function $getChart6(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryThermalChart',
    method: 'post',
    data: params
  })
}
export function $getChart7(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryThermalChart',
    method: 'post',
    data: params
  })
}
export function $getChart8(params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5be29877789efd31068549ae/api/monitor/queryWebList',
    method: 'post',
    data: params
  })
}

/* echarts */
export function $echartsData(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getSingleData.do',
    method: 'post',
    data: params
  })
}

/* 数据添加 */
export function $addReport(params) {
  return request({
    url: '/xnyxn_business/doc/createreport.do',
    method: 'post',
    data: params
  })
}

/* 数据删除 */
export function $DeleteReport(params) {
  return request({
    url: '/xnyxn_business/business/powerdata/deleteTbsysReport.do',
    method: 'post',
    data: params
  })
}

/* 数据修改 */

/* 详细查询(单条) */
export function $getReportDetail(params) {
  return request({
    url: '/xnyxn_business/business/powerdata/selectTbsysReport.do',
    method: 'post',
    data: params
  })
}

/* 数据查询（分页） */
export function $getReportList(params) {
  return request({
    url: '/xnyxn_business/business/powerdata/selectTbsysReportPaging.do',
    method: 'post',
    data: params
  })
}

/* 监测报告 */
export function $getDetailData(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getDetailData.do',
    method: 'post',
    data: params
  })
}

/* 小时（实时）电厂风机树接口 */
export function $selectWindfarmDict(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getWindfarmDictTree.do',
    method: 'post',
    data: params
  })
}
/* 小时（实时）图表接口 */
export function $selectWindfarmDictValues(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getWindfarmDictValues.do',
    method: 'post',
    data: params
  })
}
/* 典型图表接口 */
export function $selectTypicalData(params) {
  return request({
    url: '/xnyxn_business/business/reactdata/getTypicalData.do',
    method: 'post',
    data: params
  })
}
// getWindfarmDictValues
/* 预警模型计算结果列表 */
/* 数据添加 */
export function $insertCalcMerge(params) {
  return request({
    url: '/xnyxn_business/business/forcast/insertCalcMerge.do',
    method: 'post',
    data: params
  })
}

/* 数据分页查询 */
export function $selectCalcItems(params) {
  return request({
    url: '/xnyxn_business/business/forcast/selectCalcItems.do',
    method: 'post',
    data: params
  })
}

/* 数据删除 */
export function $deleteCalcValueByCalcItemID(params) {
  return request({
    url: '/xnyxn_business/business/forcast/deleteCalcValueByCalcItemID.do',
    method: 'post',
    data: params
  })
}

/* 数据查询 */
export function $selectCalcValueByCalcItemID(params) {
  return request({
    url: '/xnyxn_business/business/forcast/selectCalcValueByCalcItemID.do',
    method: 'post',
    data: params
  })
}
/* 数据查询 */
export function $selectIndexMetaByIndexType() {
  return request({
    url: '/xnyxn_business/business/forcast/selectIndexMetaByIndexType.do',
    method: 'post'
  })
}
// 获取表格数据
export function $getRunChart2(params) {
  return request({
    url: '/run_table2.0.json',
    method: 'get',
    data: params
  })
}
