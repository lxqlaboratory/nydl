import request from '@/utils/request'

export function webLogin(jsonForm) {
  return request({
    url: '/auth/webLogin',
    method: 'POST',
    data: jsonForm
  })
}

export function initMenu() {
  return request({
    url: '/web/initMenu',
    method: 'POST',
    data: {}
  })
}
