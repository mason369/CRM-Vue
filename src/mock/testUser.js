// /mock/testUser.js
export default [
    // 用户登录
    {
        // 请求地址
        url     : '/api/user/login',
        // 请求方法
        method  : 'post',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                data   : {
                    token   : 'Tokenasdfasdfasdfasdfasdfasd',
                    username: '鸡你太美'
                }
            };
        }
    }
];
