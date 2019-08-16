import request from '@/utils/request'

export function tutorInformationSubmitInit(data) {
  return request({
    url: '/web/tutorInformationSubmitInit',
    method: 'POST',
    data
  })
}
//学生个人信息提交
export function tutorInformationSubmit(data) {
  return request({
    url: '/web/tutorInformationSubmit',
    method: 'POST',
    data
  })
}
