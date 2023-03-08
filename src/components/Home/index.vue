<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <!--			左侧导航-->
        <NavMenu />
        <!--				主体内容-->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/Home/NavMenu.vue';
</script>

<style lang="scss" scoped></style>
