import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统通知', icon: 'dashboard', roles: ['18']}
    }]
    // meta: { title: '首页', icon: 'dashboard',roles: ['18'] }
  },
  {
    path: '/personInfo',
    component: Layout,
    name: 'personInfo',
    meta: {
      title: '个人信息',
      icon: 'example',
      roles: ['33']
    },
    children: [
      {
        path: 'stuInfomation',
        name: 'stuInfomation',
        component: () => import('@/views/personInfo/stuInfomation'),
        meta: { title: '学生个人信息', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'teacherInfomationEdit',
        name: 'teacherInfomationEdit',
        component: () => import('@/views/personInfo/teacherInfomationEdit'),
        meta: { title: '教师个人信息', icon: 'user' , roles: ['3'] }
      },
      {
        path: 'teacherInfomation',
        name: 'teacherInfomation',
        component: () => import('@/views/personInfo/teacherInfomation'),
        meta: { title: '教师个人信息', icon: 'user' , roles: [] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '修改密码', icon: 'password' , roles: ['16'] }
      }
    ]
  },
  {
    path: '/trainning',
    component: Layout,
    name: 'trainning',
    meta: {
      title: '创新项目实训',
      icon: 'nested',
      roles: ['35']
    },
    children: [
      {
        path: 'commTableFileDownload',
        name: 'commTableFileDownload',
        component: () => import('@/views/comm/commTableFileDownload.vue'),
        meta: { title: '常用表格下载', icon: 'user' , roles: [53] }
      },
      {
        path: 'tutorTrainningResearch',
        name: 'tutorTrainningResearch',
        component: () => import('@/views/trainning/tutorTrainningResearch'),
        meta: { title: '实训课题申请表', icon: 'form'  }
      },
      {
        path: 'studentChoseTrainningResearch',
        name: 'studentChoseTrainningResearch',
        component: () => import('@/views/trainning/studentChoseTrainningResearch'),
        meta: { title: '学生选择实训课题', icon: 'form' }
      },
      {
        path: 'tutorTrainningReaserchDetail',
        component: () => import('@/views/trainning/tutorTrainningReaserchDetail'),
        name: 'tutorTrainningReaserchDetail',
        hidden: true,
        meta: { title: '创新项目课题详情', icon: 'form', roles: [] }
      },
      {
        path: 'modifyTrainningReaserch',
        component: () => import('@/views/trainning/modifyTrainningReaserch'),
        name: 'modifyTrainningReaserch',
        hidden: true,
        meta: { title: '修改创新项目课题', icon: 'form', roles: [] }
      },
      {
        path: 'checkTrainningReaserch',
        component: () => import('@/views/trainning/checkTrainningReaserch'),
        name: 'checkTrainningReaserch',
        hidden: true,
        meta: { title: '查看创新项目课题', icon: 'form', roles: [] }
      },
      {
        path: 'tutorTrainningResearch',
        name: 'tutorTrainningResearch',
        component: () => import('@/views/trainning/tutorTrainningResearch'),
        meta: { title: '申请观摩项目', icon: 'form' , roles: ['22'] }
      },
      {
        path: 'studentViewProjectTrainningAppState',
        name: 'studentViewProjectTrainningAppState',
        component: () => import('@/views/trainning/studentViewProjectTrainningAppState'),
        meta: { title: '查看创新训练项目申请状态', icon: 'form' , roles: ['23'] }
      },
      {
        path: 'studentViewProjectTeamInfo',
        name: 'studentViewProjectTeamInfo',
        component: () => import('@/views/trainning/studentViewProjectTeamInfo'),
        meta: { title: '查看团队基本情况', icon: 'form' , roles: ['24'] }
      },
      {
        path: 'studentWorkLogSubmit',
        name: 'studentWorkLogSubmit',
        component: () => import('@/views/trainning/studentWorkLogSubmit'),
        meta: { title: '填写创新训练项目日志', icon: 'form' , roles: ['25'] }
      },
      {
        path: 'studentApplyProjectResoure',
        name: 'studentApplyProjectResoure',
        component: () => import('@/views/trainning/studentApplyProjectResoure'),
        meta: { title: '学生申请观摩项目资源', icon: 'form' , roles: ['26'] }
      },
      {
        path: 'studentProjectTrainningScoreView',
        name: 'studentProjectTrainningScoreView',
        component: () => import('@/views/trainning/studentProjectTrainningScoreView'),
        meta: { title: '查看节能减排课程成绩', icon: 'form' , roles: ['27'] }
      },
      {
        path: '/studentFillProjectTrainningReport',
        name: 'studentFillProjectTrainningReport',
        component: () => import('@/views/trainning/studentFillProjectTrainningReport'),
        meta: { title: '填写项目开题报告', icon: 'form' , roles: [] },
      },
      {
        path: 'studentFillProjectTrainningReportStart',
        name: 'studentFillProjectTrainningReportStart',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportStart'),
        meta: { title: '填写项目开题报告', icon: 'form' , roles: ['29'] },
      },
      {
        path: 'studentFillProjectTrainningReportMiddle',
        name: 'studentFillProjectTrainningReportMiddle',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportMiddle'),
        meta: { title: '填写项目中期报告', icon: 'form', roles: ['30'] }
      },
      {
        path: 'studentFillProjectTrainningReportFinal',
        name: 'studentFillProjectTrainningReportFinal',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportFinal'),
        meta: { title: '填写项目结题报告', icon: 'form', roles: ['31'] }
      },
      {
        path: 'studentUploadAchieve',
        component: () => import('@/views/trainning/studentUploadAchieve'),
        name: 'studentUploadAchieve',
        meta: { title: '节能减排课程成果提交', icon: 'form', roles: ['32'] }
      },
      {
        path: 'tutorViewProjectList',
        component: () => import('@/views/trainning/tutorViewProjectList'),
        name: 'tutorViewProjectList',
        meta: { title: '老师查看创新训练项目申请情况', icon: 'form', roles: ['36'] }
      },
      {
        path: 'tutorViewStudentWorkLog',
        component: () => import('@/views/trainning/tutorViewStudentWorkLog'),
        name: 'tutorViewStudentWorkLog',
        meta: { title: '查看学生工作日志', icon: 'form', roles: ['37'] }
      },
      {
        path: 'tutorCheckProjectResoureceApply',
        component: () => import('@/views/trainning/tutorCheckProjectResoureceApply'),
        name: 'tutorCheckProjectResoureceApply',
        meta: { title: '审批学生观摩项目资源申请', icon: 'form', roles: ['38'] }
      },
      {
        path: 'tutorPracticeEnergyCheck',
        component: () => import('@/views/trainning/tutorPracticeEnergyCheck'),
        name: 'tutorPracticeEnergyCheck',
        meta: { title: '观摩项目考勤', icon: 'form', roles: ['39'] }
      },
      {
        path: 'tuorPracticeEnergyDetail',
        component: () => import('@/views/trainning/tuorPracticeEnergyDetail'),
        name: 'tuorPracticeEnergyDetail',
        hidden: true,
        meta: { title: '观摩项目考勤详情', icon: 'form', roles: [] }
      },
      {
        path: 'groupDetail',
        component: () => import('@/views/trainning/groupDetail'),
        name: 'groupDetail',
        hidden: true,
        meta: { title: '小组信息', icon: 'form', roles: [] }
      },
      {
        path: 'tuorPracticeEnergyAfterDetail',
        component: () => import('@/views/trainning/tuorPracticeEnergyAfterDetail'),
        name: 'tuorPracticeEnergyAfterDetail',
        hidden: true,
        meta: { title: '观摩项目考勤详情', icon: 'form', roles: [] }
      },
      {
        path: 'tutorCheckProjectTrainningReportList',
        component: () => import('@/views/trainning/tutorCheckProjectTrainningReportList'),
        name: 'tutorCheckProjectTrainningReportList',
        meta: { title: '审查创新训练报告列表', icon: 'form', roles: ['40'] }
      },
      {
        path: 'tutorCheckProjectTrainningReport',
        component: () => import('@/views/trainning/tutorCheckProjectTrainningReport'),
        name: 'tutorCheckProjectTrainningReport',
        meta: { title: '审查创新训练报告', icon: 'form', roles: [] }
      },
      {
        path: 'tutorViewProjectAchieve',
        component: () => import('@/views/trainning/tutorViewProjectAchieve'),
        name: 'tutorViewProjectAchieve',
        meta: { title: '查看创新训练成果', icon: 'form', roles: ['43'] }
      },
      {
        path: 'tutorProjectTrainningScoreSubmit',
        component: () => import('@/views/trainning/tutorProjectTrainningScoreSubmit'),
        name: 'TutorProjectTrainningScoreSubmit',
        meta: { title: '提交创新训练成绩', icon: 'form', roles: ['44'] }
      },
      {
        path: 'projectTrainningProjectInfo',
        name: 'projectTrainningProjectInfo',
        component: () => import('@/views/trainning/projectTrainningProjectInfo'),
        meta: { title: '创新项目详细', icon: 'user' , roles: [] }
      },
    ]
  },
  {
    path: '/graduate',
    component: Layout,
    name: 'graduate',
    meta: {
      title: '本科毕业设计',
      icon: 'example',
      roles: ['45']
    },
    children: [
      {
        path: 'commTableFileDownload',
        name: 'commTableFileDownload',
        component: () => import('@/views/comm/commTableFileDownload.vue'),
        meta: { title: '常用表格下载', icon: 'user' , roles: [53] }
      },
      {
        path: 'studentGeaduateDesignApply',
        name: 'studentGeaduateDesignApply',
        component: () => import('@/views/graduate/studentGeaduateDesignApply'),
        meta: { title: '学生课题申请', icon: 'user' , roles: ['46'] }
      },
      {
        path: 'studentViewGeaduateDesignApply',
        name: 'studentViewGeaduateDesignApply',
        component: () => import('@/views/graduate/studentViewGeaduateDesignApply'),
        hidden: true,
        meta: { title: '查看申请状态', icon: 'user' , roles: ['47'] }
      },
      {
        path: 'tutorSubmitGeaduateDesignProject',
        name: 'tutorSubmitGeaduateDesignProject',
        component: () => import('@/views/graduate/tutorSubmitGeaduateDesignProject'),
        meta: { title: '提交课题申请表', icon: 'password' , roles: ['48'] }
      },
      {
        path: 'tutorSubmitGeaduateDesignProjectDetail',
        name: 'tutorSubmitGeaduateDesignProjectDetail',
        component: () => import('@/views/graduate/tutorSubmitGeaduateDesignProjectDetail'),
        hidden: true,
        meta: { title: '课题申请表', icon: 'password'  }
      },
      {
        path: 'tutorSubmitGeaduateDesignProjectEditDetail',
        name: 'tutorSubmitGeaduateDesignProjectEditDetail',
        component: () => import('@/views/graduate/tutorSubmitGeaduateDesignProjectEditDetail'),
        hidden: true,
        meta: { title: '编辑课题申请表', icon: 'password'  }
      },
      {
        path: 'tutorConfirmGeaduateDesignApply',
        name: 'tutorConfirmGeaduateDesignApply',
        component: () => import('@/views/graduate/tutorConfirmGeaduateDesignApply'),
        meta: { title: '确认学生课题', icon: 'password'  }
      },
      {
        path: 'subjectDocumentManagement',
        name: 'subjectDocumentManagement',
        component: () => import('@/views/graduate/subjectDocumentManagement'),
        meta: { title: '课题文档管理', icon: 'password', roles: ['49']  }
      }
    ]
  },
  {
    path: '/masterproject',
    component: Layout,
    name: 'masterproject',
    meta: {
      title: '本硕连读项目',
      icon: 'example',
      roles: ['34']
    },
    children: [
      {
        path: 'commTableFileDownload',
        name: 'commTableFileDownload',
        component: () => import('@/views/comm/commTableFileDownload.vue'),
        meta: { title: '常用表格下载', icon: 'user' , roles: [53] }
      },
      {
        path: 'tutorProjectInfo',
        name: 'tutorProjectInfo',
        component: () => import('@/views/masterproject/tutorProjectInfo'),
        meta: { title: '导师项目情况', icon: 'user' , roles: ['5'] }
      },
      {
        path: 'stuChooseProject',
        name: 'stuChooseProject',
        component: () => import('@/views/masterproject/stuChooseProject'),
        meta: { title: '学生申请项目', icon: 'user' , roles: ['6'] }
      },
      {
        path: 'projectTutorChooseStu',
        name: 'projectTutorChooseStu.vue',
        component: () => import('@/views/masterproject/projectTutorChooseStu'),
        hidden: true,
        meta: { title: '项目学生申请情况表', icon: 'user' , }
      },
      {
        path: 'tutorProjectInfoDetail',
        name: 'tutorProjectInfoDetail',
        component: () => import('@/views/masterproject/tutorProjectInfoDetail'),
        hidden: true,
        meta: { title: '导师项目情况表', icon: 'user' , }
      },
      {
        path: 'stuProjectDetail',
        name: 'stuProjectDetail',
        component: () => import('@/views/masterproject/stuProjectDetail'),
        hidden: true,
        meta: { title: '导师确定项目', icon: 'user' , }
      },

      {
        path: 'tutorProjectInfoList',
        name: 'tutorProjectInfoList',
        component: () => import('@/views/masterproject/tutorProjectInfoList'),
        meta: { title: '导师确认学生', icon: 'password' }
      }
    ]
  },
  {
    path: '/tutor',
    component: Layout,
    name: 'tutor',
    meta: {
      title: '导师制',
      icon: 'example',
      roles: ['2']
    },
    children: [
      {
        path: 'commTableFileDownload',
        name: 'commTableFileDownload',
        component: () => import('@/views/comm/commTableFileDownload.vue'),
        meta: { title: '常用表格下载', icon: 'user' , roles: [53] }
      },
      {
        path: 'tutorChooseStu',
        name: 'tutorChooseStu',
        component: () => import('@/views/tutor/tutorChooseStu'),
        meta: { title: '导师确认学生', icon: 'user' , roles: ['4'] }
      },
      {
        path: 'stuChooseTutor',
        name: 'stuChooseTutor',
        component: () => import('@/views/tutor/stuChooseTutor'),
        meta: { title: '选择导师', icon: 'user' , roles: ['50'] }
      },
      {
        path: 'stuTutor',
        name: 'stuTutor',
        component: () => import('@/views/tutor/stuTutor'),
        hidden: true,
        meta: { title: '已确认导师', icon: 'user' , }
      },
      {
        path: 'stuInfomations',
        name: 'stuInfomations',
        hidden: true,
        component: () => import('@/views/tutor/stuInfomations'),
        meta: { title: '学生信息', icon: 'user'}
      }
    ]
  },
  {
    path: '/modular',
    component: Layout,
    name: 'modular',
    meta: {
      title: '模块划分',
      icon: 'example',
      roles: ['20']
    },
    children: [
      {
        path: 'stuChooseModular',
        name: 'stuChooseModular',
        component: () => import('@/views/modular/stuChooseModular'),
        meta: { title: '学生申请模块', icon: 'user' , roles: ['21'] }
      },
      {
        path: 'modularInfo',
        name: 'modularInfo',
        component: () => import('@/views/modular/modularInfo'),
        meta: { title: '摸块划分情况', icon: 'user' , roles: [] }
      }
    ]
  },

  {
    path: '/course',
    component: Layout,
    name: 'course',
    meta: {
      title: '作业管理',
      icon: 'example',
      roles: ['53']
    },
    children: [
      {
        path: 'studentAssignmentUpload',
        name: 'studentAssignmentUpload',
        component: () => import('@/views/course/studentAssignmentUpload'),
        meta: { title: '学生作业上传', icon: 'user' , roles: ['54'] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '修改密码', icon: 'password' , roles: ['16'] }
      },
      {
        path: 'courseDetail',
        name: 'courseDetail',
        hidden: true,
        component: () => import('@/views/course/courseDetail'),
        meta: { title: '课程作业下载', icon: 'user'  }
      },
      {
        path: 'teacherHomeworkDownload',
        name: 'teacherHomeworkDownload',
        component: () => import('@/views/course/teacherHomeworkDownload'),
        meta: { title: '老师作业下载', icon: 'user' , roles: ['55'] }
      }
    ]
  },


  { path: '/', redirect: '/login', hidden: true },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
