import request from '@/utils/request'

export function getAllModularInfoList() {
  return request({
    url: '/web/getAllModularInfoList',
    method: 'POST',
    data: {}
  })
}

export function getModularApplyInfo() {
  return request({
    url: '/web/getModularApplyInfo',
    method: 'POST',
    data: {}
  })
}

export function stuApplyModularSubmit(data) {
  return request({
    url: '/web/stuApplyModularSubmit',
    method: 'POST',
    data
  })
}
