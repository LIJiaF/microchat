<template>
	<div>
		<div class="main">
			<img src="../../image/touxiang.jpg">
			<h1>李家富</h1>
		</div>
		<router-link tag="p" class="exit" to="/logo">退出登录</router-link>
		<Footer url="/person"/>
	</div>
</template>

<style type="text/css" scoped>
	.main{
		display: flex;
		align-items: center;
	    padding: 30px 15px;
	    background: #F98383;
	}
	.main img{
		flex-grow: 0;
	    height: 80px;
	    border-radius: 50%;
	}
	.main h1{
		flex-grow: 1;
	    margin-top: -2px;
	    padding-left: 20px;
	    color: #fff;
	    font-size: 30px;
	    font-weight: bold;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;

	}
	.exit{
		position: fixed;
	    bottom: 75px;
	    left: 35px;
	    right: 35px;
	    cursor: pointer;
	    height: 45px;
	    line-height: 45px;
	    text-align: center;
	    color: #fff;
	    border-radius: 8px;
	    background: #F98383;
	    box-shadow: 0 0 40px 2px #da7171 inset;
	}
</style>

<script>
	import Header from '@/components/header/header.vue'
	import Footer from '@/components/footer/footer.vue'

	export default {
		data () {
			return {
				list: []
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>