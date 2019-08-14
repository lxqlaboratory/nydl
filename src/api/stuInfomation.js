import request from '@/utils/request'

export function studentInformationSubmitInit() {
  return request({
    url: '/nydlBean/studentInformationSubmitInit',
    method: 'POST',
    data: {}
  })
}
//学生个人信息提交
export function studentInformationSubmit(data) {
  return request({
    url: '/nydlBean/studentInformationSubmit',
    method: 'POST',
    data
  })
}
//加载市、区
export function getPlaceList() {
  return request({
    url: '/nydlBean/getPlaceList',
    method: 'POST',
    data: {}
  })
}
