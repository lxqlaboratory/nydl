import request from '@/utils/request'
// 本硕连读项目

// 所有项目
export function tutorRearchListInit() {
  return request({
    url: '/webNydl/tutorRearchListInit',
    method: 'POST',
    data: {}
  })
}
