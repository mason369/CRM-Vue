import { defineStore } from 'pinia';
import UserService, { UserInfo, IUserLogin } from '@/api/user';

export const useUserStore = defineStore('user', {
    state: (): UserInfo => ({
        id      : 0,
        username: '',
        mobile  : 0,
        email   : ''
    }),
    getters: {
        hello: (state): string => 'Hello!' + state.username
    },
    actions: {
        // 异步 action，一般用来处理异步逻辑
        async login(user: IUserLogin): Promise<void> {
            const res = await UserService.getUserLogin(user);
            console.log(res);
        },
        //同步 action
        logout(): void {
            this.id = 0;
            this.username = '';
            this.mobile = 0;
            this.email = '';
        }
    },
    // 开启数据缓存
    persist: {
        storage: sessionStorage
    }
});
