<template>
	<div>
		<div class="main">
			<div class="logo">
				<i class="icon iconfont icon-cc-user"></i>
			</div>
			<div class="login">
				<input type="text" placeholder="账号" v-model="username">
				<input type="password" placeholder="密码" v-model="password">
				<input type="button" value="登录" v-if="flag" @click="login">
				<input type="button" value="注册" v-if="!flag" @click="register">
			</div>
			<p class="register" v-if="!flag" @click="flag=!flag">马上登录</p>
			<p class="register" v-if="flag" @click="flag=!flag">马上注册</p>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.main{
		text-align: center;
		position: absolute;
	    left: 50%;
	    top: 43%;
	    transform: translate(-50%,-50%);
	}
	.logo{
		margin: 60px auto;
	}
	.logo i{
		font-size: 90px;
	}
	.login{
		margin: 10px auto;
	    width: 200px;
	}
	.login input{
		width: 100%;
	    border: none;
	    text-align: center;
	    font-size: 16px;
	    border-bottom: 1px solid rgba(230,230,230,1);
	    margin: 10px 0;
	    padding: 5px 0;
	    outline: none;
	}
	.login input[type='button']{
		margin-top: 50px;
	    height: 40px;
	    color: #fff;
	    background: #af75e2;
	}
	.register{
		cursor: pointer;
	    font-size: 12px;
	}
</style>

<script>
	import {mapState, mapMutations} from 'vuex'

	export default {
		data () {
			return {
				flag: true,
				username: '',
				password: '',
				sFlag: false,  //stock连接状态
			}
		},
		created () {
			this.SID('');
			this.UID('');
			this.USER('');
		},
		computed: {
			...mapState([
				'sid',
				'uid',
				'userstate',
			])
		},
		methods: {
			...mapMutations([
                'SID',
                'UID',
                'USER',
            ]),
			alertMsg (msg) {
				layer.msg(msg, function(){
					console.log(msg);
				});
			},
			login () {
				if(this.username && this.password){
					let data = new FormData();
					data.append('username', this.username);
					data.append('password', this.password);

					this.axios.post('/api/login', data)
						.then((response) => {
							console.log(response.data);
							let res = response.data;
							if(res.msg){
								if(res.code == '0'){
									layer.msg(res.msg);
								}else{
									this.alertMsg(res.msg);
								}
							}
							if(res.code == '0' && res.sid){
								this.SID(res.sid);
								this.UID(res.uid);
								setTimeout(function(){
									// socket连接
									this.sFlag = this.stockConnect();
									if(this.sFlag){
										this.$router.push('/user');
									}else{
										this.alertMsg('登录失败，请重新登录');
									}
								}.bind(this), 2000);
							}
						})
						.catch((err) => {
							console.log(err);
						})
				}else{
					this.alertMsg('用户名或密码不能为空');
				}
			},
			register () {
				if(this.username && this.password){
					let data = new FormData();
					data.append('username', this.username);
					data.append('password', this.password);

					this.axios.post('/api/register', data)
						.then((response) => {
							let res = response.data;
							if(res.msg){
								if(res.code == '0'){
									layer.msg(res.msg);
								}else{
									this.alertMsg(res.msg);
								}							
							}
							if(res.code == '0' && res.sid){
								this.SID(res.sid);
								this.UID(res.uid);
								setTimeout(function(){
									this.$router.push('/user');
								}.bind(this), 2000);
							}
						})
						.catch((err) => {
							console.log(err);
						})
				}else{
					this.alertMsg('用户名或密码不能为空');
				}
			},
			stockConnect () {
				if(!this.sid || !this.uid){
					return false;
				}
				var connectUrl = '127.0.0.1:8000/chat';
				var user = new this.user(this.sid, this.uid);
				user.socketObj.connect(connectUrl);
				this.USER(user);
				return true;
			}
		}
	}
</script>