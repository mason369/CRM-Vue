<template>
  <!--
	 width:表示svg的宽度
	 height：表示svg的高度
	 fill：svg的填充颜色
	class：svg图片的补充样式（了解）
	 -->
  <svg :width="width" :height="height" :color="color">
    <!-- svg的语法标签 -->
    <use :xlink:href="svgIcon"></use>
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue';

/**
 * 暴露svg图片的属性，以便使用者自定定义。
 */
const props = defineProps({
    // 表示加载那一张svg图片。
    name: {
        type   : String,
        require: true
    },
    with: {
    // 属性的类型
        type   : Number,
        // 属性是否是可选的,true表示必填，false表示可以不填写
        require: false
    },
    height: {
    // 属性的类型
        type   : Number,
        // 属性是否是可选的,true表示必填，false表示可以不填写
        require: false
    },
    color: {
    // 属性的类型
        type   : String,
        // 属性是否是可选的,true表示必填，false表示可以不填写
        require: false
    }
});

// 根据插件要求，对名字进行加工，以便符合名字标准,名字标准要和vit.config.js里面symbolId 对应上即可。注意要加上#
const svgIcon = computed(() => '#icon-' + props.name);
</script>

<style></style>

<!-- 代码片段 -->
