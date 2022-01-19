import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function reqLogout(data) {
  return request({
    url: '/api/logout',
    method: 'post',
    data
  })
}

export function reqGetToken(data){
  return request({
    url: '/api/token',
    method: 'post',
    data
  })
}