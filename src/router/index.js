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
        path: 'ckcxxlxmsqzt',
        name: 'ckcxxlxmsqzt',
        component: () => import('@/views/pages/ckcxxlxmsqzt'),
        meta: { title: '查看创新训练项目申请状态', icon: 'form' , roles: ['23'] }
      },
      {
        path: 'cktdjbqk',
        name: 'cktdjbqk',
        component: () => import('@/views/pages/cktdjbqk'),
        meta: { title: '查看团队基本情况', icon: 'form' , roles: ['24'] }
      },
      {
        path: 'txcxxlxmrz',
        name: 'txcxxlxmrz',
        component: () => import('@/views/pages/txcxxlxmrz'),
        meta: { title: '填写创新训练项目日志', icon: 'form' , roles: ['25'] }
      },
      {
        path: 'xxsqcxxlxmzy',
        name: 'xxsqcxxlxmzy',
        component: () => import('@/views/pages/xxsqcxxlxmzy'),
        meta: { title: '学生申请创新训练项目资源', icon: 'form' , roles: ['26'] }
      },
      {
        path: 'ckjnjpkczcj',
        name: 'ckjnjpkczcj',
        component: () => import('@/views/pages/ckjnjpkczcj'),
        meta: { title: '查看节能减排课程成绩', icon: 'form' , roles: ['27'] }
      },
      {
        path: 'txxmktbg',
        name: 'txxmktbg',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportStart'),
        meta: { title: '填写项目开题报告', icon: 'form' , roles: ['29'] }
      },
      {
        path: 'txzqbg',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportMiddle'),
        name: 'txzqbg',
        meta: { title: '填写项目中期报告', icon: 'form', roles: ['30'] }
      },
      {
        path: 'txxmjtbg',
        component: () => import('@/views/trainning/studentFillProjectTrainningReportFinal'),
        name: 'txxmjtbg',
        meta: { title: '填写项目结题报告', icon: 'form', roles: ['31'] }
      },
      {
        path: 'jnjpkccgtj',
        component: () => import('@/views/pages/jnjpkccgtj'),
        name: 'jnjpkccgtj',
        meta: { title: '节能减排课程成果提交', icon: 'form', roles: ['32'] }
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
      roles: ['33']
    },
    children: [
      {
        path: 'stuInfomation',
        name: 'stuInfomation',
        component: () => import('@/views/personInfo/stuInfomation'),
        meta: { title: '学生课题申请', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'teacherInfomation',
        name: 'teacherInfomation',
        component: () => import('@/views/personInfo/teacherInfomation'),
        meta: { title: '查看申请状态', icon: 'user' , roles: ['3'] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '提交课题申请表', icon: 'password' , roles: ['16'] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '确认学生课题', icon: 'password' , roles: ['16'] }
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
      roles: ['33']
    },
    children: [
      {
        path: 'stuInfomation',
        name: 'stuInfomation',
        component: () => import('@/views/personInfo/stuInfomation'),
        meta: { title: '学生课题申请', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'teacherInfomation',
        name: 'teacherInfomation',
        component: () => import('@/views/personInfo/teacherInfomation'),
        meta: { title: '查看申请状态', icon: 'user' , roles: ['3'] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '提交课题申请表', icon: 'password' , roles: ['16'] }
      },
      {
        path: 'changepwd',
        name: 'changepwd',
        component: () => import('@/views/personInfo/changepwd'),
        meta: { title: '确认学生课题', icon: 'password' , roles: ['16'] }
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
      roles: ['33']
    },
    children: [
      {
        path: 'tutorProjectInfo',
        name: 'tutorProjectInfo',
        component: () => import('@/views/masterproject/tutorProjectInfo'),
        meta: { title: '导师项目情况', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'stuChooseProject',
        name: 'stuChooseProject',
        component: () => import('@/views/masterproject/stuChooseProject'),
        meta: { title: '学生申请项目', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'tutorProjectInfoList',
        name: 'tutorProjectInfoList',
        component: () => import('@/views/masterproject/tutorProjectInfoList'),
        meta: { title: '导师确认学生', icon: 'password' , roles: ['1'] }
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
      roles: ['33']
    },
    children: [
      {
        path: 'tutorChooseStu',
        name: 'tutorChooseStu',
        component: () => import('@/views/tutor/tutorChooseStu'),
        meta: { title: '导师确认学生', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'stuChooseTutor',
        name: 'stuChooseTutor',
        component: () => import('@/views/tutor/stuChooseTutor'),
        meta: { title: '选择导师', icon: 'user' , roles: ['1'] }
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
      roles: ['33']
    },
    children: [
      {
        path: 'stuChooseModular',
        name: 'stuChooseModular',
        component: () => import('@/views/modular/stuChooseModular'),
        meta: { title: '学生申请模块', icon: 'user' , roles: ['1'] }
      },
      {
        path: 'modularInfo',
        name: 'modularInfo',
        component: () => import('@/views/modular/modularInfo'),
        meta: { title: '摸块划分情况', icon: 'user' , roles: ['1'] }
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
