import request from '@/utils/request'



export function getNydlSystemCommTableFileList() {
  return request({
    url: '/comm/getNydlSystemCommTableFileList',
    method: 'POST',
    data: {}
  })
}


export function downloadCommTableAttachFileInit(data) {
  return request({
    url: '/comm/downloadCommTableAttachFileInit',
    method: 'POST',
    data
  })
}
