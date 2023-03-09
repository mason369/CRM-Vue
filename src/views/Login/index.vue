<template>
    <div class="login">
        <el-row class="login-box">
            <el-col class="login-left" :span="8"><p class="login-title">CRM管理系统</p></el-col>
            <!--			<mysvg name="avatar"  color="#165DFF" width=18 height=128></mysvg>-->
            <el-col class="login-right" :span="16">
                <el-tabs v-model="activeName" class="login-tabs" @tab-click="handleClick">
                    <el-tab-pane label="账号登录" name="first">
                        <el-form
                            :label-position="labelPosition"
                            label-width="100px"
                            :model="formLabelAlign"
                            style="max-width: 300px"
                            class="login-input-box"
                        >
                            <el-form-item label="用户名">
                                <el-input
                                    type="text"
                                    v-model="formLabelAlign.name"
                                    placeholder="请输入用户名"
                                    :prefix-icon="User"
                                />
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input
                                    type="password"
                                    placeholder="请输入密码"
                                    :prefix-icon="Hide"
                                    v-model="formLabelAlign.region"
                                    class="password-input"
                                />
                            </el-form-item>
                            <el-row>
                                <el-col :span="24" class="login-bottom-info">
                                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                                    <el-link class="forget-the-password" type="primary">忘记密码?</el-link>
                                </el-col>
                            </el-row>
                            <el-col :span="24" class="sub-menu-btn" style="text-align: center">
                                <el-button style="width: 140px" type="primary">登录</el-button>
                                <el-button style="width: 140px">注册</el-button>
                            </el-col>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="手机登录" name="second">
                        <el-form
                            :label-position="labelPosition"
                            label-width="100px"
                            :model="formLabelAlign"
                            style="max-width: 300px"
                            class="login-input-box"
                        >
                            <!--2手机登录-->
                            <el-form-item label="手机号">
                                <el-input
                                    type="text"
                                    v-model="formLabelAlign.name"
                                    placeholder="请输入手机号"
                                    :prefix-icon="User"
                                />
                                <!--输入与获取验证码-->
                                <el-row>
                                    <el-col :span="16">
                                        <el-input
                                            type="text"
                                            v-model="formLabelAlign.name"
                                            placeholder="请输入验证码"
                                            :prefix-icon="User"
                                        />
                                    </el-col>
                                    <el-col :span="8">
                                        <el-button type="primary">获取验证码</el-button>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-button type="primary">登录</el-button>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="扫码登录" name="third">Role</el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/modules/user';
import type { TabsPaneContext } from 'element-plus';
import { Hide, User } from '@element-plus/icons-vue';

const userStore = useUserStore();
const { name } = storeToRefs(userStore);
console.log(name.value);
userStore.updateName('李四');
console.log(name.value);
const checked = ref(false);

enum LabelPosition {
    Top = 'top',
    Left = 'left',
    Right = 'right',
}

const labelPosition = ref(LabelPosition.Left);

const formLabelAlign = reactive({
    name  : '',
    region: ''
});

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
};
</script>

<style lang="scss" scoped>
.sub-menu-btn {
    margin-top: 20px;
}

.login-bottom-info {
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
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

    .login-box {
        //	居中
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        //	宽高
        width: 600px;
        height: 340px;
        //	背景
        background: #fff;
        //	圆角
        border-radius: 10px 10px 10px 10px;
    }
}
</style>
