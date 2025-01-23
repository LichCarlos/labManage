<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到实验室管理平台</h2>
                    <el-form-item prop="username">
                        <el-input
                            :prefix-icon="User"
                            type="text"
                            v-model="loginForm.username"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                        :prefix-icon="Lock"
                            type="password"
                            show-password
                            v-model="loginForm.password"
                        ></el-input>
                    </el-form-item> 
                    <el-form-item>
                        <el-button
                            class="login_btn"
                            type="primary"
                            size="default"
                            @click="login"
                            :loading="loading"
                        >
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
  </template>
  <script setup lang="ts">
  import { getTime } from '@/utils/time'
  import { reactive,ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { ElNotification } from 'element-plus';
  import { Lock, User } from '@element-plus/icons-vue'
  //引入用户相关的小仓库
  import useUserStore from "@/store/modules/user";
  let loginForms = ref()
  let loading = ref(false)
  let useStore = useUserStore();
  //获取路由
  let $router = useRouter()
  let loginForm = reactive({ username: 'admin', password: '123456' })
  const login = async () => {
      //保证表单验证通过，发请求
    await loginForms.value.validate();
      loading.value = true
      try{
          await useStore.userLogin(loginForm)
          $router.push('/home')
          ElNotification({
              type:'success',
              message:'欢迎回来',
              title:`Hi,${getTime()}好`
          })
          loading.value = false
      }catch {
          loading.value = false
          ElNotification({
              type:'error',
              message:'登陆失败'
      })
  }
  }
  
  //自定义校验规则函数
  //@ts-ignore
  const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error('账号长度至少五位'));
  }
}
 //@ts-ignore
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error('密码长度至少六位'));
  }
}

  //定义表单校验需要配置对象
  const rules = {
    //规则对象属性:
    //required,代表这个字段务必要校验的
    //min:文本长度至少多少位
    //max:文本长度最多多少位
    //message:错误的提示信息
    //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
    username: [
      // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
      { trigger: 'change', validator: validatorUserName }
    ],
    password: [
      // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
      { trigger: 'change', validator: validatorPassword }
    ]
  }
  </script>
  
  <style lang="scss">
  .login_container {
    width: 100%; // 宽度浏览器的100%
    height: 100vh; // 视口高度
    background-image: url('@/assets/images/background.png') ;
    background-size: cover;  // 容器变化，图片进行拉伸，并保持宽高比
    .login_form {
        position: relative;
        top: 25vh;
        width: 80%;
        background-image: url('@/assets/images/login_form.png') ;
        background-size: cover;
        padding: 40px;
        h1 {
            font-size: 40px;
            color: white;
        }
        h2 {
            font-size: 20px;
            color: white;
            margin: 20px 0px;
        }
    }
    .login_btn {
        width: 100%;
    }
  }
  </style>