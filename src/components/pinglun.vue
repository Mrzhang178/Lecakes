<template>
	<div class="pinglun">
		<nav>
			<img src="../../static/images/prodetails/fanhui.png" alt="" @click="history">
			<div>评论</div>
		</nav>
		<section>
			<div>
				<p>
    			<img src="../../static/images/pinglun/1.jpg" alt="">
					<span>188***2670</span>
					<span>2-4人食</span>
					<span>2019-10-08 08:52:03</span>
    		</p>
				<p>非常好！浓浓奶味</p>
			</div>
			<div>
				<p>
    			<img src="../../static/images/pinglun/2.jpg" alt="">
					<span>136***1067</span>
					<span>5-8人食</span>
					<span>2019-10-05 16:26:14</span>
    		</p>
				<p>很好吃，浓郁可口，一家人分享真好。快递小哥准时送达，服务到位</p>
			</div>
			<div>
				<p>
    			<img src="../../static/images/pinglun/3.jpg" alt="">
					<span>186***7285</span>
					<span>15-20人食</span>
					<span>2019-09-25 16:48:16</span>
    		</p>
				<p>17个人吃足够，给员工买的，都说好吃。给好评</p>
			</div>
			<div>
				<p>
    			<img src="../../static/images/pinglun/4.jpg" alt="">
					<span>136***1067</span>
					<span>5-8人食</span>
					<span>2019-10-05 16:26:14</span>
    		</p>
				<p>很好吃，浓郁可口，一家人分享真好。快递小哥准时送达，服务到位</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		methods:{
			history(){
				history.back();
			}
		}
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.pinglun{
	background-color: #f4f4f4;
}
nav{
	width: 100%;
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
		right: 40%;
		height: 20px;
	}
}
section{
	width: 90%;
	margin:42px auto;
	background-color: white;
	img{
		height: 50px;
	}
	div{
		width: 90%;
		padding: 10px;
		margin:auto;
		border-bottom: 1px solid #d1c6af;
		a{
			position: relative;
			left: 50%;
			img{
				position: relative;
				top: 3px;
				height: 18px;
			}
		}
		p{
			margin-bottom: 10px;
			width: 100%;
			height: 60px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			span{
				color: #9c9c9c;
				padding-left: 11px;
			}
			img{
				position: relative;
				top: 15px;
				height: 50px;
			}
		}
	}
	
}
</style>