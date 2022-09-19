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
      <div class="icon"><a></a></div>
      <div class="login"><a>登录<span></span></a></div>
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
      <div class="leftbtn" @click="left">
        <a><span>&#60;</span></a>
      </div>
      <div class="rightbtn" @click="right">
        <a><span>&#62;</span></a>
      </div>
      <div class="container">
        <h2>歌单推荐</h2>
        <div class="select">
          <span><a @click="type = 'recommend'">为你推荐</a></span>
          <span><a @click="type = 'internet'">网络歌曲</a></span>
          <span><a @click="type = 'cantonese'">经典粤语</a></span>
          <span><a @click="type = 'classic'">经典</a></span>
          <span><a @click="type = 'official'">官方歌单</a></span>
          <span><a @click="type = 'passion'">情歌</a></span>
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
            <li v-for="(item, index) in list_b" :key="item.id">
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
          <ul v-if="type === 'internet'" class="img">
            <li v-for="(item, index) in list_c" :key="item.id">
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
          <ul v-if="type === 'cantonese'" class="img">
            <li v-for="(item, index) in list_e" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>
            <li v-for="(item, index) in list_f" :key="item.id">
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
          <ul v-if="type === 'classic'" class="img">
            <li v-for="(item, index) in list_g" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>
            <li v-for="(item, index) in list_h" :key="item.id">
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
          <ul v-if="type === 'official'" class="img">
            <li v-for="(item, index) in list_i" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>
            <li v-for="(item, index) in list_j" :key="item.id">
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
          <ul v-if="type === 'passion'" class="img">
            <li v-for="(item, index) in list_k" :key="item.id">
              <div class="mask_a"></div>
              <img :src=item.src alt="" />
              <a>
                <h4>{{ item.text }}</h4>
              </a>
              <a><span></span>
                <h4>{{ item.play }}</h4>
              </a>
            </li>
            <li v-for="(item, index) in list_l" :key="item.id">
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
              <span></span>
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
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'hinterland'" class="w">
          <li v-for="(item, index) in item_c" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_d" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'hongkong'" class="w">
          <li v-for="(item, index) in item_e" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_f" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'occident'" class="w">
          <li v-for="(item, index) in item_g" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_h" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'korea'" class="w">
          <li v-for="(item, index) in item_i" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_j" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
        </ul>
        <ul v-if="kind === 'japanese'" class="w">
          <li v-for="(item, index) in item_k" :key="'b' + index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
              <h6>{{ item.play }}</h6>
            </a>
          </li>
          <li v-for="(item, index) in item_l" :key="index">
            <div class="mask"></div>
            <a><img :src=item.src alt=""></a>
            <a>
              <h4>{{ item.text }}</h4>
            </a>
            <a>
              <h6>{{ item.author }}</h6>
            </a>
            <a>
              <span></span>
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
        <div class="c_a">
          <div class="first">
            <span><a>CJ ENM</a></span>
            <span><a>腾讯视频</a></span>
            <span><a>手机QQ空间</a></span>
            <span><a>最新版QQ</a></span>
            <span><a>腾讯社交广告</a></span>
          </div>
          <div class="second">
            <span><a>电脑管家</a></span>
            <span><a>QQ浏览器</a></span>
            <span><a>腾讯微云</a></span>
            <span><a>腾讯云</a></span>
            <span><a>企鹅FM</a></span>
          </div>
          <div class="third">
            <span><a>智能电视网</a></span>
            <span><a>当贝市场</a></span>
            <span><a>酷我音乐</a></span>
            <span><a>酷狗听书</a></span>
          </div>
        </div>
      </div>
      <div class="elf">
        <div class="elf_a">
          <div class="font_a"><a>PC端</a></div>
        </div>
        <div class="elf_b">
          <div class="font_b"><a>MAC端</a></div>
        </div>
        <div class="elf_c">
          <div class="font_c"><a>Android版</a></div>
        </div>
        <div class="elf_d">
          <div class="font_d"><a>iPhone版</a></div>
        </div>
      </div>
      <div class="spirit">
        <div class="spirit_a">
          <div class="font_e"><a>全民K歌</a></div>
        </div>
        <div class="spirit_b">
          <div class="font_f"><a>银河音效</a></div>
        </div>
        <div class="spirit_c">
          <div class="font_g"><a>QPlay</a></div>
        </div>
        <div class="spirit_d">
          <div class="font_h"><a>Fan直播伴侣</a></div>
        </div>
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
      liActiveClass: 1,//默选中第一个
      liActiveClass_a: 1,// 同理
      num: 0,
      flag: true,
      circle: 0,
      list_a: [
        { id: 1, src: '../300.png', text: '欧美RAP | 酷guy嘻哈', play: '播放量:220.8万' },
        { id: 2, src: '../301.png', text: '很遗憾，有些人相识相知又归零', play: '播放量:2606.9万' },
        { id: 3, src: '../302.png', text: '说唱情歌｜霸气低音，即刻心动', play: '播放量:2480.4万' },
        { id: 4, src: '../303.png', text: '流行 | 近年来火爆全网的歌曲', play: '播放量:5.8亿' },
        { id: 5, src: '../304.png', text: '深情翻唱 | 都说入戏的人最深情', play: '播放量:1481.1万' }
      ],
      list_b: [
        { id: 1, src: '../305.png', text: '有没有一首歌，曾让你热泪盈眶？', play: '播放量:1.6亿' },
        { id: 2, src: '../306.png', text: '学霸必备：专心写作业 享受轻音乐好时光', play: '播放量:6661.5万' },
        { id: 3, src: '../307.png', text: '轻音乐睡觉听|身处黑暗心向光明', play: '播放量:2655.3万' },
        { id: 4, src: '../308.png', text: '英雄联盟 | 双城之战动画原声集', play: '播放量:548.0万' },
        { id: 5, src: '../309.png', text: '小众英文｜世界一直转我们会相逢', play: '播放量:166.3万' }
      ],
      list_c: [
        { id: 1, src: '../400.png', text: '吐糟网络节奏：停不下的嗨嗨嗨', play: '播放量:76.0万' },
        { id: 2, src: '../401.png', text: '网络歌曲·还记得那些最后吗', play: '播放量:51.4万' },
        { id: 3, src: '../402.png', text: '「网络歌曲」探索当中的秘密花园', play: '播放量:39.6万' },
        { id: 4, src: '../403.png', text: '盘点那些最具潜力的网络神曲', play: '播放量:62.9万' },
        { id: 5, src: '../404.png', text: '欢脱歌曲乐趣多！逗比网络神曲', play: '播放量:57.7万' }
      ],
      list_d: [
        { id: 1, src: '../405.png', text: '「合唱情结」猝不及防的爱上网络歌曲', play: '播放量:43.4万' },
        { id: 2, src: '../406.png', text: '来一打欢快的网络歌曲放松心情', play: '播放量:104.8万' },
        { id: 3, src: '../407.png', text: '音乐响起时，我们约定幸福一辈子', play: '播放量:72.6万' },
        { id: 4, src: '../408.png', text: '『回顾网络』你熟悉的不光是旋律', play: '播放量:65.2万' },
        { id: 5, src: '../409.png', text: '网络合唱，这音乐深入人心', play: '播放量:76.3万' }
      ],
      list_e: [
        { id: 1, src: '../500.png', text: '不为人知的天才，老一辈香港音乐人', play: '播放量:51.0万' },
        { id: 2, src: '../501.png', text: '以漂亮的姿势，穿越到八十年代', play: '播放量:87.1万' },
        { id: 3, src: '../502.png', text: '「经典粤语」唱着你我的悲欢离合', play: '播放量:123.4万' },
        { id: 4, src: '../503.png', text: '重温一把当年的火，粤语经典', play: '播放量:104.8万' },
        { id: 5, src: '../504.png', text: '有一种歌词，叫小美', play: '播放量:315.5万' }
      ],
      list_f: [
        { id: 1, src: '../505.png', text: '粤语：灵魂音律 入耳精选', play: '播放量:224.4万' },
        { id: 2, src: '../506.png', text: '来一打欢快的网络歌曲放松心情', play: '播放量:104.8万' },
        { id: 3, src: '../507.png', text: '音乐响起时，我们约定幸福一辈子', play: '播放量:72.6万' },
        { id: 4, src: '../508.png', text: '『回顾网络』你熟悉的不光是旋律', play: '播放量:65.2万' },
        { id: 5, src: '../509.png', text: '网络合唱，这音乐深入人心', play: '播放量:76.3万' }
      ],
      list_g: [
        { id: 1, src: '../300.png', text: '不为人知的天才，老一辈香港音乐人', play: '播放量:51.0万' },
        { id: 2, src: '../301.png', text: '以漂亮的姿势，穿越到八十年代', play: '播放量:87.1万' },
        { id: 3, src: '../302.png', text: '「经典粤语」唱着你我的悲欢离合', play: '播放量:123.4万' },
        { id: 4, src: '../303.png', text: '重温一把当年的火，粤语经典', play: '播放量:104.8万' },
        { id: 5, src: '../304.png', text: '有一种歌词，叫小美', play: '播放量:315.5万' }
      ],
      list_h: [
        { id: 1, src: '../305.png', text: '粤语：灵魂音律 入耳精选', play: '播放量:224.4万' },
        { id: 2, src: '../306.png', text: '来一打欢快的网络歌曲放松心情', play: '播放量:104.8万' },
        { id: 3, src: '../307.png', text: '音乐响起时，我们约定幸福一辈子', play: '播放量:72.6万' },
        { id: 4, src: '../308.png', text: '『回顾网络』你熟悉的不光是旋律', play: '播放量:65.2万' },
        { id: 5, src: '../309.png', text: '网络合唱，这音乐深入人心', play: '播放量:76.3万' }
      ],
      list_i: [
        { id: 1, src: '../700.png', text: '华语| 原住民之歌', play: '播放量:5.1万' },
        { id: 2, src: '../701.png', text: '华语| 早安民谣', play: '播放量:12.3万' },
        { id: 3, src: '../702.png', text: '辣妹必入‖☪︎⋆酷拽小妖精', play: '播放量:737.7万' },
        { id: 4, src: '../703.png', text: '华语| 忆故乡', play: '播放量:32.7万' },
        { id: 5, src: '../704.png', text: '韩语｜情歌二重唱', play: '播放量:11.9万' }
      ],
      list_j: [
        { id: 1, src: '../705.png', text: '华语流行|想度假', play: '播放量:24.6万' },
        { id: 2, src: '../706.png', text: '华语| 厨房时间', play: '播放量:7.2万' },
        { id: 3, src: '../707.png', text: 'Urban厂牌合辑| HI-LITE RECORDS', play: '播放量:10.5万' },
        { id: 4, src: '../708.png', text: '华语 | 一起野餐吧', play: '播放量:13.3万' },
        { id: 5, src: '../709.png', text: '轻音乐 | 心在旅行', play: '播放量:39.5万' }
      ],
      list_k: [
        { id: 1, src: '../800.png', text: '泰式浪漫：你想要的甜蜜幻想', play: '播放量:9.5万' },
        { id: 2, src: '../801.png', text: '【真情流露】2010的声音倾吐芬芳', play: '播放量:23.9万' },
        { id: 3, src: '../802.png', text: '金牌作曲人于逸尧：生活中的止疼药', play: '播放量:8.7万' },
        { id: 4, src: '../803.png', text: '音乐里那些不言而喻的“我爱你”', play: '播放量:55.6万' },
        { id: 5, src: '../804.png', text: '温柔华语 | 把故事藏在歌中', play: '播放量:131.9万' }
      ],
      list_l: [
        { id: 1, src: '../805.png', text: '【情歌对唱】幸福要握在手心里', play: '播放量:25.7万' },
        { id: 2, src: '../806.png', text: '小奶狗心动警报!年下恋OST', play: '播放量:38.1万' },
        { id: 3, src: '../807.png', text: '六年级生最爱的国语女声情歌', play: '播放量:47.9万' },
        { id: 4, src: '../808.png', text: '异地恋：山河万里 不惧爱你', play: '播放量:40.1万' },
        { id: 5, src: '../809.png', text: '姚若龙 陈小霞：暖心情诗 恋恋如歌', play: '播放量:104.5万' }
      ],
      item_a: [
        { id: 1, src: '../1.png', text: '《老人与海》', author: 'G.E.M.邓紫棋', play: '5.6万' },
        { id: 2, src: '../2.png', text: '《只在意你的一切》', author: '曾沛慈', play: '3292' },
        { id: 3, src: '../3.png', text: '《赵泳鑫 2022全国巡演《日落派对》》', author: '赵泳鑫', play: '729' },
        { id: 4, src: '../4.png', text: '《不舍（《不期而遇的歌·巡声》小红花公益音乐会主题曲）》', author: '陈楚生 /苏醒AllenSu /张远 /陆虎', play: '1.4万' },
        { id: 5, src: '../5.png', text: '《少年与海》', author: 'G.E.M.邓紫棋', play: '18.7万' },
        { id: 6, src: '../6.png', text: '《（......醉鬼阿Q)(feat.孙燕姿）》', author: '吴青峰 /孙燕姿', play: '6.6万' },
        { id: 7, src: '../7.png', text: '《痒痒 (feat. 徐佳莹)》', author: '八三夭乐团 /徐佳莹', play: '2.2万' },
        { id: 8, src: '../8.png', text: '《还是爱着》', author: '王铮亮', play: '1.1万' },
        { id: 9, src: '../9.png', text: '《AFTER THIS JOURNEY》', author: '艾福杰尼', play: '4195' },
        { id: 10, src: '../10.png', text: '《Million Dollar Baby》', author: 'Ava Max', play: '9427' },
      ],
      item_b: [
        { id: 1, src: '../11.png', text: '《毛不易x大山师生合唱团《无问》公益特别版》', author: '毛不易', play: '3.1万' },
        { id: 2, src: '../12.png', text: '《0713再就业男团x乡村老人《时间都去哪儿了》公益特别版》', author: '王铮亮 /陈楚生 /陆虎 /苏醒AllenSu ', play: '2.0万' },
        { id: 3, src: '../13.png', text: '《EDGx红雨伞听障儿童合唱团《孤勇者》公益特别版》', author: 'EDG电子竞技俱乐部', play: '9.2万' },
        { id: 4, src: '../14.png', text: '《乐园Wonder》', author: 'CoCo李玟', play: '8610' },
        { id: 5, src: '../15.png', text: '《冰河时代》', author: 'G.E.M.邓紫棋', play: '18.8万' },
        { id: 6, src: '../16.png', text: '《瑕面舞会》', author: '希林娜依高', play: '13.9万' },
        { id: 7, src: '../17.png', text: '《TWICE-Talk that Talk》', author: 'TWICE', play: '66.9万' },
        { id: 8, src: '../18.png', text: '《far away》', author: '段宜恩', play: '2.4万' },
        { id: 9, src: '../19.png', text: '《受难曲》', author: 'G.E.M.邓紫棋', play: '25.3万' },
        { id: 10, src: '../20.png', text: '《你不是一个人》', author: '张信哲 /薛之谦', play: '18.4万' },
      ],
      item_c: [
        { id: 1, src: '../21.png', text: '迟迟', author: '薛之谦', play: '828.4万' },
        { id: 2, src: '../22.png', text: '变废为宝', author: '薛之谦', play: '112.5万' },
        { id: 3, src: '../23.png', text: '像真的一样', author: '张杰', play: '49.6万' },
        { id: 4, src: '../24.png', text: '只为真相（《真相》网剧片尾主题曲）', author: '周深', play: '519.1万' },
        { id: 5, src: '../25.png', text: '山河星光', author: '王一博', play: '81.3万' },
        { id: 6, src: '../26.png', text: '给我星辰的人（《我和我的父辈》电影片头曲）', author: '雷佳', play: '15.0万' },
        { id: 7, src: '../27.png', text: '又到梧桐吐绿时', author: '张杰', play: '24.3万' },
        { id: 8, src: '../28.png', text: '天大的小事（《五个扑水的少年》电影推广曲）', author: '张继科', play: '7.4万' },
        { id: 9, src: '../29.png', text: '时结（王者荣耀-荣耀中国节年度推广曲）"', author: '周深 /王者荣耀', play: '697.9万' },
        { id: 10, src: '../30.png', text: '意气趁年少', author: '摩登兄弟刘宇宁', play: '53.7万' },
      ],
      item_d: [
        { id: 1, src: '../31.png', text: '最用过心的', author: '张杰', play: '365.4万' },
        { id: 2, src: '../32.png', text: '牵一双手', author: '希林娜依高', play: '38.3万' },
        { id: 3, src: '../33.png', text: '赤伶(2021交响乐版)', author: '李玉刚 /国风新语', play: '492.0万' },
        { id: 4, src: '../34.png', text: '朱雀', author: '时代少年团', play: '1080.3万' },
        { id: 5, src: '../35.png', text: '放过自己好吗', author: '吴莫愁', play: '9.9万' },
        { id: 6, src: '../36.png', text: '染色体', author: '张杰', play: '33.4万' },
        { id: 7, src: '../37.png', text: '一块做好事', author: '河南博物院华夏古乐团', play: '5.6万' },
        { id: 8, src: '../38.png', text: '唯有长夜知', author: '安九 /河图 /李建衡', play: '14.6万' },
        { id: 9, src: '../39.png', text: '歌唱二小放牛郎', author: '成毅', play: '12.8万' },
        { id: 10, src: '../40.png', text: '国旗之下', author: '黄景瑜 /陈燕妮', play: '6.5万' },
      ],
      item_e: [
        { id: 1, src: '../41.png', text: '最悲伤的事', author: 'A-Lin', play: '11.8万' },
        { id: 2, src: '../42.png', text: '彼得潘', author: '萧敬腾', play: '5.3万' },
        { id: 3, src: '../43.png', text: '明天，双人舞', author: '梁静茹', play: '15.3万' },
        { id: 4, src: '../44.png', text: '滚烫的燃烧', author: '袁咏琳', play: '3.5万' },
        { id: 5, src: '../45.png', text: '不配', author: '容祖儿', play: '17.0万' },
        { id: 6, src: '../46.png', text: '昨天，一点爱', author: '梁静茹', play: '6.3万' },
        { id: 7, src: '../47.png', text: ' 城里的月光2021', author: '华研众星 HIM FAMILY', play: '24.3万' },
        { id: 8, src: '../48.png', text: 'I Want...', author: '陈奕迅 /Renée Fleming /郎朗', play: '89.4万' },
        { id: 9, src: '../49.png', text: '奇异博士"', author: '吴克群', play: '9.0万' },
        { id: 10, src: '../50.png', text: '最好的结局 10th anniv.[人生就是用来XX的]2021线上生日趴 Live session', author: '八三夭乐团', play: '5.2万' },
      ],
      item_f: [
        { id: 1, src: '../51.png', text: '我讨厌台北的天气', author: '林昱君', play: '4.5万' },
        { id: 2, src: '../52.png', text: '这世界那么多人', author: '莫文蔚', play: '4041.9万' },
        { id: 3, src: '../53.png', text: '裹着心的光', author: '林俊杰', play: '2158.7万' },
        { id: 4, src: '../54.png', text: '等风雨经过', author: '张学友', play: '424.7万' },
        { id: 5, src: '../55.png', text: '逆着人群奔向你', author: '张韶涵', play: '529.7万' },
        { id: 6, src: '../56.png', text: '离开你以后', author: 'Eric周兴哲', play: '594.7万' },
        { id: 7, src: '../57.png', text: '锦绣梦', author: 'F.I.R.飞儿乐团', play: '71.4万' },
        { id: 8, src: '../58.png', text: '施舍', author: '杨宗纬', play: '46.8万' },
        { id: 9, src: '../59.png', text: '铁血丹心', author: '任贤齐 /赖美云', play: '124.6万' },
        { id: 10, src: '../60.png', text: '生日快乐', author: '卓依婷', play: '264.5万' },
      ],
      item_g: [
        { id: 1, src: '../61.png', text: 'Easy On Me', author: 'Adele', play: '234.2万' },
        { id: 2, src: '../62.png', text: 'Money On Me', author: 'Lil Tecca', play: '1.2万' },
        { id: 3, src: '../63.png', text: 'Good Advice', author: 'Nick Phoenix', play: '5058' },
        { id: 4, src: '../64.png', text: 'Blue', author: 'Stalking Gia', play: '3867' },
        { id: 5, src: '../65.png', text: 'Elgar: Chanson de Nuit, Op. 15, No. 1', author: 'Daniel Hope /Christoph Israel', play: '2140' },
        { id: 6, src: '../66.png', text: 'UNCONDITIONAL LOVE "LONG LIVE RAERAE"', author: '2KBABY', play: '2263' },
        { id: 7, src: '../67.png', text: ' bananas', author: 'SonReal', play: '1708' },
        { id: 8, src: '../68.png', text: 'Be There', author: 'Kastra /Lost Boy', play: '2589' },
        { id: 9, src: '../69.png', text: 'All Night Long"', author: 'Calboy', play: '1064' },
        { id: 10, src: '../70.png', text: 'rrenhaus', author: 'Harris & Ford /Outsiders', play: '1220' },
      ],
      item_h: [
        { id: 1, src: '../71.png', text: 'Stay', author: 'The Kid LAROI /Justin Bieber', play: '3781.0万' },
        { id: 2, src: '../72.png', text: "Don't Wait Up", author: 'Shakira', play: '62.4万' },
        { id: 3, src: '../73.png', text: 'could cry just thinking about you', author: 'Troye Sivan', play: '15.7万' },
        { id: 4, src: '../74.png', text: 'NDA', author: 'Billie Eilish', play: '26.5万' },
        { id: 5, src: '../75.png', text: "Don't Go Yet", author: 'Camila Cabello', play: '7.6万' },
        { id: 6, src: '../76.png', text: "Ain't Got No Friends", author: 'Conor Maynard', play: '11.8万' },
        { id: 7, src: '../77.png', text: 'Motley Crew', author: 'Post Malone', play: '8.1万' },
        { id: 8, src: '../78.png', text: 'Say So', author: 'Masked Wolf', play: '2.9万' },
        { id: 9, src: '../79.png', text: 'Me + You', author: 'Sabai /Rave New World', play: '5.3万' },
        { id: 10, src: '../80.png', text: 'The Portrait (Ooh La La)', author: 'R3HAB /Gabry Ponte', play: '3.6万' },
      ],
      item_i: [
        { id: 1, src: '../81.png', text: 'aespa《Savage》MV', author: 'aespa', play: '1284.9万' },
        { id: 2, src: '../82.png', text: 'NCT 127《Sticker》MV', author: 'NCT 127', play: '443.6万' },
        { id: 3, src: '../83.png', text: "LISA - 'LALISA' M/V", author: 'LISA', play: '1641.2万' },
        { id: 4, src: '../84.png', text: 'Love Me Like That', author: 'SAM KIM', play: '125.5万' },
        { id: 5, src: '../85.png', text: 'BUFFALO (Feat. 다미 of 드림캐쳐, 송은이, 유승우, 윤지영, 정세운, 15인의 소띠들)', author: '鲜于贞雅', play: '8725' },
        { id: 6, src: '../86.png', text: '악몽 (Nightmare)', author: 'Sondia', play: '2.3万' },
        { id: 7, src: '../87.png', text: 'Alone', author: 'JUNNY', play: '8384' },
        { id: 8, src: '../88.png', text: '제주도의 푸른밤 (The Blue Night Of Jeju Island)', author: '바다', play: '6082' },
        { id: 9, src: '../89.png', text: '그런 날 그런 밤 (That Day That Night)', author: '혜인 /Hailey Jeong', play: '3669' },
        { id: 10, src: '../90.png', text: 'Nody, Alright?', author: '노디시카 (Nody Cika)', play: '3226' },
      ],
      item_j: [
        { id: 1, src: '../91.png', text: '太妍《Weekend》MV', author: '太妍', play: '709.4万' },
        { id: 2, src: '../92.png', text: "Lovesick Girls", author: 'BLACKPINK', play: '508.0万' },
        { id: 3, src: '../93.png', text: 'NCT DREAM《Hello Future》MV', author: 'NCT DREAM', play: '257.9万' },
        { id: 4, src: '../94.png', text: 'When Dawn Comes Again (또 새벽이 오면)', author: 'Colde /伯贤', play: '75.0万' },
        { id: 5, src: '../95.png', text: "Perfect World", author: 'TWICE', play: '106.3万' },
        { id: 6, src: '../96.png', text: "逆燃", author: 'SEVENTEEN /JOSHUA /文俊辉 /徐明', play: '11.8万' },
        { id: 7, src: '../97.png', text: "'Hey Kid, Close Your Eyes (with Lee Sun Hee)' OFFICIAL VIDEO (전쟁터)", author: 'AKMU /李仙姬', play: '23.5万' },
        { id: 8, src: '../98.png', text: '좋아좋아 (I Like You)', author: '曹政奭', play: '18.5万' },
        { id: 9, src: '../99.png', text: '해야 해 (Make It)', author: '2PM', play: '56.3万' },
        { id: 10, src: '../100.png', text: '비 오는 날 듣기 좋은 노래 (Rain Song)', author: 'Epik High /Colde', play: '34.2万' },
      ],
      item_k: [
        { id: 1, src: '../101.png', text: '七个音符的距离〜SevenNotes〜', author: '七穗', play: '4.4万' },
        { id: 2, src: '../102.png', text: 'undress me', author: 'Cö shu Nie', play: '2.1万' },
        { id: 3, src: '../103.png', text: "LISA - 'LALISA' M/V", author: 'LISA', play: '1641.2万' },
        { id: 4, src: '../104.png', text: 'G4L', author: 'ギガP', play: '9421' },
        { id: 5, src: '../105.png', text: 'Numb', author: '二宮愛', play: '4616' },
        { id: 6, src: '../106.png', text: 'しあわせのレシピ', author: 'れるりり /可不', play: '4657' },
        { id: 7, src: '../107.png', text: '花は二度散る', author: '40mP', play: '5934' },
        { id: 8, src: '../108.png', text: 'サングラスデイズ', author: 'STU48', play: '3145' },
        { id: 9, src: '../109.png', text: 'CENTRAL', author: '坂口有望', play: '4118' },
        { id: 10, src: '../110.png', text: '全部ブロック', author: 'Non Stop Rabbit', play: '2770' },
      ],
      item_l: [
        { id: 1, src: '../111.png', text: 'シークレット・シュガー', author: '降幡愛', play: '3139' },
        { id: 2, src: '../112.png', text: "音楽はおくりもの", author: '矢野顕子', play: '2086' },
        { id: 3, src: '../113.png', text: 'A.L.I.E.N', author: 'JP THE WAVY', play: '1705' },
        { id: 4, src: '../114.png', text: 'vermisst', author: 'そこに鳴る', play: '1484' },
        { id: 5, src: '../115.png', text: "リピーター", author: '3776', play: '730' },
        { id: 6, src: '../116.png', text: "horizon", author: '水の中で雨中', play: '701' },
        { id: 7, src: '../117.png', text: "三原色", author: 'YOASOBI', play: '342.1万' },
        { id: 8, src: '../118.png', text: 'パプリカ', author: 'Foorin', play: '356.8万' },
        { id: 9, src: '../119.png', text: 'PINK BLOOD', author: '宇多田光', play: '398.3万' },
        { id: 10, src: '../120.png', text: 'RGB', author: 'YOASOBI', play: '67.3万' },
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
  font-size: 14px;
  color: black;
}

