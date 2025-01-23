import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from "vite-plugin-mock"

// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(( { command, mode } ) =>{
  //获取环境下对应变量
	let env = loadEnv(mode,process.cwd());
  return{
    plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
      symbolId:'icon-[dir]-[name]',
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: command ==='serve',//开发阶段使用mock接口
    })
  ],
    resolve: { 
      alias: { 
        '@': path.resolve('./src') 
      } 
    },
    //css全局变量
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
        //代理跨域
          // server: {
          //   proxy: {
          //     [env.VITE_APP_BASE_API]: {
          //       target: env.VITE_SERVE,
          //       changeOrigin: true,
          //       rewrite: (path:any) => path.replace(/^\/api/, ''),
          //     },
          //   },
          // },
      },
    },
  }
})
