<template>
    <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="'/welcome'">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button
            style="margin: 10px 0 0 0; width: 100px"
            type="primary"
            plain
            @click="addUser"
            :icon="'Plus'"
            >新增用户
        </el-button>
        <div style="margin: 10px 0 0 0">
            <el-table align="center" :data="tableData" style="width: 100%">
                <el-table-column
                    align="center"
                    type="index"
                    label="序号"
                    width="60"
                />
                <el-table-column
                    align="center"
                    prop="username"
                    label="用户名"
                    width="100"
                />
                <el-table-column
                    align="center"
                    prop="nickName"
                    label="昵称"
                    width="180"
                />
                <el-table-column
                    align="center"
                    prop="userCreateDate"
                    label="用户创建时间"
                    width="197"
                />
                <el-table-column
                    align="center"
                    prop="userPhoneNum"
                    label="手机号"
                    width="180"
                />
                <el-table-column
                    align="center"
                    prop="userPermission"
                    label="权限"
                    width="180"
                />
                <el-table-column
                    align="center"
                    prop="userPhoneNum"
                    label="手机号"
                    width="180"
                />
                <el-table-column
                    align="center"
                    prop="userRole"
                    label="角色"
                    width="160"
                />
            </el-table>
            <el-pagination
                v-model:current-page="currentPage4"
                v-model:page-size="pageSize4"
                :page-sizes="[10, 20, 50, 1500]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
    <!--新增用户对话框-->
    <el-dialog v-model="dialogFormVisible" title="新增用户" class="dialog-form">
        <el-form :model="userForm" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="userForm.nickName" />
            </el-form-item>
            <el-form-item label="创建时间">
                <el-input v-model="userForm.userCreateDate" disabled />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userForm.pwd" />
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="userForm.userPhoneNum" />
            </el-form-item>
            <el-form-item label="权限">
                <el-input v-model="userForm.userPermission" />
            </el-form-item>
            <el-form-item label="角色">
                <el-input v-model="userForm.userRole" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">退出</el-button>
                <el-button @click="resetBtn = false">重置</el-button>
                <el-button type="primary" @click="addOneUser"> 提交 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import UserService, { AddUser } from '@/api/user';
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

const tableData = reactive<AddUser[]>([]);
// 当前页
const currentPage4 = ref<number>(1);
// 每页条数
const pageSize4 = ref<number>(10);
const small = ref<boolean>(false);
const background = ref<boolean>(false);
const disabled = ref<boolean>(false);
const resetBtn = ref<boolean>(false);
const dialogFormVisible = ref(false);

onMounted(() => {
    getList(currentPage4.value, pageSize4.value);
});
/**
 * 获取用户列表
 * @param currentPage4 当前页
 * @param pageSize4 每页条数
 * @returns {Promise<void>}
 */
