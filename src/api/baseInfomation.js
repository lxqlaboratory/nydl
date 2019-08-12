import request from '@/utils/request'

export function studentPasswordSubmit(data) {
  return request({
    url: '/web/studentPasswordSubmit',
    method: 'POST',
    data
  })
}
