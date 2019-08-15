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
    meta: { title: '首页', icon: 'dashboard',roles: ['100'] }
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
        path: 'teacherInfomation',
        name: 'teacherInfomation',
        component: () => import('@/views/personInfo/teacherInfomation'),
        meta: { title: '教师个人信息', icon: 'user' , roles: ['3'] }
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
        path: 'studentApplyPracticeEnergy',
        name: 'studentApplyPracticeEnergy',
        component: () => import('@/views/trainning/studentApplyPracticeEnergy'),
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
        meta: { title: '学生申请创新训练项目资源', icon: 'form' , roles: ['26'] }
      },
      {
        path: 'studentProjectTrainningScoreView',
        name: 'studentProjectTrainningScoreView',
        component: () => import('@/views/trainning/studentProjectTrainningScoreView'),
        meta: { title: '查看节能减排课程成绩', icon: 'form' , roles: ['27'] }
      },
      {
        path: 'studentFillProjectTrainningReportStart',
        name: 'studentFillProjectTrainningReportStart',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportStart'),
        meta: { title: '填写项目开题报告', icon: 'form' , roles: ['29'] }
      },
      {
        path: 'studentFillProjectTrainningReportMiddle',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportMiddle'),
        name: 'studentFillProjectTrainningReportMiddle',
        meta: { title: '填写项目中期报告', icon: 'form', roles: ['30'] }
      },
      {
        path: 'studentFillProjectTrainningReportFinal',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportFinal'),
        name: 'studentFillProjectTrainningReportFinal',
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
        meta: { title: '审批学生创新训练项目资源申请', icon: 'form', roles: ['38'] }
      },
      {
        path: 'tutorPracticeEnergyCheck',
        component: () => import('@/views/trainning/tutorPracticeEnergyCheck'),
        name: 'tutorPracticeEnergyCheck',
        meta: { title: '观摩项目考勤', icon: 'form', roles: ['39'] }
      },
      {
        path: 'tutorCheckProjectTrainningReportListStart',
        component: () => import('@/views/trainning/tutorCheckProjectTrainningReportListStart'),
        name: 'tutorCheckProjectTrainningReportListStart',
        meta: { title: '审查创新训练开期报告', icon: 'form', roles: ['40'] }
      },
      {
        path: 'studentUploadAchieve',
        component: () => import('@/views/trainning/tutorCheckProjectTrainningReportListMiddle'),
        name: 'studentUploadAchieve',
        meta: { title: '审查创新训练中期报告', icon: 'form', roles: ['41'] }
      },
      {
        path: 'tutorCheckProjectTrainningReportListFinal',
        component: () => import('@/views/trainning/tutorCheckProjectTrainningReportListFinal'),
        name: 'tutorCheckProjectTrainningReportListFinal',
        meta: { title: '审查创新训练结题报告', icon: 'form', roles: ['42'] }
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
      }
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
        path: 'studentGeaduateDesignApply',
        name: 'studentGeaduateDesignApply',
        component: () => import('@/views/graduate/studentGeaduateDesignApply'),
        meta: { title: '学生课题申请', icon: 'user' , roles: ['46'] }
      },
      {
        path: 'studentViewGeaduateDesignApply',
        name: 'studentViewGeaduateDesignApply',
        component: () => import('@/views/graduate/studentViewGeaduateDesignApply'),
        meta: { title: '查看申请状态', icon: 'user' , roles: ['47'] }
      },
      {
        path: 'tutorSubmitGeaduateDesignProject',
        name: 'tutorSubmitGeaduateDesignProject',
        component: () => import('@/views/graduate/tutorSubmitGeaduateDesignProject'),
        meta: { title: '提交课题申请表', icon: 'password' , roles: ['48'] }
      },
      {
        path: 'tutorConfirmGeaduateDesignApply',
        name: 'tutorConfirmGeaduateDesignApply',
        component: () => import('@/views/graduate/tutorConfirmGeaduateDesignApply'),
        meta: { title: '确认学生课题', icon: 'password' , roles: ['49'] }
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
        path: 'tutorProjectInfoList',
        name: 'tutorProjectInfoList',
        component: () => import('@/views/masterproject/tutorProjectInfoList'),
        meta: { title: '导师确认学生', icon: 'password' , roles: ['52'] }
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
        meta: { title: '摸块划分情况', icon: 'user' , roles: ['20'] }
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
