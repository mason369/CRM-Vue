import http, { Response } from '@/utils/http';
// 用户登录
export const USER_LOGIN = '/user/login';
// 用户注册
export const USER_REGISTER = '/user/addUser';
// 用户分页查询
export const USER_PAGE_CONDITION_LIST_USER = '/user/pageConditionListUser';
// 添加用户
export const USER_ADD_USER = '/user/addUser';

/**
 * 查询用户响应体
 * @interface UserList
 * @property {string} userId - 用户 ID.
 * @property {string} username - 用户名.
 * @property {string | number} pwd - 密码.
 * @property {string} nickName - 用户昵称.
 * @property {string} userCreateDate - 用户创建时间.
 * @property {string} userPhoneNum - 用户手机号.
 * @property {string} userPermission - 用户权限.
 * @property {string} userRole - 用户角色.
 * */
export interface UserList {
    userId: string;
    username: string;
    pwd: string;
    nickName: string;
    userCreateDate: number | string;
    userPhoneNum: string;
    userPermission: string;
    userRole: string;
}

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
 * 添加用户信息接口
 * @interface AddUser
 * @property {string} nickName - 用户昵称
 * @property {string | number} pwd - 用户密码
 * @property {string} userCreateDate - 用户创建时间
 * @property {string} userId - 用户 ID
 * @property {string} userPermission - 用户权限
 * @property {string} userPhoneNum - 用户手机号
 * @property {string} userRole - 用户角色
 * @property {string} username - 用户名
 */
export interface AddUser {
    nickName: string;
    pwd: string;
    userCreateDate: string;
    userId: string;
    userPermission: string;
    userPhoneNum: string;
    userRole: string;
    username: string;
}

/**
 * 提供用户相关的 API.
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

    /**
     * 发起用户注册请求.
     */
    getUserRegister(user: IUserRegister): Promise<Response>;

    /**
     * 用户查询
     * @param current 当前页
     * @param size 每页条数
     * @returns {Promise<Response>}
     */
    getUserPageConditionListUser(
        current: number,
        size: number,
    ): Promise<Response>;
    /**
     * 添加用户
     * */
    getUserAddUser(user: AddUser): Promise<Response>;
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

    /**
     * 用户查询
     * @param current 当前页
     * @param size 每页条数
     */
    getUserPageConditionListUser(
        current: number,
        size: number
    ): Promise<Response> {
        return http.post(
            USER_PAGE_CONDITION_LIST_USER + '/' + current + '/' + size
        );
    }

    /**
     * 添加用户
     */
    getUserAddUser(user: AddUser): Promise<Response> {
        return http.put(USER_ADD_USER, user);
    }
}

export default new UserService();
