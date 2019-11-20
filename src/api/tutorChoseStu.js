import request from '@/utils/request'

/* 导师获取报名学生列表 */
export function getStudentListCanConfirm() {
  return request({
    url: '/nydlBean/getStudentListCanConfirm',
    method: 'POST',
    data: {}
  })
}

/*导师确认学生提交 */

export function submitStudentConfirm() {
  return request({
    url: '/nydlBean/submitStudentConfirm',
    method: 'POST',
    data: {}
  })
}


