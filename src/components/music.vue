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
    <div class="wrap">
      <div class="container">
        <h2>歌单推荐</h2>
        <div class="select">
          <span><a @click="type = 'recommend'">为你推荐</a></span>
          <span><a @click="type = 'short'">短视频热歌</a></span>
          <span><a @click="type = 'passion'">情歌</a></span>
          <span><a @click="type = 'classic'">经典</a></span>
          <span><a @click="type = 'official'">官方歌单</a></span>
          <span><a @click="type = 'hotsong'">KTV热歌</a></span>
        </div>
        <div class="leftbtn" @click="left">
          <a><span>&#60;</span></a>
        </div>
        <div class="rightbtn" @click="right">
          <a><span>&#62;</span></a>
        </div>
        <div class="picture" ref="pciture">
          <ul v-if="type === 'recommend'" class="img">
            <li v-for="(item, index) in list_a" :key="'a' + item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>

            <li v-for="(item, index) in list_d" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>
          </ul>
          <ul v-if="type === 'short'" class="img">
            <li v-for="(item, index) in list_b" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span></a>
            </li>
          </ul>
          <ul v-if="type === 'passion'" class="img">
            <li v-for="(item, index) in list_c" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span></a>
            </li>
          </ul>
          <ul v-if="type === 'classic'" class="img">
            <li v-for="(item, index) in list_d" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span></a>
            </li>
          </ul>
          <ul v-if="type === 'official'" class="img">
            <li v-for="(item, index) in list_d" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span></a>
            </li>
          </ul>
          <ul v-if="type === 'hotsong'" class="img">
            <li v-for="(item, index) in list_d" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span></a>
            </li>
          </ul>
        </div>
        <ol class="circle">
          <li @click="change(1)" :class="{ current: liActiveClass == 1 }"></li>
          <li @click="change(2)" :class="{ current: liActiveClass == 2 }"></li>
        </ol>
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
    </div>
    <div class="mv">
      <h2>MV</h2>
      <div class="kind">
        <span><a @click="kind = 'choiceness'">精选</a></span>
        <span><a @click="kind = 'hinterland'">内地</a></span>
        <span><a @click="kind = 'hongkong'">港台</a></span>
        <span><a @click="kind = 'occident'">欧美</a></span>
        <span><a @click="kind = 'korea'">韩国</a></span>
        <span><a @click="kind = 'japanese'">日本</a></span>
      </div>
      <div class="left_a" @click="left_a">
        <a><span>&#60;</span></a>
      </div>
      <div class="right" @click="right_a">
        <a><span>&#62;</span></a>
      </div>

      <div class="box">
        <ul v-if="kind === 'choiceness'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'hinterland'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'hongkong'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'occident'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'korea'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'japanese'" class="w">
          <li v-for="(item, index) in item_a" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_b" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
      </div>
      <ol class="circle_a">
        <li @click="select(1)" :class="{ current: liActiveClass_a == 1 }"></li>
        <li @click="select(2)" :class="{ current: liActiveClass_a == 2 }"></li>
      </ol>
    </div>
    <div class="footer">
        <div class="a">
          <a><span>下载QQ音乐客户端</span></a>
        </div>
        <div class="b">
          <a><span>特色产品</span></a>
        </div>
        <div class="c">
          <a><span>合作链接</span></a>
        </div>
        <div class="d">
          <a><span>开放平台</span></a>
          <div class="d_a">
            <a>qq音乐开放平台</a>
            <a>腾讯音乐人</a>
            <a>音乐推</a>
          </div>
        </div>
        <div class="e">
          <a><span>TME集团官网</span></a>
          <div class="e_a">
            <a>腾讯音乐</a>
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
      kind: 'choiceness',
      liActiveClass: 1,//默认选中第一个
      liActiveClass_a: 1,// 同理
      num: 0,
      flag: true,
      circle: 0,
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
        { id: 6, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 7, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 8, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 9, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 10, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
      ],
      item_b: [
        { id: 1, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 2, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 3, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 4, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 5, src: '../1.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '播放量:63.9万' },
        { id: 6, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 7, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 8, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 9, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
        { id: 10, src: '../2.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '播放量:18.8万' },
      ]
    }
  },
  mounted() {
    // 左右按钮显示和隐藏
    var leftbtn = document.querySelector('.leftbtn');
    var rightbtn = document.querySelector('.rightbtn');
    var focus = document.querySelector('.wrap');
    // var container = document.querySelector('.container')
    focus.addEventListener('mouseenter', function () {
      leftbtn.style.display = 'block';
      rightbtn.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function () {
      leftbtn.style.display = 'none';
      rightbtn.style.display = 'none';
    });
    var left = document.querySelector('.left_a');
    var right = document.querySelector('.right');
    var mv = document.querySelector('.mv');
    mv.addEventListener('mouseenter', function () {
      left.style.display = 'block';
      right.style.display = 'block';
    });
    mv.addEventListener('mouseleave', function () {
      left.style.display = 'none';
      right.style.display = 'none';
    });
  },
  methods: {
    left() {
      var picture = document.querySelector('.picture');
      if (picture.style.left === 0 + 'px') {
        picture.style.left = -1175 + 'px';
        this.$data.liActiveClass = 2;
      } else {
        picture.style.left = 0 + 'px';
        this.$data.liActiveClass = 1;
      }
    },
    right() {
      var picture = document.querySelector('.picture');
      if (picture.style.left === -1175 + 'px') {
        picture.style.left = 0 + 'px';
        this.$data.liActiveClass = 1;
      } else {
        picture.style.left = -1175 + 'px';
        this.$data.liActiveClass = 2;
      }
      // console.log(this.$data.liActiveClass);
    },
    change(i) {
      this.liActiveClass = i;
      // console.log(this.liActiveClass);
      // this.right()
      if (i === 1) {
        this.left()
      } if (i === 2) {
        this.right();
      }
    },
    left_a() {
      var w = document.querySelector('.w');
      if (w.style.left === 0 + 'px') {
        w.style.left = -1220 + 'px';
        this.$data.liActiveClass_a = 2;
      } else {
        w.style.left = 0 + 'px';
        this.$data.liActiveClass_a = 1;
      }
    },
    right_a() {
      var w = document.querySelector('.w');
      if (w.style.left === -1220 + 'px') {
        w.style.left = 0 + 'px';
        this.$data.liActiveClass_a = 1;
      } else {
        w.style.left = -1220 + 'px';
        this.$data.liActiveClass_a = 2;
      }
      // console.log(this.$data.liActiveClass);
    },
    select(i) {
      this.liActiveClass_a = i;
      // console.log(this.liActiveClass);
      // this.right()
      if (i === 1) {
        this.left_a()
      } if (i === 2) {
        this.right_a();
      }
    },
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
  /* height: 3000px;  */
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

.box li:hover .mask,
.img li:hover .mask_a,
.pic .a:hover .mask_b {
  /* 而是显示元素 */
  display: block;
}

a {
  color: black;
}

a:hover {
  cursor: pointer;
  color: #31c27c !important;
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

.wrap {
  width: 100%;
}

.container {
  width: 1170px;
  margin-left: 406px;
  /* margin: auto; */
  text-align: center;
  height: 460px;
  overflow: hidden;
}

.container h2 {
  margin-top: 50px;
  margin-bottom: 30px;
  letter-spacing: 8px;
  margin-right: 18px;
}

.select {
  margin-right: 70px;
  margin-bottom: 40px;
}

.select span {
  margin-left: 33px;
}

.leftbtn {
  text-align: center;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 35%;
  left: 9%;
  background-color: rgba(0, 0, 0, .1);
  display: none;
}

.leftbtn span,
.rightbtn span {
  font-size: 60px;
}

.rightbtn {
  text-align: center;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 35%;
  right: 4%;
  background-color: rgba(0, 0, 0, .1);
  display: none;
}

.picture {
  position: relative;
  width: 2350px;
  text-align: left;
  /* margin-left: 265px; */
  height: 242px;
  display: flex;
  flex-wrap: nowrap;
}

.picture ul li {
  list-style: none;
}

.picture .img {
  float: left;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  left: 0;
  top: 0;
}

.picture .img img {
  margin-right: 35px;
  width: 200px;
  height: 200px;
}

.picture .img a {
  color: #999;
  font-size: 14px;
}

.circle {
  position: absolute;
  top: 55%;
  left: 52%;
  list-style: none;

}

.circle li {
  margin-right: 8px;
  float: left;
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgb(210, 210, 210);
}

.current {
  background-color: black !important;
}

.new {
  width: 100%;
  height: 400px;
  background-image: linear-gradient(rgb(233, 233, 233), white);
  margin: auto;
  text-align: center;
  height: 400px;
  padding-top: 50px;
}

.new h2 {
  margin-bottom: 30px;
  letter-spacing: 8px;
  margin-left: 87px;
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
  width: 89%;
  padding-left: 150px;
  margin: auto;
  text-align: center;
  height: 700px;
  background-image: linear-gradient(rgb(233, 233, 233), white);
}

.mv h2 {
  padding-top: 40px;
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

.left_a {
  text-align: center;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 133%;
  left: 9%;
  background-color: rgba(0, 0, 0, .1);
  display: none;
}

.left_a span,
.right span {
  font-size: 60px;
}

.right {
  text-align: center;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 133%;
  right: 5%;
  background-color: rgba(0, 0, 0, .1);
  display: none;
}

.w {
  position: relative;
  /* margin-left: 220px; */
  width: 2440px;
  height: 450px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.box {
  float: left;
  position: absolute;
  width: 1220px;
  height: 450px;
  overflow: hidden;
  left: 390px;
}

.box li {
  list-style: none;
  position: relative;
}

.box img {
  margin-top: 33px;
  width: 224px;
  height: 126px;
}

.box li a {
  color: #999;
  font-size: 14px;
}

.circle_a {
  position: absolute;
  top: 168%;
  left: 53%;
  list-style: none;
}

.circle_a li {
  margin-right: 8px;
  float: left;
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgb(210, 210, 210);
}

.current {
  background-color: black !important;
}

.footer {
  position: relative;
  height: 500px;
  background-color: #333;
}

.footer a {
  color: rgb(153, 153, 153);
}

.footer .a {
  position: absolute;
  top: 100px;
  left: 400px;
}

.footer .b {
  position: absolute;
  top: 100px;
  left: 800px;
}

.footer .c {
  position: absolute;
  top: 100px;
  left: 1300px;
}

.footer .d {
  position: absolute;
  top: 300px;
  left: 430px;
}

.footer .d .d_a , .e .e_a{
  margin-top: 50px;
}

.footer .d .d_a a , .e .e_a{
  margin-left: 30px;
}


.footer .e {
  position: absolute;
  top: 300px;
  left: 850px;
}
@font-face {
  font-family: 'icomoon';
  src: url('../../fonts1/icomoon.eot?19y9ze');
  src: url('../../fonts1/icomoon.eot?19y9ze#iefix') format('embedded-opentype'), url('../../fonts1/icomoon.ttf?19y9ze') format('truetype'), url('../../fonts1/icomoon.woff?19y9ze') format('woff'), url('../../fonts1/icomoon.svg?19y9ze#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

/* 超小屏幕下  一般来说小于 768 布局容器的宽度可以设置为100%
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* 小屏幕下 一般大于等于768 布局容器的宽度可以设置为750px */
/* @media screen and (min-width: 768px) {
  .container {
    width: 750px;
  }
} */

/* 大屏幕下 一般大于等于992 布局容器的宽度可以设置为970px */
/* @media screen and (min-width: 992px) {
  .container {
    width: 970px;
  }
} */

/* 超大屏幕下 一般大于等于1200 布局容器的宽度可以设置为1170px */
/* @media screen and (min-width: 1200px) {
  .container {
    width: 1170px;
  }
} */
</style>
