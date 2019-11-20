import request from '@/utils/request'

/* 学生选导师-全部导师列表 */
export function getTeacherList() {
  return request({
    url: '/nydlBean/getTeacherList',
    method: 'POST',
    data: {}
  })
}
/* 学生选择导师-申请导师列表 */

export function getStudentTutorApplyInfoList() {
  return request({
    url: '/nydlBean/getStudentTutorApplyInfoList',
    method: 'POST',
    data: {}
  })
}

/* 学生选导师-提交申请 */
export function stuChooseTutorSubmit(data) {
  return request({
    url: '/nydlBean/stuChooseTutorSubmit',
    method: 'POST',
    data
  })
}

