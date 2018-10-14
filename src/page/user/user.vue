<template>
	<div>
		<Header title="联系人"/>
		<ul class="main">
			<router-link class="user" tag="li" v-for="item in list" :to="'/chat/' + item.user" :key="item.id">
				<img src="../../image/touxiang.jpg">
				<h1>李家富</h1>
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

	export default {
		data () {
			return {
				list: [
					{id: 1, user: '李家富', content: 'this is info1'},
					{id: 2, user: '李家富', content: 'this is info2'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
					{id: 3, user: '李家富', content: 'this is info3'},
				]
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>