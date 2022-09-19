<template>
    <div id="app">
        <div class="head">
            <div class="container">
                <h2 class="login">注册</h2>
                <span class="world"></span>
                <form action="signup">
                    <div class="admin">
                        <span style="vertical-align: middle">：</span>
                        <input type="text" name="admin" id="admin" placeholder="admin" v-model="signup.name" />
                    </div>
                    <div class="password"><span style="vertical-align: middle" class="a">：</span>
                        <input type="text" name="password" id="password" placeholder="password"
                            v-model="signup.password" v-if="type" />
                        <input type="password" name="password" id="password" placeholder="password"
                            v-model="signup.password" v-else />
                    </div>
                </form>
                <div class="eye"><img :src="seen ? seenImg : noseenImg" @click="change"></div>
                <button class="btn" @click="sign">注册</button>
                <button class="signup" @click="gotoLogin">已有账号，点此登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            seen: '',
            type: false,
            seenImg: require("../../img/seen.png"),
            noseenImg: require("../../img/noseen.png"),
            signup: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        change: function () {
            this.seen = !this.seen;
            this.type = !this.type;
        },
        gotoLogin: function () {
            this.$router.push('/');
        },
        sign: function () {
            this.$axios.post('http://43.142.61.134:9090/user/register', {
                username: this.signup.name,
                password: this.signup.password
            }).then(function (res) {
                console.log(res);
                    this.$router.replace({
                        path: '/music'
                    })
            }).catch(function (err) {
                console.log(err);
                alert('注册方式不合法，请重试');
            })
        }
    }
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

.head {
    height: 520px;
    /* overflow: hidden; */
}

.container {
    position: relative;
    /* background-color: aliceblue; */
    height: 520px;
    margin: auto;
    margin-top: 8%;
    /* overflow: hidden; */
}

.admin {
    position: absolute;
    top: 16%;
    left: 39%;
    text-align: center;
}

.password {
    position: absolute;
    top: 30%;
    left: 39%;
}

.eye {
    position: absolute;
    top: 31%;
    left: 1149px;
    cursor: pointer;
}

.eye img {
    width: 51px;
    height: 29px;
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
    left: 52%;
    border: none;
    background-color: rgb(25, 144, 255);
    text-align: center;
    width: 165px;
    height: 30px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
}

.signup {
    position: absolute;
    top: 44%;
    left: 39%;
    border: none;
    background-color: rgb(25, 144, 255);
    text-align: center;
    width: 165px;
    height: 30px;
    border-radius: 20px;
    color: white;
    cursor: pointer
}

@font-face {
    font-family: 'icomoon';
    src: url('../../fonts/icomoon.eot?rzbi9x');
    src: url('../../fonts/icomoon.eot?rzbi9x#iefix') format('embedded-opentype'),
        url('../../fonts/icomoon.ttf?rzbi9x') format('truetype'),
        url('../../fonts/icomoon.woff?rzbi9x') format('woff'),
        url('../../fonts/icomoon.svg?rzbi9x#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}
</style>
   