// /mock/testUser.js
export default [
    // 用户登录
    {
        // 请求地址
        url     : '/api/user/data/query',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                data   : [
                    { date: 19, name: 'yfjpl', address: 'quzqvrxkfw' },
                    { date: 29, name: 'tjkne', address: 'wzygcmhqux' },
                    { date: 73, name: 'oqhtn', address: 'bblshpufax' },
                    { date: 86, name: 'zjpje', address: 'ktulqxydsg' }
                ]
            };
        }
    }
];
