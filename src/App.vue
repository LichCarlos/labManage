<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">
// import request from './utils/request';
// import { onMounted } from 'vue';
// onMounted(()=>{
//   request({
//     url:'/user/login',
//     method: 'post',
//     data: {
//       username:'admin',
//       password:'123456'
//     }
//   }).then(res=>{
//     console.log(res)
//   })
// })

</script>

<style scoped lang="scss">
  div{
    h1{
      color: $color;
    }
  }
</style>
