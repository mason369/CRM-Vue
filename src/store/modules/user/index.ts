/**
 * 用户登录信息
 *
 * @typedef {Object} IUserLogin
 * @property {string} username 用户名
 * @property {string} password 密码
 */

import { defineStore } from 'pinia';
import UserService, { UserInfo, IUserLogin } from '@/api/user';
import { storage } from '@/utils/storage';
import router from '@/router';

/**
 * User Store 模块。
 *
 * @typedef {ReturnType<typeof defineStore>} useUserStoreType
 */
export const useUserStore = defineStore('userInfo', {
    state: (): UserInfo => ({
        nickName      : '',
        pwd           : '',
        userCreateDate: '',
        userId        : '',
        userPermission: '',
        userPhoneNum  : '',
        userRole      : '',
        username      : ''
    }),

    getters: {
        /**
		 * 获取问候语和昵称拼接的字符串.
		 *
		 * @function hello
		 *
		 * @param {UserInfo} state - Vuex Store state 对象, 包含用户信息.
		 *
		 * @returns {String}
		 */
        hello: (state): string => 'Hello!' + state.nickName
    },

    actions: {
        /**
		 * 处理用户登录逻辑.
		 *
		 * 异步 action，一般用来处理异步逻辑.
		 *
		 * @function login
		 *
		 * @async
		 *
		 * @param {IUserLogin} user - 登录表单数据.
		 *
		 */
        async login(user: IUserLogin): Promise<void> {
            const { data, code } = await UserService.getUserLogin(user);

            if (code === 1) {
                this.nickName = data.user.nickName;
                this.pwd = data.user.pwd;
                this.userCreateDate = data.user.userCreateDate;
                this.userId = data.user.userId;
                this.userPermission = data.user.userPermission;
                this.userPhoneNum = data.user.userPhoneNum;
                this.userRole = data.user.userRole;
                this.username = data.user.username;
                console.log(data.user);
                // 保存用户信息到本地，maxAge 为相对缓存时间，单位s，默认1day，转换为expires(绝对时间)存储，传null不过期
                storage.setItem('userInfo', JSON.stringify(data.user), null);
                //跳转到首页
                await router.push('home');
            }
        },

        /**
		 * 处理用户登出逻辑.
		 *
		 * 同步 action.
		 *
		 * @function logout
		 */
        logout(): void {
            this.nickName = '';
            this.pwd = '';
            this.userCreateDate = '';
            this.userId = '';
            this.userPermission = '';
            this.userPhoneNum = '';
            this.userRole = '';
            this.username = '';

            // 删除本地用户信息
            storage.removeItem('userInfo');
        }
    }
});

/**
 * User Store 模块类型.
 *
 * @type {useUserStoreType}
 */
export type useUserStoreType = ReturnType<typeof useUserStore>;
