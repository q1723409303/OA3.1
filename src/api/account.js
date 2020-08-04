import request from '@/utils/request'

const prefix = '/account/'
//登录
export function login (data) {
  return request({
    url: prefix + 'login',
    method: 'post',
    data
  })
}


export function logout () {
  return request({
    url: prefix + 'logout',
    method: 'post'
  })
}
//修改密码
export function edit_password (data) {
  return request({
    url: prefix + 'edit_password',
    method: 'post',
    data
  })
}
//获取用户信息
export function getInfo () {
  return request({
    url: prefix + 'info',
    method: 'get'
  })
}
//新增用户
export function add_user (data) {
  return request({
    url: prefix + 'register',
    method: 'post',
    data
  })
}
//修改用户
export function edit_user (data) {
  return request({
    url: prefix + 'info',
    method: 'post',
    data
  })
}
//更改用户状态
export function active_user (data) {
  return request({
    url: prefix + 'info',
    method: 'post',
    timeout: 5000,
    data
  })
}
//删除用户
export function del_user (data) {
  return request({
    url: prefix + 'del',
    method: 'post',
    timeout: 5000,
    data
  })
}
//获得用户类别
export function get_power_group () {
  return request({
    url: prefix + 'power_group',
    method: 'get'
  })
}



export function get_list (data) {
  return request({
    url: prefix + 'list',
    method: 'post',
    timeout: 5000,
    data
  })
}

export function get_publicist_list () {
  return request({
    url: prefix + 'get_publicist_list',
    method: 'post',
    timeout: 5000
  })
}
export function query_name (data) {
  return request({
    url: prefix + 'query_account',
    method: 'post',
    data
  })
}
