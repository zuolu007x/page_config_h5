import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import { ConfigProvider } from 'vant'
declare module '@vue/runtime-core' {
    // 扩展 Vue 实例上的属性类型
    interface ComponentCustomProperties {
        $ywAuth: () => void // $ywAuth 属性的类型
    }
}
const app = createApp(App)
declare const ywAuth: any
app.config.globalProperties.$ywAuth = ywAuth

console.log('ywAuth123', ywAuth)
console.log('app', app)

app.use(router)
app.use(ConfigProvider)
app.mount('#app')
// app.use(router)
// app.mount('#app')
