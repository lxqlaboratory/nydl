import request from '@/utils/request'

export function fillProjectTrainningReportInit(data) {
  return request({
    url: '/nydlWeb/fillProjectTrainningReportInit',
    method: 'POST',
    data
  })
}

export function fillProjectTrainningReport(data) {
  return request({
    url: '/nydlWeb/fillProjectTrainningReport',
    method: 'POST',
    data
  })
}
