import request from '@/utils/request'

export function fetchList(data) {
  return request({
    baseURL: 'http://localhost:8080',
    url: '/mfls/get?startId=1&endId=144',
    method: 'get',
    data
  })
}
