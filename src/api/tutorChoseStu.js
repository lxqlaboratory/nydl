import request from '@/utils/request'

/* 导师获取报名学生列表 */
export function getStudentListCanConfirm() {
  return request({
    url: '/nydlBean/getStudentListCanConfirm',
    method: 'POST',
    data: {}
  })
}


export function tutorConformStudentTutorApplyInit() {
  return request({
    url: '/nydlBean/tutorConformStudentTutorApplyInit',
    method: 'POST',
    data: {}
  })
}

export function tutorConformStudentTutorApply(data) {
  return request({
    url: '/nydlBean/tutorConformStudentTutorApply',
    method: 'POST',
    data
  })
}
