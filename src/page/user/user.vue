<template>
	<div>
		<Header title="联系人"/>
		<ul class="main">
			<router-link class="user" tag="li" v-for="(item,index) in uList" :to="'/chat/' + item" :key="index">
				<img src="../../image/touxiang.jpg">
				<h1>{{ item }}</h1>
			</router-link>
		</ul>
		<Footer url="/user"/>
	</div>
</template>

<style type="text/css" scoped>
	.main{
		padding-top: 40px;
		padding-bottom: 48px;
		color:#333;
	}
	.user{
		display: flex;
		margin:5px 10px;
		align-items:center;
		overflow: hidden;
	}
	.user img{
		flex-grow: 0;
		height:40px;
    	border-radius: 50%;
	}
	.user h1{
		flex-grow: 1;
		padding-left: 10px;
	}
</style>

<script>
	import Header from '@/components/header/header.vue'
	import Footer from '@/components/footer/footer.vue'

	import {mapState} from 'vuex'

	export default {
		data () {
			return {
				list: []
			}
		},
		created () {
			if(!this.userstate){
				this.$router.push('/logo');
				return;
			}
			this.axios.get('/api/userlist')
				.then((response) => {
					console.log(`用户列表:${response.data}`);
					this.list = response.data.ulist;
				})
				.catch((err) => {
					console.log(err);
				})
		},
		computed: {
			...mapState([
				'userstate',
			]),
			uList () {
				return this.list.map((l) => {
					return l.split(':')[1];
				})
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>