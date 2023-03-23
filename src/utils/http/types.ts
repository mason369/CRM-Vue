/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 定义通用响应类型
 * @template T 响应数据类型，默认为 any
 */
export interface Response<T = any> {
    /** 响应状态码 */
    code: number | string;
    /** 响应消息 */
    message: string;
    /** 响应数据 */
    data: T;
}
