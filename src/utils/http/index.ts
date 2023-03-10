/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import service, { AxiosRequestConfig } from './axios';
export * from './types';

// 封装请求
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
        service
            .request(config)
            .then((res) => {
                // 一些业务处理
                resolve(res.data);
            })
            .catch((err) => {
                console.log(' 请求失败：', err);
            });
    });
};
// 封装常用的请求方法
const http = {
    get<T = any>(url: string, params = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, params, ...config, method: 'GET' });
    },
    post<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'POST' });
    },
    put<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'PUT' });
    },
    delete<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'DELETE' });
    },
    // 上传文件，指定 'Content-Type': 'multipart/form-data'
    upload<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({
            url,
            data,
            ...config,
            method : 'POST',
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
};

export default http;
