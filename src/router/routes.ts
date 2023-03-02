import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login/index
        以下代码有什么问题：<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>布局切换</title>
    <script type="text/javascript" src="./jsue.js"></script>
    <link rel="stylesheet" type="texts" href=".s/index.css" />
    <script
      src="./js/axios.min.js"
      type="text/javascript"
      charset="utf-8"
    ></script>
  </head>
  <body>
    <div id="app" v-cloak>
      <!-- TODO：请在下面实现需求 -->
      <div class="bar">
        <a class="grid-icon":class="[a===0? 'active':'']"@click="a=0"></a>
        <a class="list-icon":class="[a===1? 'active':'']"@click="a=1"></a>
      </div>
      <!--grid 示例代码，动态渲染时可删除-->
      <ul class="grid" v-if="a===0">
        <li v-for="(item,index) in goodsList" :key="index">
          <a :href="item.url" target="_blank"> <img :src="item.image.large" /></a>
        <>
      </ul>
      <ul class="list" v-else>
        <li v-for="(item,index) in goodsList" :key="index">
          <a :href="item.url" target="_blank"> <img :src="item.image.small" /></a>
          <p>{{item.title}}</p>
        <>
      </ul>
    </div>
  </body>
<ml>
<script type="text/javascript">
  var vm = new Vue({
    el: "#app",
    data: {
      goodsList: [],
      a:0
    },
    mounted() {
      // TODO：补全代码实现需求
      axios.get('./goodsList.json').then(res=>{
        goodsList=res.data
        console.log(goodsList);
      })
    },
  });
</script>
.vue'),
    },
];
