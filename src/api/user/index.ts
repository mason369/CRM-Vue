import http, { Response } from '@/utils/http';
// 用户登录
export const USER_LOGIN = '/user/login';
// 用户注册
export const USER_REGISTER = '/user/addUser';

/**
 * 表示一个用户登录请求体.
 *
 * @interface IUserLogin
 * @property {string} username - 用户名.
 * @property {string | number} pwd - 密码.
 */
export interface IUserLogin {
    username: string;
    pwd: string | number;
}

/**
 * 表示一个用户注册请求体.
 * @interface IUserRegister
 * @property {string} username - 用户名.
 * @property {string | number} pwd - 密码.
 * @property {string} userPhoneNum - 用户手机号.
 * @property {string} nickName - 用户昵称.
 * */
export interface IUserRegister {
    username: string;
    pwd: string | number;
    userPhoneNum: string;
    nickName: string;
}

/**
 * 表示用户信息的接口.
 *
 * @interface UserInfo
 * @property {string} nickName - 用户昵称.
 * @property {string | number} pwd - 用户密码.
 * @property {string} userCreateDate - 用户创建时间.
 * @property {string} userId - 用户 ID.
 * @property {string} userPermission - 用户权限.
 * @property {string} userPhoneNum - 用户手机号.
 * @property {string} userRole - 用户角色.
 * @property {string} username - 用户名.
 * @property {string} userCreateDate - 用户创建时间.
 *
 */
export interface UserInfo {
    nickName: string;
    pwd: string | number;
    userCreateDate: string;
    userId: string;
    userPermission: string;
    userPhoneNum: string;
    userRole: string;
    username: string;
}

/**
 * 提供用户相关的 API.
 *
 * @interface userApi
 * @property {getUserLogin} getUserLogin - 发起用户登录请求.
 * @property {getUserInfo} getUserInfo - 发起获取用户信息请求.
 */
export interface userApi {
    /**
     * 发起用户登录请求.
     *
     * @param {IUserLogin} user - 用户登录请求体.
     * @async
     * @returns {Promise<Response>} 包含响应数据的 Promise 对象.
     */
    getUserLogin(user: IUserLogin): Promise<Response>;
}

/**
 * 封装和管理与用户相关的 API.
 *
 * @class UserService
 */
class UserService implements userApi {
    /**
     * 发起用户登录请求.
     * @async
     * @param {IUserLogin} user - 用户登录请求体.
     * @returns {Promise<Response>} 包含响应数据的 Promise 对象.
     */
    getUserLogin(user: IUserLogin): Promise<Response> {
        return http.post(USER_LOGIN, user);
    }

    /**
     * 发起用户注册请求.
     * @async
     * @param {IUserRegister} user - 用户注册请求体.
     * @returns {Promise<Response>} 包含响应数据的 Promise 对象.
     */
    getUserRegister(user: IUserRegister): Promise<Response> {
        return http.post(USER_REGISTER, user);
    }
}

export default new UserService();
