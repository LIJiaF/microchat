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
	export default {
		data () {
			return {
				flag: true,
				username: '',
				password: ''
			}
		},
		methods: {
			login () {
				if(this.username || this.password){
					this.$router.push('info');
				}else{
					alert('用户名或密码不能为空');
				}
			},
			register () {

			}
		}
	}
</script>