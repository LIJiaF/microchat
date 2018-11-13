<template>
	<div>
		<Header title="信息">
			<i slot="list" class="icon iconfont icon-BAI-gongneng font"></i>
			<i slot="search" class="icon iconfont icon-sousuo font"></i>
		</Header>
		<ul class="main">
			<router-link class="info" tag="li" v-for="item in list" :to="'/chat/' + item.user" :key="item.id">
				<img src="../../image/touxiang.jpg" class="infoImg">
				<div class="infoContent">
					<h1>李家富<span class="time">2018-10-11 23:00</span></h1>
					<p>{{ item.content }}</p>
				</div>
			</router-link>
		</ul>
		<Footer url="/info"/>
	</div>
</template>

<style type="text/css" scoped>
	.main{
		padding-top: 40px;
		padding-bottom: 48px;
		color:#333;
	}
	.main::-webkit-scrollbar {
	    display: none;
	}
	.info{
		display: flex;
		margin: 5px 10px;
		overflow: hidden;
	}
	.infoImg{
		flex-grow: 0;
		height:48px;
    	border-radius: 50%;
	}
	.infoContent{
		position: relative;
		flex-grow: 1;
		padding-left: 10px;
	}
	.infoContent h1{
		line-height: 28px;
	}
	.infoContent .time{
		float:right;
		font-size: 12px;
		color:#ccc;
	}
	.infoContent p{
		position: absolute;
		left:10px;
		right:0;
		font-size: 14px;
		color:#9B999A;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>

<script>
	import Header from '@/components/header/header.vue'
	import Footer from '@/components/footer/footer.vue'

	export default {
		data () {
			return {
				list: [
					{id: 1, user: '李家富', content: '这是一条信息。'},
					{id: 2, user: '李家富', content: '这是一条信息。'},
				],
				ws: ''
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>