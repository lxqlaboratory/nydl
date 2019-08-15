import request from '@/utils/request'

export function practiceEnergyTeacherCheck() {
  return request({
    url: '/nydlWeb/practiceEnergyTeacherCheck',
    method: 'POST',
    data: {}
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
