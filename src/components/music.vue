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
          <div v-for="(item, index) in list_a" :key="item.id">
            <div class="mask_a"></div>
            <img :src=item.src alt="" />
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a><span></span>
              <h4>{{ item.play }}</h4>
            </a>
          </div>
        </div>
        <div v-if="type === 'short'" class="img">
          <div v-for="(item, index) in list_b" :key="item.id">
            <div class="mask_a"></div>
            <img :src=item.src alt="" />
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a><span></span></a>
          </div>
        </div>
        <div v-if="type === 'passion'" class="img">
          <div v-for="(item, index) in list_c" :key="item.id">
            <div class="mask_a"></div>
            <img :src=item.src alt="" />
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a><span></span></a>
          </div>
        </div>
        <div v-if="type === 'classic'" class="img">
          <div v-for="(item, index) in list_d" :key="item.id">
            <div class="mask_a"></div>
            <img :src=item.src alt="" />
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a><span></span></a>
          </div>
        </div>

      </div>
    </div>
    <div class="new">
      <h2>精彩推荐</h2>
      <div class="pic">
        <div class="a">
          <div class="mask_b"></div>
          <img src="../../img/4429670.png" alt="">
        </div>
        <div class="a">
          <div class="mask_b"></div>
          <img src="../../img/4429960.png" alt="">
        </div>
      </div>
      <div class="mv">
        <h2>MV</h2>
        <div class="kind">
          <span><a @click="kind = 'recommend'">精选</a></span>
          <span><a @click="kind = 'short'">内地</a></span>
          <span><a @click="kind = 'passion'">港台</a></span>
          <span><a @click="kind = 'classic'">欧美</a></span>
          <span><a @click="kind = 'recommend'">韩国</a></span>
          <span><a @click="kind = 'classic'">日本</a></span>
        </div>
        <div class="box">
          <div v-for="(item, index) in item_a" :key="index">
            <div class="mask"></div>
            <img :src=item.src alt="">
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h4>{{ item.author }}</h4>
            </a>
            <a><span></span>
              <h4>{{ item.play }}</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'recommend',
      list_a: [
        { id: 1, src: '../300.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 2, src: '../301.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 3, src: '../302.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 4, src: '../303.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 5, src: '../304.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' }
      ],
      list_b: [
        { id: 1, src: '../300.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 2, src: '../301.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 3, src: '../302.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 4, src: '../303.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 5, src: '../304.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' }
      ],
      list_c: [
        { id: 1, src: '../300.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 2, src: '../301.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 3, src: '../302.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 4, src: '../303.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 5, src: '../304.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' }
      ],
      list_d: [
        { id: 1, src: '../400.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 2, src: '../401.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 3, src: '../402.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 4, src: '../403.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' },
        { id: 5, src: '../404.png', text: '丧Rap | 身体是没有灵魂的躯壳', play: '播放量:63.9万' }
      ],
      item_a: [
        { id: 1, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 2, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 3, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 4, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 5, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 6, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 7, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 8, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 9, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 10, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
      ]
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
  height: 5000px;
}

.box .mask {
  /* 隐藏遮罩层 */
  display: none;
  position: absolute;
  top: 35px;
  width: 224px;
  height: 125px;
  background: rgba(0, 0, 0, .4) url(../../img/play.png) no-repeat center;
}

.img .mask_a {
  /* 隐藏遮罩层 */
  display: none;
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, .4) url(../../img/play.png) no-repeat center;
}

.pic .mask_b {
  /* 隐藏遮罩层 */
  display: none;
  position: absolute;
  width: 520px;
  height: 260px;
  background: rgba(0, 0, 0, .4) url(../../img/play.png) no-repeat center;
}

.box div:hover .mask,
.img div:hover .mask_a,
.pic .a:hover .mask_b {
  /* 而是显示元素 */
  display: block;
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
  left: 78%;
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
  height: 460px;
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
  position: relative;
  display: flex;
  justify-content: space-between;
}

.picture .img img {
  margin-right: 21px;
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

.pic {
  position: relative;
  margin-left: 408px;
  width: 1170px;
  display: flex;
  justify-content: space-between;
}

.pic img {
  cursor: pointer;
  width: 520px;
  height: 260px;
}

.mv {
  padding-left: 150px;
  margin: auto;
  text-align: center;
  height: 630px;
  background-image: linear-gradient(rgb(243, 243, 243), white);
}

.mv h2 {
  margin-top: 50px;
  margin-bottom: 30px;
  letter-spacing: 8px;
}

.kind {
  margin-right: 40px;
  margin-bottom: 40px;
}

.kind span {
  margin-left: 33px;
}

.box {
  margin-left: 243px;
  width: 1300px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
}

.box div {
  position: relative;
}

.box img {
  margin-top: 33px;
  width: 224px;
  height: 126px;
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
