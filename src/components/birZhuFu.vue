<template>
	<div>
		<nav>
			<img src="../../static/images/prodetails/fanhui.png" alt="" @click="history">
			<div>生日牌</div>
		</nav>
		<section>
			<h3>祝福语</h3>
			<div>
				<input type="text" placeholder="自定义祝福语" v-model='q4'>
				<input type="button" value="确定" name="btn" @click='aqq(q4)'>
			</div>
			<div @click='aqq(q1)'>
				<input type="text" disabled value="无" v-model='q1'>
				<input type="radio" name="btn">
			</div>
			<div @click='aqq(q2)'>
				<input type="text" disabled value="生日快乐" v-model='q2'>
				<input type="radio" name="btn">
			</div>
			<div @click='aqq(q3)'>
				<input type="text" disabled value="Happy Birthday" v-model='q3'>
				<input type="radio" name="btn">
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				zidingyi:'',
				q1:'无',
				q2:'生日快乐',
				q3:'Happy Birthday',
				q4:''
			}
		},
		methods:{
			history(){
				history.back();
			},
			aqq(r){
				this.$router.push({
					path:'/shoppingCart',
					query:{r}
				})
			}
		}
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
nav{
	width: 99%;
	text-align:center;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #f4f4f4;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: white;
	div{
		display: inline-block;
	}
	img{
		position: relative;
		right: 35%;
		height: 20px;
	}
}
section{
	margin-top: 50px;
	text-align: center;
	width: 100%;
	div{
		border: 1px solid gray;
		input{
			border: none;
			outline: none;
			background-color: white;
		}
		input:first-child{
			width: 60%;
			height: 40px;
		}
		input:last-child{
			width: 20%;
		}
	}
}
</style>