export const USER_LOGIN = '/auth/login';
const USER_DATA = '/api/user/data/query';

export interface UserLogin {
    username: string;
    token: string;
}
export interface UserDataState {
    date: string;
    name: string;
    address: string;
}

export interface userApi {
    getUserLogin(userData: object): Promise<UserLogin>;
    getUserData(): Promise<{ data: UserDataState }>;
}

class UserService implements userApi {
    getUserLogin(userData: object): Promise<UserLogin> {
        return http.post(USER_LOGIN, { userData });
    }
    getUserData(): Promise<{ data: UserDataState }> {
        return http.get(USER_DATA);
    }
}
export default new UserService();
