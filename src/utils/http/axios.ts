import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Response } from './types';
// import { Toast } from 'vant';
import { ElMessage } from 'element-plus';
import router from '@/router';
// 重设axiosbaseURL
axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;

// 创建axios实例
const service = axios.create({
    // 根据不同env设置不同的baseURL
    baseURL          : import.meta.env.VITE_APP_API_BASE_URL,
    timeout          : 10000,
    responseType     : 'json',
    headers          : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    transformResponse: [
        function(data) {
            try {
                data = JSON.parse(data);
            } catch (e) {
                console.log(e);
            }
            return data;
        }
    ]
});
// axios实例拦截请求
service.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        config.headers = {
            ...config.headers
            // ...auth.headers()
            // 自定义headers，如token等
        };
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// axios实例拦截响应
// 错误处理器(ErrorHandler)接口
interface ErrorHandler {
    handle(response: AxiosResponse<Response>): void;
}

// 实现不同的错误处理器
// Token 过期错误处理器
class TokenExpiredErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const errMessage = 'Token expired';
        // 跳转至登录页
        router.push('/login').then((r) => r);
        // 显示错误提示信息
        ElMessage.error(errMessage);
    }
}

// 无权限错误处理器
class NoPermissionErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const errMessage = 'No permission';
        // 显示错误提示信息
        ElMessage.error(errMessage);
    }
}

// 默认错误处理器
class DefaultErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const { reason } = response.data;
        if (reason) ElMessage.error(reason);
    }
}

// 错误处理器映射表
const errorHandlers: Record<number, ErrorHandler> = {
    0: new DefaultErrorHandler(),
    1: new TokenExpiredErrorHandler(),
    2: new NoPermissionErrorHandler()
};

// 响应拦截器
const handleResponse = <T>(response: AxiosResponse<Response<T>>) => {
    const { code } = response.data;
    if (code !== 0) {
        const errorHandler = errorHandlers[code as number];
        errorHandler?.handle(response);
    }
    return response;
};
const message = (msg: string) => {
    // 默认使用 Element Plus 的 ElMessage.error 方法
    ElMessage.error(msg);
};

// 错误拦截器
const handleError = (error: AxiosError) => {
    message(error.message);
    return Promise.reject(error);
};

// 添加响应拦截器
service.interceptors.response.use(handleResponse, handleError);

export type { AxiosResponse, AxiosRequestConfig };

export default service;
