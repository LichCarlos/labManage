import { createApp } from 'vue'
//@ts-ignore
import App from '@/App.vue'
//引入模板样式
import '@/styles/index.scss'
//将应用挂载到挂载点上
import globalComponent from '@/components';
//svg插件配置代码
import 'virtual:svg-icons-register';
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import router from './router';
//引入pinia仓库
import pinia from './store'
//配置国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn//设置国际化
});
//安装自定义插件
app.use(globalComponent);
//注册路由
app.use(router)
//引入模板样式
app.mount('#app')
//安装仓库
app.use(pinia)
