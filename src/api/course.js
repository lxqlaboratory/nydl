import request from '@/utils/request'


export function uploadCourseHomeWorkAttachFileInit() {
  return request({
    url: '/nydlWeb/uploadCourseHomeWorkAttachFileInit',
    method: 'POST',
    data: {}
  })
}


export function getNydlCourseOfInfoListTeacher() {
  return request({
    url: '/nydlWeb/getNydlCourseOfInfoListTeacher',
    method: 'POST',
    data: {}
  })
}


export function teacherDownloadCourseHomeAttachFileInit(data) {
  return request({
    url: '/nydlWeb/teacherDownloadCourseHomeAttachFileInit',
    method: 'POST',
    data
  })
}
