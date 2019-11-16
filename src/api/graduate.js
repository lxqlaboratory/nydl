import request from '@/utils/request'

export function tutorResearchApplyList() {
  return request({
    url: '/webNydl/tutorResearchApplyList',
    method: 'POST',
    data: {}
  })
}


export function tutorResearchApplyListData(data) {
  return request({
    url: '/webNydl/tutorResearchApplyList',
    method: 'POST',
    data
  })
}

export function tutorResearchApplyInit(data) {
  return request({
    url: '/web/tutorResearchApplyInit',
    method: 'POST',
    data
  })
}

export function tutorResearchApplyDelete(data) {
  return request({
    url: '/web/tutorResearchApplyDelete',
    method: 'POST',
    data
  })
}


export function tutorResearchApplyInitData() {
  return request({
    url: '/web/tutorResearchApplyInit',
    method: 'POST',
    data: {}
  })
}

export function tutorResearchApply(data) {
  return request({
    url: '/web/tutorResearchApply',
    method: 'POST',
    data
  })
}
