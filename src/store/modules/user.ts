//创建用户相关的小仓库
import { defineStore } from 'pinia';
//引入接口
import { reqLogin, reqUserInfo,reqLogout } from '@/api/user';
// //引入数据类型 mock假接口数据
// import type { LoginFormData,LoginResponseData } from '@/api/user/type';
import type { UserState } from './type/type';
//引入操作本地持久化工具方法
import { SET_TOKEN,GET_TOKEN,REMOVE_TOKEN } from '@/utils/token';
//引入常量路由
import { constantRoute } from '@/router/routes';
//获取路由器对象

//创建用户小仓库
let useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
      return {
          token: GET_TOKEN(),//用户唯一标识token
          menuRoutes: constantRoute,//仓库存储生成菜单需要数组(路由)
          username: '',
          avatar: '',
          //存储当前用户是否包含某一个按钮
          buttons:[],
      }

  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: any) {
      //登录请求
      let result: any = await reqLogin(data);
      console.log(result)
      //成功, 存储token
      //失败，返回失败信息
      if(result.code==200){
      //@ts-ignore
        this.token = (result.data.token as string)
       //@ts-ignore  //本地持久化
        SET_TOKEN((result.data?.token as string))
      }else{
        //@ts-ignore
        return Promise.reject(new Error(result.data.message))
      }
    },
          //获取用户信息方法
    async userInfo() {
      let result: any= await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data?.checkUser.username;
        this.avatar = result.data?.checkUser.avatar;
  }else{

  }
},
    async userLogout() {
      let result = await reqLogout()
      console.log(result)
      REMOVE_TOKEN()

  },
  getters: {

  }
}
})
 //获取用户信息

//对外暴露获取小仓库方法
export default useUserStore;