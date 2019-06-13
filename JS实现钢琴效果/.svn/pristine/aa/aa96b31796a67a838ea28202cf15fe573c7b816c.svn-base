import Router from 'vue-router'
const Login = () => import('@/views/login/index')
// const Layout = () => import('@/views/layout/Layout')
// const appMain = () => import('@/views/layout/components/AppMain')
// const elcIn = () => import('@/views/monitor/elcIn/index')
// const web = () => import('@/views/monitor/web/index')
// const elcOut = () => import('@/views/monitor/elcOut/index')
// const run = () => import('@/views/monitor/run/index')
// const maintenance = () => import('@/views/model/maintenance/index')
// const distribution = () => import('@/views/project/distribution/index')
// const project = () => import('@/views/project/project/index')
// const plan = () => import('@/views/plan/index')
// const planData = () => import('@/views/plan/data')
// const operation = () => import('@/views/model/operation/index')
// const results = () => import('@/views/model/results/index')
// const assess = () => import('@/views/assess/index')
// const month = () => import('@/views/report/rep/index')
// const xny = () => import('@/views/report/xny/index')
// const elcOutCalculate = () => import('@/views/predict/elcOutCalculate/index')
// const elcInCalculate = () => import('@/views/predict/elcInCalculate/index')
// const assessAnalysis = () => import('@/views/analysis/assess/index')
// const planAnalysis = () => import('@/views/analysis/plan/index')
// const repAnalysis = () => import('@/views/analysis/rep/index')
// const risk = () => import('@/views/analysis/risk/index')
// const developAssess = () => import('@/views/assess/develop/index')
// const absorptiveAssess = () => import('@/views/assess/absorptive/index')
// const localAbsorptiveAssess = () => import('@/views/assess/local/index')
// const outAbsorptiveAssess = () => import('@/views/assess/out/index')
// const user = () => import('@/views/system/user/index')
// const menu = () => import('@/views/system/menu/index')
// const dept = () => import('@/views/system/dept/index')
// const role = () => import('@/views/system/role/index')
// const sysLog = () => import('@/views/system/sysLog/auditMaintenance/index')
// const sysConfig = () => import('@/views/system/sysConfig/index')
// const sysAudit = () => import('@/views/system/sysLog/auditStatistical/index')
// const sysAudits = () => import('@/views/assess/new/indexsecond')
export const constantRouterMap = [
  /* { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true }, */
  {
    path: '/login',
    component: Login,
    hidden: true
  },

  {
    path: '/',
    component: Login,
    hidden: true
  },
  /* {
    path: '*',
    component: Login,
    hidden: true
  }, */

  // {
  //   path: '/monitor',
  //   component: Layout,
  //   meta: {
  //     title: '新能源监测',
  //     icon: 'nsd-icon-jianceqi1'
  //   },
  //   children: [{
  //     path: 'elcIn',
  //     name: 'elcIn',
  //     component: elcIn,
  //     meta: {
  //       title: '用电监测',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'web',
  //     name: 'web',
  //     component: web,
  //     meta: {
  //       title: '并网监测',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'elcOut',
  //     name: 'elcOut',
  //     component: elcOut,
  //     meta: {
  //       title: '发电监测',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'run',
  //     name: 'run',
  //     component: run,
  //     meta: {
  //       title: '运行监测',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/assess',
  //   component: Layout,
  //   meta: {
  //     title: '新能源评估',
  //     icon: 'nsd-icon-pinggu'
  //   },
  //   children: [{
  //     path: 'develop',
  //     name: 'developAssess',
  //     component: developAssess,
  //     meta: {
  //       title: '开发建设评估',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'absorptive',
  //     name: 'absorptiveAssess',
  //     component: absorptiveAssess,
  //     meta: {
  //       title: '消纳利用评估',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'local',
  //     name: 'localAbsorptiveAssess',
  //     component: localAbsorptiveAssess,
  //     meta: {
  //       title: '本地消纳能力评估',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'out',
  //     name: 'outAbsorptiveAssess',
  //     component: outAbsorptiveAssess,
  //     meta: {
  //       title: '外送消纳能力评估',
  //       icon: 'icon'
  //     }
  //   }]
  // },
  // {
  //   path: '/absorptiveAbility',
  //   component: Layout,
  //   meta: {
  //     title: '消纳能力分析',
  //     icon: 'nsd-icon-xiangmu'
  //   },
  //   children: [{
  //       path: 'result',
  //       name: 'assess',
  //       component: assess,
  //       meta: {
  //         title: '消纳相关因素管理',
  //         icon: 'icon'
  //       }
  //     },
  //     {
  //       path: 'elcOutCalculate',
  //       name: 'elcOutCalculate',
  //       meta: {
  //         title: '发电预测',
  //         icon: 'icon'
  //       },
  //       component: elcOutCalculate,
  //     },

  //     {
  //       path: 'elcInCalculate',
  //       name: 'elcInCalculate',
  //       component: elcInCalculate,
  //       meta: {
  //         title: '负荷预测',
  //         icon: 'icon'
  //       }
  //     },

  //     {
  //       path: 'analysis',
  //       name: 'abilityAnalysis',
  //       component: sysAudits,
  //       meta: {
  //         title: '新能源消纳能力分析',
  //         icon: 'icon'
  //       }
  //     },

  //     {
  //       path: 'analysisSta',
  //       name: 'abilityAnalysisSta',
  //       component: assessAnalysis,
  //       meta: {
  //         title: '新能源消纳能力分析统计',
  //         icon: 'icon'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/absorptiveWarning',
  //   component: Layout,
  //   meta: {
  //     title: '消纳预警分析',
  //     icon: 'nsd-icon-gaojing'
  //   },
  //   children: [{
  //     path: 'risk',
  //     name: 'warningRisk',
  //     component: risk,
  //     meta: {
  //       title: '弃风弃光预警',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'plan',
  //     name: 'warningPlan',
  //     component: planAnalysis,
  //     meta: {
  //       title: '新能源规划分析',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'rep',
  //     name: 'warningRep',
  //     component: repAnalysis,
  //     meta: {
  //       title: '新能源消纳分析报告',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/plan',
  //   component: Layout,
  //   meta: {
  //     title: '规划方案管理',
  //     icon: 'nsd-icon-gongzuofangan'
  //   },
  //   children: [{
  //     path: 'list',
  //     name: 'planList',
  //     component: plan,
  //     meta: {
  //       title: '规划方案列表',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'data',
  //     name: 'planData',
  //     component: planData,
  //     meta: {
  //       title: '规划数据管理',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/project',
  //   component: Layout,
  //   meta: {
  //     title: '新能源项目管理',
  //     icon: 'nsd-icon-xiangmu'
  //   },
  //   children: [{
  //     path: 'distribution',
  //     name: 'distribution',
  //     component: distribution,
  //     meta: {
  //       title: '项目分布',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'project',
  //     name: 'project',
  //     component: project,
  //     meta: {
  //       title: '项目管理',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/report',
  //   component: Layout,
  //   meta: {
  //     title: '新能源月报及报表',
  //     icon: 'nsd-icon-baogao'
  //   },
  //   children: [{
  //     path: 'month',
  //     name: 'xnyMonthReport',
  //     component: month,
  //     meta: {
  //       title: '新能源月报',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'xny',
  //     name: 'xnyReport',
  //     component: xny,
  //     meta: {
  //       title: '新能源报表',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/model',
  //   component: Layout,
  //   meta: {
  //     title: '数据维护',
  //     icon: 'nsd-icon-moxingzhongxin'
  //   },
  //   children: [{
  //     path: 'maintenance',
  //     name: 'maintenance',
  //     component: maintenance,
  //     meta: {
  //       title: '统计指标数据维护',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'operation',
  //     name: 'operation',
  //     component: operation,
  //     meta: {
  //       title: '新能源项目数据维护',
  //       icon: 'icon'
  //     }
  //   }]
  // }, {
  //   path: '/system',
  //   component: Layout,
  //   meta: {
  //     title: '系统管理',
  //     icon: 'nsd-icon-shezhi'
  //   },
  //   children: [{
  //     path: 'user',
  //     name: 'user',
  //     component: user,
  //     meta: {
  //       title: '用户管理',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'dept',
  //     name: 'dept',
  //     component: dept,
  //     meta: {
  //       title: '组织机构管理',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'menu',
  //     name: 'menu',
  //     component: menu,
  //     meta: {
  //       title: '菜单管理',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'role',
  //     name: 'role',
  //     component: role,
  //     meta: {
  //       title: '角色管理',
  //       icon: 'icon'
  //     }
  //   }, {
  //     path: 'sysLog',
  //     component: appMain,
  //     meta: {
  //       title: '审计管理'
  //     },
  //     children: [{
  //       path: 'auditMaintenance',
  //       name: 'auditMaintenance',
  //       component: sysLog,
  //       meta: {
  //         title: '审计维护',
  //         icon: 'icon'
  //       }
  //     }, {
  //       path: 'auditStatistical',
  //       name: 'auditStatistical',
  //       component: sysAudit,
  //       meta: {
  //         title: '审计统计',
  //         icon: 'icon'
  //       }
  //     }]
  //   }, {
  //     path: 'sysConfig',
  //     name: 'sysConfig',
  //     component: sysConfig,
  //     meta: {
  //       title: '配置定制',
  //       icon: 'icon'
  //     }
  //   }]
  // },


]


export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