const getList = async(
    currentPage4: number,
    pageSize4: number
): Promise<void> => {
    const { data } = await UserService.getUserPageConditionListUser(
        currentPage4,
        pageSize4
    );

    const newData = data.userList.map((item: any) => {
        const date = new Date(item.userCreateDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        item.userCreateDate = `${year}-${month}-${day}`;
        return item;
    });

    // 删除原有的 tableData 数组中的元素
    tableData.splice(0, tableData.length);

    // 添加新的元素
    tableData.push(...newData);
};

// 返回一个字符串，该字符串是一个随机的昵称
const nickNameRow = () => {
    const nickNameArr = [
        '小明',
        '小红',
        '小刚',
        '小花',
        '小王',
        '小李',
        '小张',
        '小赵',
        '小孙',
        '小周',
        '小吴',
        '小郑',
        '小冯',
        '小陈',
        '小蒋',
        '小沈',
        '小韩',
        '小杨',
        '小朱',
        '小秦',
        '小尤',
        '小许',
        '小何',
        '小吕',
        '小施',
        '小张',
        '小孔',
        '小曹',
        '小严',
        '小华',
        '小金',
        '小魏',
        '小陶',
        '小姜',
        '小戚',
        '小谢',
        '小邹',
        '小喻',
        '小柏',
        '小水',
        '小窦',
        '小章',
        '小云',
        '小苏',
        '小潘',
        '小葛',
        '小奚',
        '小范',
        '小彭',
        '小郎',
        '小鲁',
        '小韦',
        '小昌',
        '小马',
        '小苗',
        '小凤',
        '小花',
        '小方',
        '小俞',
        '小任',
        '小袁',
        '小柳',
        '小酆',
        '小鲍',
        '小史',
        '小唐',
        '小费',
        '小廉',
        '小岑',
        '小薛',
        '小雷',
        '小贺',
        '小倪',
        '小汤',
        '小滕',
        '小殷',
        '小罗',
        '小毕',
        '小郝',
        '小邬',
        '小安',
        '小常'
    ];
    const nickName =
        nickNameArr[Math.floor(Math.random() * nickNameArr.length)];
    return nickName;
};
// 返回一个字符串，该字符串是一个随机的用户名
const nickName = () => {
    const nickNameArr = [
        '小明',
        '小红',
        '小刚',
        '小花',
        '小王',
        '小李',
        '小张',
        '小赵',
        '小孙',
        '小周',
        '小吴',
        '小郑',
        '小冯',
        '小陈',
        '小蒋',
        '小沈',
        '小韩',
        '小杨',
        '小朱',
        '小秦',
        '小尤',
        '小许',
        '小何',
        '小吕'
    ];
    const nickName =
        nickNameArr[Math.floor(Math.random() * nickNameArr.length)];
    return nickName;
};
// 返回一个字符串，该字符串是一个随机的11位手机号
const phoneNum = () => {
    const phoneNumArr = [
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678',
        '13512345679',
        '13512345670',
        '13512345671',
        '13512345672',
        '13512345673',
        '13512345674',
        '13512345675',
        '13512345676',
        '13512345677',
        '13512345678'
    ];
    const phoneNum =
        phoneNumArr[Math.floor(Math.random() * phoneNumArr.length)];
    return phoneNum;
};
// 返回一个字符串，该字符串是一个随机的用户角色
const role = () => {
    const roleArr = [
        '超级管理员',
        '管理员',
        '普通用户',
        '游客',
        '人力资源',
        '财务',
        '销售',
        '采购',
        '仓库',
        '生产',
        '质检',
        '物流',
        '售后',
        '客服',
        '运营',
        '市场',
        '商务',
        '技术',
        '研发',
        '设计',
        '产品',
        '运维',
        '测试',
        '编辑',
        '客户',
        '供应商',
        '合作伙伴',
        '渠道',
        '分销',
        '代理',
        '厂家'
    ];
    const role = roleArr[Math.floor(Math.random() * roleArr.length)];
    return role;
};
// 返回一个字符串，该字符串是一个随机的用户权限
const permission = () => {
    const permissionArr = [
        '所有权限',
        '仅查看',
        '仅新增',
        '仅修改',
        '仅删除',
        '仅审核',
        '仅导出',
        '仅导入',
        '仅打印',
        '仅下载',
        '仅上传',
        '仅分享',
        '仅收藏',
        '仅点赞',
        '仅评论'
    ];
    const permission =
        permissionArr[Math.floor(Math.random() * permissionArr.length)];
    return permission;
};

// 使用函数将以上信息返回
const addUserForm = () => {
    return {
        // nickName      : 'amagi',
        // pwd           : 'ctrlmusic',
        // // 获取当前时间格式为：2021-04-20T01:16:07.961Z
        // userCreateDate: new Date().toISOString(),
        // // 返回一个随机数五位数到七位数
        // userId        : Math.floor(Math.random() * 1000000 + 100000).toString(),
        // userPermission: '唱',
        // userPhoneNum  : '跳',
        // userRole      : 'rap',
        // username      : '篮球'
        nickName      : '唱、跳、rap、篮球、music',
        pwd           : 'ctrlmusic',
        // 获取当前时间格式为：2021-04-20T01:16:07.961Z
        userCreateDate: new Date().toISOString(),
        // 返回一个随机数五位数到七位数
        userId        : Math.floor(Math.random() * 1000000 + 100000).toString(),
        userPermission: permission(),
        userPhoneNum  : phoneNum(),
        userRole      : role(),
        username      : nickNameRow()
    };
};

let userForm = reactive(addUserForm());
// 新增用户
const addOneUser = async() => {
    const { code } = await UserService.getUserAddUser(addUserForm());
    console.log(code);
    if (code === 1) {
        ElMessage.success('新增成功');
        await getList(currentPage4.value, pageSize4.value);
        dialogFormVisible.value = false;
        userForm = reactive(addUserForm());
        console.log(userForm);
    } else {
        ElMessage.error('新增失败');
    }
};
const addUser = async() => {
    dialogFormVisible.value = true;
};

const handleSizeChange = (val: number) => {
    getList(currentPage4.value, val);
};
// 更改当前页时触发
const handleCurrentChange = (val: number) => {
    getList(val, pageSize4.value);
};
// 计算total总条数
const total = ref<number>(50);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}
.dialog-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.el-dialog__header {
    display: flex;
}
</style>
