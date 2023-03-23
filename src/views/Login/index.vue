<template>
    <div class="login">
        <el-row class="login-box">
            <el-col class="login-left" :span="9"
                ><p class="login-title">CRM管理系统</p></el-col
            >
            <!--			<mysvg name="avatar"  color="#165DFF" width=18 height=128></mysvg>-->
            <el-col class="login-right" :span="15">
                <el-tabs class="login-tabs" v-model="activeName">
                    <el-tab-pane label="账号登录" name="first">
                        <el-form
                            :label-position="labelPosition"
                            label-width="100px"
                            :model="formLabelAlign"
                            style="max-width: 300px"
                            class="login-input-box"
                            :rules="userRules"
                        >
                            <el-form-item label="用户名" prop="name">
                                <el-input
                                    type="text"
                                    v-model="formLabelAlign.username"
                                    placeholder="请输入用户名"
                                    :prefix-icon="User"
                                />
                            </el-form-item>
                            <el-form-item label="密码" prop="region">
                                <el-input
                                    type="password"
                                    placeholder="请输入密码"
                                    :prefix-icon="Hide"
                                    v-model="formLabelAlign.pwd"
                                    class="password-input"
                                />
                            </el-form-item>
                            <el-row>
                                <el-col :span="24" class="login-bottom-info">
                                    <el-checkbox v-model="checked"
                                        >记住密码</el-checkbox
                                    >
                                    <el-link
                                        class="forget-the-password"
                                        type="primary"
                                        >忘记密码?</el-link
                                    >
                                </el-col>
                            </el-row>
                            <el-col
                                :span="24"
                                class="sub-menu-btn"
                                style="text-align: center"
                            >
                                <el-button
                                    style="width: 140px"
                                    type="primary"
                                    @click="submitLogin"
                                    >登录</el-button
                                >
                                <el-button style="width: 140px">注册</el-button>
                            </el-col>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane
                        label="手机登录"
                        name="second"
                        class="mobile-login-box"
                    >
                        <el-form
                            :label-position="labelPosition"
                            label-width="100px"
                            :model="formLabelAlign"
                            style="max-width: 400px"
                            class="login-input-box"
                        >
                            <!--手机登录-->
                            <el-form-item label="手机号">
                                <el-input
                                    type="text"
                                    v-model="formLabelAlign.username"
                                    placeholder="请输入手机号"
                                    :prefix-icon="User"
                                />
                                <!--输入与获取验证码-->
                                <el-row>
                                    <el-col :span="16">
                                        <el-input
                                            class="form-control"
                                            type="text"
                                            v-model="formLabelAlign.username"
                                            placeholder="请输入验证码"
                                            :prefix-icon="User"
                                        />
                                    </el-col>
                                    <el-col :span="8">
                                        <el-button
                                            @click="getMsg"
                                            type="primary"
                                            class="getMsg-box"
                                            :loading="getMsgLoading"
                                            >获取验证码
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-button type="primary" @click="submitLogin"
                                >登录</el-button
                            >
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="扫码登录" name="third"
                        >扫码登录</el-tab-pane
                    >
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Hide, User } from '@element-plus/icons-vue';
import UserService, { IUserLogin } from '@/api/user';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const checked = ref(false);
const activeName = ref('first');

enum LabelPosition {
    Top = 'top',
    Left = 'left',
    Right = 'right',
}

const labelPosition = ref(LabelPosition.Left);

const formLabelAlign = reactive<IUserLogin>({
    username: 'sunwukong',
    pwd     : 'sunxingzhe'
});
/**
 * 处理用户登录逻辑.
 * @async
 * @param {IUserLogin} formLabelAlign 用户登录信息
 * @returns {Promise<void>}
 * @example submitLogin(formLabelAlign)
 */
const submitLogin = async() => {
    await userStore.login(formLabelAlign);
};

// 表单校验,非空校验、长度校验、正则校验
const userRules = reactive({
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        { pattern: /^[a-zA-Z]+$/, message: '只能输入英文', trigger: 'blur' }
    ],
    region: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '长度在 6 到 11 个字符', trigger: 'blur' },
        //必须包括数字和字母
        {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
            message: '必须包括数字和字母',
            trigger: 'blur'
        }
    ]
});
// 表单校验

/**
 * @description 获取验证码
 * @async
 * @param {string} phone 手机号
 * @returns {Promise<void>}
 * @example getMsg('12345678901')
 * */
const getMsgLoading = ref(false);
const getMsg = () => {
    getMsgLoading.value = true;
    setTimeout(() => {
        getMsgLoading.value = false;
    }, 2000);
};
</script>

<style lang="scss" scoped>
.mobile-login-box {
    :deep(.el-input) {
        margin-bottom: 20px;
    }

    .form-control {
        width: 170px;
    }

    .getMsg-box {
        margin-left: 8px;
    }
}

.sub-menu-btn {
    margin-top: 20px;
}

.login-bottom-info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

:deep(.el-form-item__label) {
    width: 70px !important;
}

:deep(.el-tabs__item) {
    padding: 0 0;
}

:deep(.el-tabs__item) {
    margin: 0 20px;
}

:deep(.el-tabs__nav) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-tabs {
    //	居中
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

:deep(.el-tabs__nav is-top) {
    width: 1000px;
}

.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.login-input-box {
    margin: 0 auto;
    padding: 30px 0;
    height: 200px;

    .el-form-item {
        margin-bottom: 20px;
    }
}

.login-left {
    width: 100%;
    height: 100%;
    background-color: #7392fa;

    .login-title {
        color: #fff;
        font-size: 30px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}

.login {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(-45deg, #7392fa, #ac40ff);
    //登录阴影
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    .login-box {
        //	居中
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        //	宽高
        width: 700px;
        height: 440px;
        //	背景
        background: #fff;
        border-radius: 2%;
    }
}
</style>
