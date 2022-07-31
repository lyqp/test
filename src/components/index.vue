<template>
  <div class="app">
    <div class="header">
      <div class="logo"><img src="../../img/logo.jpg" alt="logo" /></div>
      <div class="search">查询物品</div>
      <div class="parameter">规格参数</div>
      <div class="content">内容分类管理</div>
      <div class="user">ikun</div>
      <button class="btn">退出</button>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header">添加品牌</div>
        <div class="card-body">
          <form @submit.prevent="add">
            <!-- form表单有sumbit事件，即当有点击button会刷新网页,所以这里设置阻止刷新页面的行为 -->
            <div class="sumbit">
              <input type="text" placeholder="请输入品牌名称" v-model.trim="brand" />
              <button >添加</button
              ><!--  -->
            </div>
          </form>
        </div>
      </div>
      <table align="center" border="1" cellpadding="0" cellspacing="0" width="700px" height="50px" class="table">
        <thead align="center">
          <th>#</th>
          <th>品牌名称</th>
          <th>状态</th>
          <th>创建时间</th>
          <th>操作</th>
        </thead>
        <tbody align="center">
          <tr v-for=" item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div>
                <input type="checkbox" v-model="item.status" :id="'cb' + item.id" />
                <!-- 注意这里cb要加冒号，因为他是一个字符串 -->
                <!-- 设置复选框的id，再利用label的for属性，就可以使点击label的值是复选框选中 -->
                <!-- 如果我们不用：id的话，id会被写死，无论你点击第几个label都只会是第一个复选框变化，所以利用v-bind来实现动态命名id值 -->
                <!-- <label v-if="item.status === true">已启用</label>其实也没必要写辨别，因为if也可以判断true或者false -->
                <label :for="'cb' + item.id" v-if="item.status">已启用</label>
                <label :for="'cb' + item.id" v-else>已禁用</label>
              </div>
            </td>
            <td>{{ item.time | dateformat }}</td>
            <td><a href="javascript:;" @click="remove(item.id)">删除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //添加的名称：
      brand: '',
      //下一个可用的id：
      nextid: 4,
      //品牌的列表
      list: [
        { id: 1, name: '宝马', status: true, time: new Date() },
        { id: 2, name: '奔驰', status: false, time: new Date() },
        { id: 3, name: '奥迪', status: true, time: new Date() } //这个date（）在Vue里也有对应的程序
      ]
    }
  },
  methods: {
    remove(id) {
      this.list = this.list.filter(item => item.id != id)
      //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      //运算符 => 将左侧的输入参数与右侧的 lambda 主体分开。
      //其实可以顾名思义，就是左边的数据变成后边经过条件筛选过的数据
    },
    add() {
      //避免用户填入的为空格
      if (this.brand == '') {
        ~alert('请输入名称')
        return
      } else {
        //1先把要添加的品牌对象整理出来
        const obj = {
          id: this.nextid,
          name: this.brand,
          status: true,
          time: new Date()
        }
        //2,往this.list 数组中push步骤1中得到的对象
        this.list.push(obj)
        //3，清空this.brand；让nextid自增1
        this.brand = ''
        this.nextid += 1 //注意这里的nextid需要加上this.因为这里仍然是add里面
      }

      //这里有个进阶小技巧，上面的写法可以简写为：
      // 如果if语句内的条件是正确的，就会return出去，实现return后面的代码
      // if(this.brand == '') return alert('请输入名称')
      //如果没有return出去，就会执行下面的程序
      //1先把要添加的品牌对象整理出来
      // const obj = {
      //     id: this.nextid,
      //     name: this.brand,
      //     status: true,
      //     time: new Date(),
      // }
      //2,往this.list 数组中push步骤1中得到的对象
      // this.list.push(obj);
      //3，清空this.brand；让nextid自增1
      // this.brand = '',
      // nextid += 1
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.header {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: rgb(45, 49, 61);
}

.container {
  height: 500px;
  margin: 50px auto;
}

.logo {
  position: absolute;
  top: 15px;
  left: 12%;
}

.logo img {
  height: 70px;
}

.search {
  font-family: 'icomoon';
  color: rgb(8, 122, 54);
  font-size: 20px;
  position: absolute;
  top: 34%;
  left: 33%;
}

.parameter {
  font-family: 'icomoon';
  color: white;
  font-size: 20px;
  position: absolute;
  top: 34%;
  left: 49%;
}

.content {
  font-family: 'icomoon';
  color: white;
  font-size: 20px;
  position: absolute;
  top: 34%;
  left: 65%;
}

.user {
  font-family: 'icomoon';
  color: white;
  font-size: 20px;
  position: absolute;
  top: 34%;
  left: 82%;
}

.btn {
  position: absolute;
  top: 34%;
  left: 87%;
  border-radius: 10px;
  width: 60px;
  height: 25px;
}

.card {
  text-align: center;
}

.table {
  margin: 40px auto 0px;
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
