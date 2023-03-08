import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import store from '@/store';
import { cloneDeep } from 'lodash-es';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
const pinia = createPinia();

// 动态获取 base 配置选项
const base = import.meta.env.BASE_URL;
console.log('Base URL:', base);

// piniaPluginPersistedstate是一个插件，用于持久化pinia的状态
pinia.use(piniaPluginPersistedstate);
app.use(ElementPlus);
app.use(pinia);
app.use(store);
app.use(router);
app.mount('#app');
