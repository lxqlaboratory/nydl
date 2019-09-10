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
