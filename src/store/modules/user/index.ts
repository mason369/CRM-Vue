import { defineStore } from 'pinia';
import UserLoginService, { UserTokenTest } from '@/api/user';

export const useUserStore = defineStore('user', {
    state: (): UserTokenTest => ({
        username: '',
        token   : ''
    }),
    getters: {
        hello: (state): string => 'Hello!' + state.username
    },
    actions: {
        // 异步 action，一般用来处理异步逻辑
        async login(): Promise<void> {
            const res = await UserLoginService.getUserLoginTest();
            console.log(res);
        },
        //同步 action
        logout(): void {
            this.token = '';
            this.username = '';
        }
    },
    // 开启数据缓存
    persist: {
        storage: sessionStorage
    }
});
