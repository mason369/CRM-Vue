import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import store from '@/store';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

const app = createApp(App);
const pinia = createPinia();

// 动态获取 base 配置选项
const base = import.meta.env.BASE_URL;
console.log('Base URL:', base);

useRegisterSW();
app.use(pinia);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
