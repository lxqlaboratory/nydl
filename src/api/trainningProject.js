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

export function practiceEnergyTeacherCheck() {
  return request({
    url: '/nydlWeb/practiceEnergyTeacherCheck',
    method: 'POST',
    data: {}
  })
}

export function practiceWorkCheckListSub(data) {
  return request({
    url: '/nydlWeb/practiceWorkCheckListSub',
    method: 'POST',
    data
  })
}



export function practiceWorkCheckListInit(data) {
  return request({
    url: '/nydlWeb/practiceWorkCheckListInit',
    method: 'POST',
    data
  })
}

export function practiceProjectTutorGrade() {
  return request({
    url: '/nydlWeb/practiceProjectTutorGrade',
    method: 'POST',
    data: {}
  })
}

export function practiceProjectTutorGradeStu(data) {
  return request({
    url: '/nydlWeb/practiceProjectTutorGradeStu',
    method: 'POST',
    data
  })
}
export function practiceProjectallGradeLook() {
  return request({
    url: '/nydlWeb/practiceProjectallGradeLook',
    method: 'POST',
    data:{}
  })
}
export function labAllEnergyPracticeProjectListInit(data) {
  return request({
    url: '/nydlWeb/labAllEnergyPracticeProjectListInit',
    method: 'POST',
    data
  })
}
export function energyPracticeProjectStuApply(data) {
  return request({
    url: '/nydlWeb/energyPracticeProjectStuApply',
    method: 'POST',
    data
  })
}
  export function energyPracticeProjectStuApplyCancel(data) {
    return request({
      url: '/nydlWeb/energyPracticeProjectStuApplyCancel',
      method: 'POST',
      data
    })
  }
export function getStuProjectTrainningApplyStateData() {
  return request({
    url: '/nydlWeb/getStuProjectTrainningApplyStateData',
    method: 'POST',
    data: {}
  })
}
export function labEnergyPracticeResearchApplyInit(data) {
  return request({
    url: '/nydlWeb/labEnergyPracticeResearchApplyInit',
    method: 'POST',
    data
  })
}

export function getCheckProjectTrainningReportList() {
  return request({
    url: '/nydlWeb/getCheckProjectTrainningReportList',
    method: 'POST',
    data:{}
  })
}
export function checkProjectTrainningReportQuery(data) {
  return request({
    url: '/nydlWeb/getCheckProjectTrainningReportList',
    method: 'POST',
    data
  })
}
export function checkProjectTrainningReportInit(data) {
  return request({
    url: '/nydlWeb/checkProjectTrainningReportInit',
    method: 'POST',
    data
  })
}
export function checkProjectTrainningReportSubmit(data) {
  return request({
    url: '/nydlWeb/checkProjectTrainningReportSubmit',
    method: 'POST',
    data
  })
}


export function uploadProjectAttachFileInit() {
  return request({
    url: '/nydlWeb/uploadProjectAttachFileInit',
    method: 'POST',
    data: {}
  })
}


export function teacherDownloadProjectAttachFileInit() {
  return request({
    url: '/nydlWeb/teacherDownloadProjectAttachFileInit',
    method: 'POST',
    data: {}
  })
}

export function practiceEnergyDetail(data) {
  return request({
    url: '/nydlWeb/practiceEnergyDetail',
    method: 'POST',
    data
  })
}

export function fillLabProjectDailyRecordInit() {
  return request({
    url: '/nydlWeb/fillLabProjectDailyRecordInit',
    method: 'POST',
    data: {}
  })
}

export function fillLabProjectDailyRecordAdd(data) {
  return request({
    url: '/nydlWeb/fillLabProjectDailyRecordAdd',
    method: 'POST',
    data
  })
}

export function fillLabProjectDailyRecordDelete(data) {
  return request({
    url: '/nydlWeb/fillLabProjectDailyRecordDelete',
    method: 'POST',
    data
  })
}
