<template>
  <div class="app">
    <div class="header">
      <div class="logo"><img src="../../img/logo.png" alt="" /></div>
      <div class="lead">
        <span><a>音乐馆</a></span>
        <span><a>我的音乐</a></span>
        <span><a>客户端</a></span>
        <span><a>开放平台</a></span>
        <span><a>VIP</a></span>
      </div>
      <input type="text" name="" id="search" placeholder="搜索音乐" />
      <div class="icon"><a></a></div>
      <div class="login"><a>登录<span></span></a></div>
    </div>
    <div class="state">
      <hr />
      <span><a>首页</a></span>
      <span><a>歌手</a></span>
      <span><a>新碟</a></span>
      <span><a>排行榜</a></span>
      <span><a>分类榜单</a></span>
      <span><a>电台</a></span>
      <span><a>MV</a></span>
      <span><a>数字专辑</a></span>
    </div>
    <div class="container">
      <h2>歌单推荐</h2>
      <div class="select">
        <span><a @click="type = 'recommend'">为你推荐</a></span>
        <span><a @click="type = 'short'">短视频热歌</a></span>
        <span><a @click="type = 'passion'">情歌</a></span>
        <span><a @click="type = 'classic'">经典</a></span>
        <span><a @click="type = 'recommend'">官方歌单</a></span>
        <span><a @click="type = 'classic'">KTV热歌</a></span>
      </div>
      <div class="picture">
        <div v-if="type === 'recommend'" class="img">
          <img src="../../img/300.png" alt="" />
          <img src="../../img/301.png" alt="" />
          <img src="../../img/302.png" alt="" />
          <img src="../../img/303.png" alt="" />
          <img src="../../img/304.png" alt="" />
        </div>
        <div v-if="type === 'short'" class="img">
          <img src="../../img/600.png" alt="" />
          <img src="../../img/601.png" alt="" />
          <img src="../../img/602.png" alt="" />
          <img src="../../img/603.png" alt="" />
          <img src="../../img/604.png" alt="" />
        </div>
        <div v-if="type === 'passion'" class="img">
          <img src="../../img/400.png" alt="" />
          <img src="../../img/401.png" alt="" />
          <img src="../../img/402.png" alt="" />
          <img src="../../img/403.png" alt="" />
          <img src="../../img/404.png" alt="" />
        </div>
        <div v-if="type === 'classic'" class="img">
          <img src="../../img/200.png" alt="" />
          <img src="../../img/201.png" alt="" />
          <img src="../../img/202.png" alt="" />
          <img src="../../img/203.png" alt="" />
          <img src="../../img/204.png" alt="" />
        </div>
      </div>
    </div>
    <div class="new">
      <h2>精彩推荐</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'recommend'
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.app {
  background-color: rgb(243, 243, 243);
}

a {
  color: black;
}

a:hover {
  cursor: pointer;
  color: #31c27c;
}

.header {
  width: 100%;
  height: 76px;
  background-color: white;
  margin: auto;
}

.logo {
  position: absolute;
  top: 22%;
  left: 15%;
}

.logo img {
  width: 130px;
  height: 35px;
}

.lead {
  position: absolute;
  top: 23%;
  left: 27%;
}

.lead span {
  margin-left: 40px;
  font-size: 20px;
  color: black;
}

#search {
  position: absolute;
  height: 20px;
  top: 26%;
  left: 70%;
  outline: medium;
}

.icon {
  font-family: 'icomoon';
  position: absolute;
  top: 28%;
  left: 79%;
  font-size: 20px;
}

.login {
  font-family: 'icomoon';
  position: absolute;
  top: 18%;
  left: 90%;
  font-size: 20px;
}

.login span {
  vertical-align: middle;
}

hr {
  width: 80%;
  margin-left: 200px;
  margin-bottom: 8px;
  opacity: 0.3;
  color: black;
}

.state {
  width: 100%;
  text-align: center;
  height: 40px;
  font-size: 15px;
  background-color: white;
}

.state span {
  margin-left: 40px;
}

.container {
  padding-left: 150px;
  margin: auto;
  text-align: center;
  height: 400px;
}

.container h2 {
  margin-top: 50px;
  margin-bottom: 30px;
  letter-spacing: 8px;
}

.select {
  margin-right: 40px;
  margin-bottom: 40px;
}

.select span {
  margin-left: 33px;
}

.picture {
  width: 1170px;
}

.picture .img {
  display: flex;
  justify-content: space-between;
}

.picture .img img {
  width: 200px;
  height: 200px;
}

.new {
  width: 100%;
  height: 400px;
  background-color: white;
}

.new {
  margin: auto;
  text-align: center;
  height: 400px;
  padding-top: 50px;
}

.new h2 {
  margin-bottom: 30px;
  letter-spacing: 8px;
}


@font-face {
  font-family: 'icomoon';
  src: url('../../fonts1/icomoon.eot?19y9ze');
  src: url('../../fonts1/icomoon.eot?19y9ze#iefix') format('embedded-opentype'), url('../../fonts1/icomoon.ttf?19y9ze') format('truetype'), url('../../fonts1/icomoon.woff?19y9ze') format('woff'), url('../../fonts1/icomoon.svg?19y9ze#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

/* 超小屏幕下  一般来说小于 768 布局容器的宽度可以设置为100% */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* 小屏幕下 一般大于等于768 布局容器的宽度可以设置为750px */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* 大屏幕下 一般大于等于992 布局容器的宽度可以设置为970px */
@media screen and (min-width: 992px) {
  .container {
    width: 970px;
  }
}

/* 超大屏幕下 一般大于等于1200 布局容器的宽度可以设置为1170px */
@media screen and (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
