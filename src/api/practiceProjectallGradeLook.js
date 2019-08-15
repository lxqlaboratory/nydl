import request from '@/utils/request'

export function practiceProjectallGradeLook() {
  return request({
    url: '/nydlWeb/practiceProjectallGradeLook',
    method: 'POST',
    data: {}
  })
}
