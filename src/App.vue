<template>
  <div id="app">  
      <div class="container">
        <h2 class="login">系统登录</h2>
        <span class="world"></span>
        <div class="admin">
          <span style="vertical-align: middle">: </span>
          <input type="text" name="admin" id="admin" placeholder="admin" value="admin" />
        </div>
        <div class="password"><span style="vertical-align: middle">: </span><input type="password" name="password" id="password" placeholder="password" value="password" /></div>
        <button class="btn">登录</button>
        <div class="tag">
          账号:admin 随便填
          <br />
          密码:password 随便填
        </div>
        <div>
          <button class="third">第三方登录</button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(45, 58, 75);
}

span {
  font-family: 'icomoon';
  color: rgb(136, 154, 164);
  font-size: 30px;
}

.router-link-active {
  text-decoration: none;
  color: white;
}

.login {
  text-align: center;
  color: white;
}

.container {
  position: relative;
  /* background-color: aliceblue; */
  height: 520px;
  margin: auto;
  margin-top: 8%;
}

.lang {
  width: 100px;
  height: 220px;
}

.world {
  font-family: 'icomoon';
  position: absolute;
  top: 2%;
  right: 15%;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.admin {
  position: absolute;
  top: 16%;
  left: 10%;
  text-align: center;
}

.password {
  position: absolute;
  top: 30%;
  left: 10%;
}

#admin {
  width: 400px;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  /* 点击文本框时往左10px */
  outline: medium;
  /* 点击不显示边框 */
}

#password {
  width: 400px;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  outline: medium;
}

.btn {
  position: absolute;
  top: 44%;
  left: 10%;
  border: none;
  background-color: rgb(25, 144, 255);
  text-align: center;
  width: 465px;
  height: 30px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}

.tag {
  position: absolute;
  color: white;
  top: 54%;
  left: 10%;
}

.third {
  position: absolute;
  top: 55%;
  left: 62%;
  border: none;
  background-color: rgb(25, 144, 255);
  text-align: center;
  width: 180px;
  height: 30px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 530px) {
  .container {
    width: 380px;
  }
}

@media screen and (min-width: 630px) {
  .container {
    width: 530px;
  }
}

@font-face {
  font-family: 'icomoon';
  src: url('../fonts/icomoon.eot?q18amb');
  src: url('../fonts/icomoon.eot?q18amb#iefix') format('embedded-opentype'), url('../fonts/icomoon.ttf?q18amb') format('truetype'), url('../fonts/icomoon.woff?q18amb') format('woff'), url('../fonts/icomoon.svg?q18amb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
</style>
