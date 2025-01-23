//登录接口所需参数类型
export interface LoginFormData {
  username?: string
  password?: string
}
interface dataType{
  token?:string
  messagr?:string
}
//登录接口返回的数据类型
export interface LoginResponseData {
  code?: number
  data?:  dataType
}
//服务器返回用户相关类型
interface userInfo{
  userId?: number
  avatar?: string
  username?: string
  password?: string 
  desc?: string
  roles?: string[]
  buttons?: string[]
  routes?: string[]
  token?: string
}
interface user{
  checkUser: userInfo
}

export interface userResponseData {
  code?: number
  data?: user
  username: '',
  avatar: '',

}


