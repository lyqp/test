<template>
  <div class="app">
    <div class="left">
      <div class="index"><router-link to="/index">管理首页</router-link></div>
      <div class="music"><router-link to="/music">音乐首页</router-link></div>
    </div>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a.router-link-active{
  text-decoration: none;
  color: white;
}

a{
  text-decoration: none;
  color: rgb(191, 203, 217);
}

.left {
  float: left;
  position: absolute;
  width: 100px;
  height: 100%;
  background-color: rgb(48, 65, 86);
  z-index: 10000;
  position: fixed;
}

.router {
  margin-left:100px;
}

.index,.music {
  display: inline-block;
  width: 80px;
  height: 30px;
  color: rgb(191, 203, 217);
  font-size: 20px;
  margin: 20px auto;
}
</style>
