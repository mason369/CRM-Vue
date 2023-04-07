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
                    width="80"
                />
                <el-table-column
                    align="center"
                    prop="username"
                    label="用户名"
                    width="80"
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
                :page-sizes="[5, 10, 20, 30]"
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
        <el-form :model="addUserForm" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="addUserForm.username" />
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="addUserForm.nickName" />
            </el-form-item>
            <el-form-item label="创建时间">
                <el-input v-model="addUserForm.userCreateDate" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="addUserForm.pwd" />
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="addUserForm.userPhoneNum" />
            </el-form-item>
            <el-form-item label="权限">
                <el-input v-model="addUserForm.userPermission" />
            </el-form-item>
            <el-form-item label="角色">
                <el-input v-model="addUserForm.userRole" />
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

const addUserForm = reactive<AddUser>({
    nickName      : 'string',
    pwd           : 'string',
    userCreateDate: '2023-04-07T00:25:39.398Z',
    userId        : '24323',
    userPermission: 'string',
    userPhoneNum  : 'string',
    userRole      : '只因你太美',
    username      : 'string'
});
// 新增用户
const addOneUser = async() => {
    const { data } = await UserService.getUserAddUser(addUserForm);
    if (data.code === 1) {
        ElMessage.success('新增成功');
        getList(currentPage4.value, pageSize4.value);
        dialogFormVisible.value = false;
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
