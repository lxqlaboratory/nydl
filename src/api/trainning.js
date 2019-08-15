import request from '@/utils/request'

export function practiceProjectTutorGrade() {
  return request({
    url: '/nydlWeb/practiceProjectTutorGrade',
    method: 'POST',
    data: {}
  })
}
