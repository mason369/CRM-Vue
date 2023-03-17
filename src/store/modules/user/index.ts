import { defineStore } from 'pinia';
import UserService, { UserInfo, IUserLogin } from '@/api/user';

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
        hello: (state): string => 'Hello!' + state.nickName
    },
    actions: {
        // 异步 action，一般用来处理异步逻辑
        async login(user: IUserLogin): Promise<void> {
            const { data, code } = await UserService.getUserLogin(user);
            console.log(data.user);
            if (code === 1) {
                this.nickName = data.user.nickName;
                this.pwd = data.user.pwd;
                this.userCreateDate = data.user.userCreateDate;
                this.userId = data.user.userId;
                this.userPermission = data.user.userPermission;
                this.userPhoneNum = data.user.userPhoneNum;
                this.userRole = data.user.userRole;
                this.username = data.user.username;
            }
            console.log(this.nickName);
        },
        //同步 action
        logout(): void {
            this.nickName = '';
            this.pwd = '';
            this.userCreateDate = '';
            this.userId = '';
            this.userPermission = '';
            this.userPhoneNum = '';
            this.userRole = '';
            this.username = '';
        }
    },
    // 用于持久化数据
    persist: true
});