span {
  font-size: 14px;
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
  top: 2%;
  left: 15%;
}

.logo img {
  width: 130px;
  height: 35px;
}

.lead {
  position: absolute;
  top: 2%;
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
  top: 2%;
  left: 70%;
  outline: medium;
}

.icon {
  font-family: 'icomoon';
  position: absolute;
  top: 2%;
  left: 78%;
  font-size: 20px;
}

.login {
  font-family: 'icomoon';
  position: absolute;
  top: 2%;
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
  top: 93%;
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
  width: 224px;
  list-style: none;
  position: relative;
}

.box span {
  margin-top: 3px;
  float: left;
  font-family: 'icomoon';
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

.box li h4,
.box li h6 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 2px;
}

.circle_a {
  position: absolute;
  top: 174%;
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
  width: 420px;
  height: 240px;
  position: absolute;
  top: 100px;
  left: 1300px;
}

.footer .c .c_a {
  display: flex;
  justify-content: space-between;
}

.footer .c .c_a span {
  padding-top: 20px;
  margin-left: 20px;
}

.first {
  width: 135px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}

.second {
  width: 135px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}

.third {
  width: 135px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}

.elf {
  float: left;
  width: 380px;
  height: 48px;
  position: absolute;
  top: 140px;
  left: 420px;
}

