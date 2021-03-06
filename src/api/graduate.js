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

export function tutorResearchConfirmStudentApply(data) {
  return request({
    url: '/web/tutorResearchConfirmStudentApply',
    method: 'POST',
    data
  })
}


export function pdfDownload(data) {
  return request({
    url: '/webNydl/exportGraduateTeacherResearchApply',
    method: 'POST',
    data
  })
}

// 学生
export function studentApplyRearchListInit() {
  return request({
    url: '/webNydl/studentApplyRearchListInit',
    method: 'POST',
    data: {}
  })
}

export function studentApplyRearchListInitByCondition(data) {
  return request({
    url: '/webNydl/studentApplyRearchListInit',
    method: 'POST',
    data
  })
}

export function studentApplySubmit(data) {
  return request({
    url: '/webNydl/studentApplySubmit',
    method: 'POST',
    data
  })
}

export function studentApplyDelete(data) {
  return request({
    url: '/webNydl/studentApplyDelete',
    method: 'POST',
    data
  })
}


export function graduateTeacherResearchApplyInfoShow() {
  return request({
    url: '/webNydl/graduateTeacherResearchApplyInfoShow',
    method: 'POST',
    data: {}
  })
}


export function updateGraduateScore(data) {
  return request({
    url: '/webNydl/updateGraduateScore',
    method: 'POST',
    data
  })
}
