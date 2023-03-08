<template>
  <!--	左侧导航-->
  <el-aside width="200px" class="aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
      <el-menu-item index="/welcome">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>Navigator df</span> </el-menu-item
      ><el-menu-item index="/index">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>Navigator df</span>
      </el-menu-item>
      <el-menu-item index="/home">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>Navigator df</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue';

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style lang="scss" scoped></style>
