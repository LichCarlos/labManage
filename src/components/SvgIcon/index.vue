<template>
  <div>
    <svg :style="{width,height}">  
      <use :xlink:href="prefix+'name'" :fill="color"></use>  
    </svg>  
  </div>
</template>

<script setup lang="ts">

//接收父组件传递参数
defineProps({
  //xlink:href
  prefix: {
    type: String,
    default:'#icon-'
  },
  name:String,
  color: {
    type: String,
    default:''
  },
  width: {
    type: String,
    default:'16px'
  },
  height: {
    type: String,
    default:'16px'
  }
})
</script>

<style scoped>

</style>