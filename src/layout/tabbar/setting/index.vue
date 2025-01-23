<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <img :src="userStore.avatar" style="width: 24px;height: 24px;margin:0px 10px;border-radius: 50%;">
    <el-dropdown>
        <span class="el-dropdown-link">
{{ userStore.username }}1
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user';
import useLayOutSettingStore from '@/store/modules/setting';
import { useRouter } from 'vue-router';
let $router = useRouter();
//获取layout配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore();
let userStore = useUserStore();
const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh;
};
const fullScreen = () => {
    //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
    let full = document.fullscreenElement;
    //切换为全屏模式
    if (!full) {
        //文档根节点的方法requestFullscreen,实现全屏模式
        document.documentElement.requestFullscreen();
    } else {
        //变为不是全屏模式->退出全屏模式
        document.exitFullscreen();
    }
}
const logout = () =>{
    userStore.userLogout()
    $router.push('/login')
}
</script>

<script lang="ts">
export default {
    name: "Setting"
}
</script>

<style scoped lang="scss">

</style>