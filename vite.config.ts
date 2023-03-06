import dotenv from 'dotenv'
import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import postcssImport from 'postcss-pxtorem'
import path from 'path'

dotenv.config()
// console.log('process.env.VITE_APP_URL', process.env)

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/page_config_h5/',
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    server: {
        proxy: {
            '/static/page_config_h5': {
                target: 'http://uattsm2.cmpay.com:5443',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/static\/page_config_h5/, 'dsop_sp_portal'),
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                postcssImport({
                    // 这里的rootValue就是你的设计稿大小
                    rootValue: 75,
                    propList: ['*'],
                    unitPrecision: 5, //保留rem小数点多少位
                    //selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
                    replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
                    mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
                    minPixelValue: 12, //px小于12的不会被转换
                }),
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 路径别名
        },
    },
})
