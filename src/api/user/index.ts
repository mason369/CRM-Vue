export const USER_LOGIN = '/auth/login';
const USER_DATA = '/api/user/data/query';

// 用户tokentest
export interface UserTokenTest {
    token: string;
    username: string;
}
// 用户登录
export interface UserLogin {
    username: string;
    password: string;
}
export interface UserDataState {
    date: string;
    name: string;
    address: string;
}

export interface userApi {
    getUserLogin(user: UserLogin): Promise<void>;
    getUserLoginTest(): Promise<{ data: UserDataState }>;
}

class UserService implements userApi {
    getUserLogin(user: UserLogin): Promise<void> {
        return http.post(USER_LOGIN, user);
    }
    getUserLoginTest(): Promise<{ data: UserDataState }> {
        return http.get(USER_DATA);
    }
}
export default new UserService();
