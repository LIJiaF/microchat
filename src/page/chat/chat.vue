<template>
	<div>
		<Header :title="currentUser" :is-chat="true">
			<i slot="back" class="icon iconfont icon-fanhui font"  @click="$router.go(-1)"></i>
		</Header>
		<div class="main" id="main">
			<div class="chat" v-for="(item,index) in chaList" :key="index">
				<div class="chaList left" v-if="!item.currentUser">
					<img :src="item.photo">
					<p>{{ item.content }}</p>
				</div>
				<div class="chaList right" v-if="item.currentUser">
					<p>{{ item.content }}</p>
					<img :src="item.photo">
				</div>
			</div>
		</div>
		<div class="footer">
			<input type="text" class="chatInput" v-model="sendContent">
			<button class="btn" @click="sendChat">发送</button>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.main{
		padding-top: 40px;
		padding-bottom: 48px;
		color:#333;
		overflow: hidden;
	}
	.chat{
		overflow: hidden;
	}
	.chaList{
		display: flex;
		align-items:flex-start;
		margin:5px;
	}
	.chaList img{
		flex-grow: 0;
		height:40px;
    	border-radius: 50%;
	}
	.chaList p{
		flex-grow: 1;
		margin-top: 5px;
		padding: 10px;
    	font-size: 14px;
    	line-height: 20px;
    	border-radius: 10px;
	}
	.left{
		float: left;
		padding-right: 40px;
	}
	.left p{
		margin-left: 5px;
    	border: 1px solid #ccc;
	}
	.right{
		float:right;
		padding-left: 40px;
	}
	.right p{
		margin-right: 5px;
    	background: #F98383;
	}
	.footer{
		position: fixed;
		bottom:0;
		height:48px;
		display: flex;
		width:100%;
		box-shadow: 1px 0 5px rgba(249,131,131,0.5);
		background: #fff;
	}
	.chatInput{
		width:100%;
		margin:10px 0 10px 10px;
		font-size: 14px;
    	padding: 5px 0;
		outline: none;
		flex-flow: 1;
		border-bottom: 1px solid #ccc;
	}
	.btn{
		width:80px;
		padding:0;
		font-size: 16px;
		flex-flow: 0;
		border: none;
		background: #fff;
		color:#f98383;
		outline: none;
		cursor: pointer;
	}
</style>

<script>
	import Header from '@/components/header/header.vue'

	export default {
		data () {
			return {
				chaList: [
					{photo: require('../../image/touxiang.jpg'), content: '这是一条信息。这是一条信息', currentUser: false},
					{photo: require('../../image/touxiang.jpg'), content: '这是一条信息。这是一条信息', currentUser: true},
				],
				currentUser: '',
				sendContent: ''
			}
		},
		mounted () {
			this.currentUser = this.$route.params.userid;
		},
		updated:function(){
		    this.sclloBottom();
	    },
		components: {
			Header
		},
		methods: {
			sendChat () {
				if(this.sendContent){
					this.chaList.push({photo: require('../../image/touxiang.jpg'), content: this.sendContent, currentUser: true});
					this.sclloBottom();
					this.sendContent = '';
				}else{					
					alert('请输入内容');
				}
			},
			sclloBottom () {
				this.$nextTick(() => {
			        var container = this.$el.querySelector("#main>div:last-child");
			        container.scrollIntoView();
		    	})
			}
		}
	}
</script>