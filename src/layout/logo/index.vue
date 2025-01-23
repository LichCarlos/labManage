<template>
  <div class="logo" v-if="setting.logoHidden">
<img :src="setting.logo">
<p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<script lang="ts">
export default {
    name: "Logo"
}
</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: rgb(0, 0, 152);
    display: flex;
    align-items: center;
    padding: 10px;
    img{
        width: 48px;
        height: 48px;
    }
    p{
       font-size: $base-logo-title-fontSize; 
       margin-left: 10px;
    }
}
</style>