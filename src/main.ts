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
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

/**
 * 使用 try-catch 包装一个异步函数，可以捕获异常并输出错误日志。
 * @param func 待包装的异步函数。
 * @returns 新的异步函数，具有相同的参数和返回值类型，但会在发生异常时返回 undefined。
 */
function asyncTryCatch<
    T extends(...args: unknown[]) => Promise<unknown>,
    U = ReturnType<T>,
>(func: T): (...args: Parameters<T>) => Promise<U | undefined> {
    return async function(...args: Parameters<T>): Promise<U | undefined> {
        try {
            const result = await func(...args);
            return result as U;
        } catch (e) {
            // 异常处理逻辑
            console.log(`！！！在 ${func.name} 函数中捕获到异常： ${e}`);
            return undefined;
        }
    };
}
/**
 * 使用 try-catch 包装一个类的所有异步方法，可以捕获异常并输出错误日志。
 * @param target 待包装的类。
 * @returns 新的类，具有相同的参数和返回值类型，但会在发生异常时返回 undefined。
 * */
function classAsyncTryCatch<T extends new(...args: any[]) => object>(
    target: T
) {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
        const descriptor = Object.getOwnPropertyDescriptor(
            target.prototype,
            key
        );
        if (descriptor && typeof descriptor.value === 'function') {
            target.prototype[key] = asyncTryCatch(descriptor.value);
        }
    }
}
// 一个异步async/awit函数例子
// @classAsyncTryCatch测试
@classAsyncTryCatch
class Test {
    async test() {
        throw new Error(' test error');
    }
}
const test = new Test();
test.test();

// 动态获取 base 配置选项
const base = import.meta.env.BASE_URL;
console.log('Base URL:', base);

useRegisterSW();
app.use(pinia);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
