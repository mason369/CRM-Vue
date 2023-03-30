<template>
    <el-aside width="200px" class="aside-box">
        <el-menu class="el-menu-vertical-menu" router>
            <el-menu-item index="goods">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <span>商品管理</span>
            </el-menu-item>
            <el-menu-item index="order">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <span>订单管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.aside-box {
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}
</style>
