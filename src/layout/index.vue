<template>
  <div class="layout_container">
      <!-- 左侧菜单 -->
      <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false}">
        <Logo></Logo>
          <!-- 展示菜单 -->
          <el-scrollbar class="scrollbar" >
            <el-menu :collapse="LayOutSettingStore.fold ? true : false" :default-active=" $route.path" background-color="#F6E5AD">
                <Menu :menuList="userStore.menuRoutes"></Menu>
            </el-menu>
        </el-scrollbar>
      </div>
      <!-- 顶部导航 -->
      <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false}">
          <!-- layout组件的顶部导航tabbar -->
        <Tabbar></Tabbar>
      </div>
      <!-- 内容展示区域 -->
      <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false}">
        <router-view></router-view>
      </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
//获取路由对象
import { useRoute } from 'vue-router'
//引入layout，setting仓库
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
//获取用户相关仓库
//@ts-ignore
import useUserStore from '@/store/modules/user'
let userStore = useUserStore();
let $route = useRoute()
</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>

<style scoped lang="scss">    
.layout_container {
    width: 100%;
    height: 100vh;
    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;
        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
            .el-menu{
                border-right: none;
            } 
            &.fold {
            width: $base-menu-min-width;
        }
        }

    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        background-color: antiquewhite;
        left: $base-menu-width;
        transition: all 0.3s;
        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;
        background-color: aqua;
        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }
    }
}
</style>