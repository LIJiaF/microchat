<template>
	<div class="header">
		<slot name="list"></slot>
		<slot name="back"></slot>
		<p :class="{chat: isChat}">{{ title }}</p>
		<slot name="search"></slot>
	</div>
</template>

<style type="text/css" scoped>
	.header{
		position: fixed;
		top:0;
		left:0;
		right: 0;
		display: flex;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		background: #F98383;
		z-index: 999;
	}
	.header i{
		padding:0 10px;
		flex-grow: 0;
	}
	.header p{
		flex-grow: 1;
		font-size: 16px;
	}
	.font{
		font-size:25px !important;
	}
	.chat{
		padding-right: 45px;
	}
</style>

<script type="text/javascript">
	export default {
		data () {
			return {

			}
		},
		props: ['title', 'isChat']
	}
</script>