//@ts-ignore
import SvgIcon from './SvgIcon/index.vue'
//@ts-ignore
import Pagination  from './Pagination/index.vue';
//引入elementplus图标全局组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalComponent ={ SvgIcon, Pagination };
export default{
  //@ts-ignore
  install(app) {
    Object.keys(allGlobalComponent).forEach(key => {
      //@ts-ignore
      app.component(key, allGlobalComponent[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

  }
}