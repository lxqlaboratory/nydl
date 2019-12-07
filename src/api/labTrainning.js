import request from '@/utils/request'

export function getLabUndergradTeacherResearchApplyInfoListOfTutor() {
  return request({
    url: '/nydlWeb/getLabUndergradTeacherResearchApplyInfoListOfTutor',
    method: 'POST',
    data: {}
  })
}

export function searchLabUndergradTeacherResearchByYear(data) {
  return request({
    url: '/nydlWeb/getLabUndergradTeacherResearchApplyInfoListOfTutor',
    method: 'POST',
    data
  })
}


export function getLabUndergradTeacherResearchApplyInfo() {
  return request({
    url: '/nydlWeb/getLabUndergradTeacherResearchApplyInfo',
    method: 'POST',
    data: {}
  })
}

export function modgetLabUndergradTeacherResearchApplyInfo(data) {
  return request({
    url: '/nydlWeb/getLabUndergradTeacherResearchApplyInfo',
    method: 'POST',
    data
  })
}

export function updateLabUndergradTeacherResearchApplyInfo(data) {
  return request({
    url: '/nydlWeb/updateLabUndergradTeacherResearchApplyInfo',
    method: 'POST',
    data
  })
}


export function deleteLabUndergradTeacherResearchApplyInfo(data) {
  return request({
    url: '/nydlWeb/deleteLabUndergradTeacherResearchApplyInfo',
    method: 'POST',
    data
  })
}


export function getLabUndergradTeacherResearchApplyInfoListOfStudent() {
  return request({
    url: '/nydlWeb/getLabUndergradTeacherResearchApplyInfoListOfStudent',
    method: 'POST',
    data: {}
  })
}

export function studentApplyLabUndergradTeacherResearchApplyInfo(data) {
  return request({
    url: '/nydlWeb/studentApplyLabUndergradTeacherResearchApplyInfo',
    method: 'POST',
    data
  })
}


export function updateLabUndergradStuResearchApplyInfoConfirmState(data) {
  return request({
    url: '/nydlWeb/updateLabUndergradStuResearchApplyInfoConfirmState',
    method: 'POST',
    data
  })
}
