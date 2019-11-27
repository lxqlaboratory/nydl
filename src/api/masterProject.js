import request from '@/utils/request'
// 本硕连读项目

// 所有项目
export function getAllProjectInfo() {
  return request({
    url: '/web/getAllProjectInfo',
    method: 'POST',
    data: {}
  })
}
// 学生志愿项目
export function getProjectApplyInfo() {
  return request({
    url: '/web/getProjectApplyInfo',
    method: 'POST',
    data: {}
  })
}
// 学生提交志愿项目
export function stuApplyProjectSubmit(data) {
  return request({
    url: '/web/stuApplyProjectSubmit',
    method: 'POST',
    data
  })
}

// 导师项目情况
export function getProjectTutorInfo() {
  return request({
    url: '/web/getProjectTutorInfo',
    method: 'POST',
    data: {}
  })
}





export function checkMasterProjectMax() {
  return request({
    url: '/web/checkMasterProjectMax',
    method: 'POST',
    data: {}
  })
}


export function saveOrUpdataTutorProject(data) {
  return request({
    url: '/web/saveOrUpdataTutorProject',
    method: 'POST',
    data
  })
}


export function getProjectStudentApplyList(data) {
  return request({
    url: '/web/getProjectStudentApplyList',
    method: 'POST',
    data
  })
}

//删除课题
export function deleteTutorProject(data) {
  return request({
    url: '/web/deleteTutorProject',
    method: 'POST',
    data
  })
}



export function getTutorProjectDetail(data) {
  return request({
    url: '/web/getTutorProjectDetail',
    method: 'POST',
    data
  })
}


export function updateStudentProjectApplyState(data) {
  return request({
    url: '/web/updateStudentProjectApplyState',
    method: 'POST',
    data
  })
}
