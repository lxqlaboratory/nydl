import request from '@/utils/request'

export function practiceEnergyTeacherCheck() {
  return request({
    url: '/nydlWeb/practiceEnergyTeacherCheck',
    method: 'POST',
    data: {}
  })
}

export function practiceWorkCheckListSub(data) {
  return request({
    url: '/nydlWeb/practiceWorkCheckListSub',
    method: 'POST',
    data
  })
}

export function practiceWorkCheckListInit(data) {
  return request({
    url: '/nydlWeb/practiceWorkCheckListInit',
    method: 'POST',
    data
  })
}

export function practiceProjectTutorGrade() {
  return request({
    url: '/nydlWeb/practiceProjectTutorGrade',
    method: 'POST',
    data: {}
  })
}

export function practiceProjectTutorGradeStu(data) {
  return request({
    url: '/nydlWeb/practiceProjectTutorGradeStu',
    method: 'POST',
    data
  })
}
export function practiceProjectallGradeLook() {
  return request({
    url: '/nydlWeb/practiceProjectallGradeLook',
    method: 'POST',
    data:{}
  })
}


