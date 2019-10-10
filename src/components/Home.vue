<template>
	<div class="home">
		<nav>
			<img src="../../static/images/home/touxiang.png" alt="">
			<br>
			<router-link to="/">
				<input type="button" value="登录">
			</router-link>
		</nav>
		<section>
			<div class="myDingDan">
				<p>我的订单</p>
				<ul>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/dingdan.png" alt="">
				    <br>
				    待付款 
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/fahuo.png" alt="">
				    <br>
				    待发货
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/shouhuo.png" alt="">
				    <br>
				    待收货
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/dingdan.png" alt="">
				    <br>
				    我的订单
				  </router-link>
				</ul>
			</div>
			<div class="nuoXin">
				<router-link to="">
					<img src="../../static/images/home/huiyuan.png" alt="">
					<p>诺心aha会员<br>尊享更多惊喜礼遇</p>
				</router-link>
			</div>
			<div>
				<p>我的服务</p>
				<ul>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/shengri.png" alt="">
				    <br>
				    生日助手 
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/ziliao.png" alt="">
				    <br>
				    个人资料
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/chuzhika.png" alt="">
				    <br>
				    储值卡
				    <br>
				    专享兑换券
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/club.png" alt="">
				    <br>
				    LECLUB
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/kefu.png" alt="">
				    <br>
				    在线客服
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/fapiao.png" alt="">
				    <br>
				    我的发票
				  </router-link>
				  <router-link to="/" tag="li">
				    <img src="../../static/images/home/guanyuwomen.png" alt="">
				    <br>
				    关于我们
				  </router-link>
				</ul>
			</div>
		</section>
		<footer>
		  <ul class="helloFooter">
		    <router-link to="/" tag="li">
		      <img src="../../static/images/Helloword/helloword1.png" alt="">
		      <br>
		       首页 
		    </router-link>
		    <router-link to="/dessertGift" tag="li">
		      <img src="../../static/images/Helloword/gife1.png" alt="">
		      <br>
		      甜点心礼
		    </router-link>
		    <router-link to="/birthdayCake" tag="li">
		      <img src="../../static/images/Helloword/cake1.png" alt="">
		      <br>
		      生日蛋糕
		    </router-link>
		    <router-link to="/shoppingCart" tag="li">
		      <img src="../../static/images/Helloword/car1.png" alt="">
		      <br>
		      购物车
		    </router-link>
		    <router-link to="/home" tag="li">
		      <img src="../../static/images/Helloword/home.png" alt="">
		      <br>
		      我的诺心
		    </router-link>
		  </ul>
		</footer>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped lang="less">
*{
	margin:0;
	padding: 0;
}
a{
	text-decoration: none;
}
.home{
	background-color: #f4f4f4;
	padding: 20px 0 60px 0;
}
nav{
	width: 660px;
	height: 160px;
	padding-top: 50px;
	background-color: white;
	margin: auto;
	text-align: center;
	img{
		width: 80px;
	}
	input{
		padding: 5px 20px;
		margin-top: 10px;
		background-color: #a38d6b;
		color: white;
		border-radius: 3px;
		border: none;
	}
}
section{
	width: 620px;
	margin: auto;
	.myDingDan{
		height: 150px;
		margin: 20px 0;
		padding: 8px;
		background-color: white;
		p{
			border-bottom:1px solid #f4f4f4;
			font-size: 14px;
			padding: 20px 0;
		}
		ul{
			column-count: 4;
			list-style-type: none;
			text-align: center;
			margin: 25px 0;
			img{
				width: 20px;
			}
		}
	}
	.nuoXin{
		img{
			width: 620px;
		}
		p{
			width: 120px;
			color: white;
			font-size: 14px;
			position: relative;
			top: -70px;
			right: -150px;
		}
	}
	>div:last-child{
		width: 615px;
		height: 300px;
		background-color: white;
		padding: 5px;
		p{
			border-bottom:1px solid #f4f4f4;
			font-size: 14px;
			padding: 20px 0;
		}
		>ul{
			column-count: 4;
			list-style-type: none;
			height: 200px;
			text-align: center;
			margin-top: 20px;
			padding: 20px 0;
			li{
				height: 100px;
			}
		}
	}
}
footer{
  .hellodingtong{
    width: 100%; 
    margin: 0;
    padding: 0;
  }
  .helloFooter {
    width: 100%;
    min-width: 250px;
    height: 43px;
    text-align: center;
    list-style-type: none;
    position: fixed;
    bottom: 0;
    column-count: 5;
    z-index: 1000;
    background-color: white;
    border-top: 1px solid #d1c6af;
    padding-top: 7px;
    li {
      color: #ac8e6a;
      text-decoration: none;
      font-size: 12px;
      text-align:center;
      img{
        width: 20px;
      }
    }
  }
}
</style>