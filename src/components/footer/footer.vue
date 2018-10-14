<template>
	<div class="footer">
		<router-link v-for="(item, index) in footerList" :to="item.url" :key="index">
			<i class="icon iconfont font"
				:class="[item.icon, url == item.url?'active': '']"
				@click="curIndex=index"
			></i>
		</router-link>
	</div>
</template>

<style type="text/css">
	.footer{
		position: fixed;
		bottom:0;
		width:100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		display: flex;
		box-shadow: 1px 0 5px rgba(249,131,131,0.5);
		z-index: 999;
		background: #fff;
	}
	.footer a{
		flex-grow: 1;
	}
	.font{
		font-size: 28px;
	}
	.active{
		color:#F98383;
	}
</style>

<script type="text/javascript">
	export default {
		data () {
			return {
				footerList: [
					{url: '/info', icon: 'icon-info'},
					{url: '/user', icon: 'icon-cc-user'},
					{url: '/person', icon: 'icon-shezhi'}
				]
			}
		},
		props: ['url']
	}
</script>