.elf_a {
  display: inline-block;
  width: 80px;
  height: 48px;
  background: url(../../img/footer.png);
}

.elf_b {
  display: inline-block;
  width: 80px;
  height: 48px;
  background: url(../../img/footer.png) -90px 0;
}

.elf_c {
  display: inline-block;
  width: 90px;
  height: 48px;
  background: url(../../img/footer.png) -180px 0;
}

.elf_d {
  display: inline-block;
  width: 90px;
  height: 48px;
  background: url(../../img/footer.png) -270px 0;
}

.spirit {
  float: left;
  width: 380px;
  height: 48px;
  position: absolute;
  top: 140px;
  left: 820px;
}

.spirit_a {
  display: inline-block;
  width: 80px;
  height: 48px;
  background: url(../../img/footer.png) -360px 0;
}

.spirit_b {
  display: inline-block;
  width: 70px;
  height: 48px;
  background: url(../../img/footer.png) -450px 0;
}

.spirit_c {
  display: inline-block;
  width: 90px;
  height: 48px;
  background: url(../../img/footer.png) -540px 0;
}

.spirit_d {
  display: inline-block;
  width: 90px;
  height: 48px;
  background: url(../../img/footer.png) -630px 0;
}


.font_a,
.font_b,
.font_c,
.font_d,
.font_e,
.font_f,
.font_g,
.font_h {
  position: absolute;
  bottom: -28px;
}

.font_c {
  position: absolute;
  left: 154px;
}

.font_d {
  position: absolute;
  left: 251px;
}

.font_g {
  position: absolute;
  left: 171px;
}

.footer .d {
  position: absolute;
  top: 300px;
  left: 430px;
}

.footer .d .d_a,
.e .e_a {
  margin-top: 50px;
}

.footer .d .d_a a,
.e .e_a {
  margin-left: 30px;
}

.footer .e {
  position: absolute;
  top: 300px;
  left: 850px;
}

.elf_a:hover {
  background: url(../../img/footer.png) 0px -48px;
}

.elf_b:hover {
  background: url(../../img/footer.png) -90px -48px;
}

.elf_c:hover {
  background: url(../../img/footer.png) -180px -48px;
}

.elf_d:hover {
  background: url(../../img/footer.png) -270px -48px;
}

.spirit_a:hover {
  background: url(../../img/footer.png) -360px -48px;
}

.spirit_b:hover {
  background: url(../../img/footer.png) -450px -48px;
}

.spirit_c:hover {
  background: url(../../img/footer.png) -540px -48px;
}

.spirit_d:hover {
  background: url(../../img/footer.png) -630px -48px;
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
