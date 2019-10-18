<template>
	<div class="home">
		<nav v-show='navOne' class="navOne">
			<img src="../../static/images/home/touxiang.png" alt="">
			<br>
			<router-link to="/entry">
				<input type="button" value="登录">
			</router-link>
		</nav>
		<nav class='navTwo' v-show='navTwo' @click='newshome'>
			<img src="../../static/images/home/touxiang.png" alt="">
			<div>
				<span>{{num}}</span>
				<span>Lv.1</span>
			</div>
			<ul>
				<router-link to="" tag='li'>
					<div>0</div>
					<p>aha值返利</p>
				</router-link>
				<router-link to="" tag='li'>
					<div>0</div>
					<p>我的优惠券</p>
				</router-link>
				<router-link to="" tag='li'>
					<div>0</div>
					<p>我的积分</p>
				</router-link>
			</ul>
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
				  <router-link to="/entry" tag="li">
				    <img src="../../static/images/home/fahuo.png" alt="">
				    <br>
				    待发货
				  </router-link>
				  <router-link to="/entry" tag="li">
				    <img src="../../static/images/home/shouhuo.png" alt="">
				    <br>
				    待收货
				  </router-link>
				  <router-link to="/entry" tag="li">
				    <img src="../../static/images/home/dingdan.png" alt="">
				    <br>
				    我的订单
				  </router-link>
				</ul>
			</div>
			<div class="nuoXin">
				<router-link to="/entry">
					<img src="../../static/images/home/huiyuan.png" alt="">
					<p>诺心aha会员<br>尊享更多惊喜礼遇</p>
				</router-link>
			</div>
			<div>
				<p>我的服务</p>
				<ul>
				  <router-link :to="denglu" tag="li">
				    <img src="../../static/images/home/shengri.png" alt="">
				    <br>
				    生日助手 
				  </router-link>
				  <router-link :to="denglu" tag="li">
				    <img src="../../static/images/home/ziliao.png" alt="">
				    <br>
				    个人资料
				  </router-link>
				  <router-link :to="denglu" tag="li">
				    <img src="../../static/images/home/chuzhika.png" alt="">
				    <br>
				    储值卡
				    <br>
				    专享兑换券
				  </router-link>
				  <router-link :to="denglu" tag="li">
				    <img src="../../static/images/home/club.png" alt="">
				    <br>
				    LECLUB
				  </router-link>
				  <router-link to="https://webchat.7moor.com/wapchat.html?accessId=94ffd220-4ea3-11e9-874c-d90fda97278e&fromUrl=https%3A%2F%2Fwx01.lecake.com%2Fh5%2Fcustomer%2Findex&urlTitle=诺心蛋糕官网_生日蛋糕%7C水果蛋糕%7C芝士慕斯蛋糕%7C巧克力蛋糕-LE%20CAKE诺心蛋糕店网上订购" tag="li">
				    <img src="../../static/images/home/kefu.png" alt="">
				    <br>
				    在线客服
				  </router-link>
				  <router-link :to="denglu" tag="li">
				    <img src="../../static/images/home/fapiao.png" alt="">
				    <br>
				    我的发票
				  </router-link>
				  <router-link :to="denglu" tag="li">
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
		data(){
			return{
				denglu:'/entry',
				navOne:true,
				navTwo:false,
				num:'',
			}
		},
		mounted(){
			if(sessionStorage.length>0){
				this.navOne=false;
				this.navTwo=true;
				this.denglu='/newsHome'
			}else{
				this.denglu='/entry'
			}
			for(var a=0;a<sessionStorage.length;a++){
				this.num+=sessionStorage.key(a);
			}
		},
		methods:{
			newshome(){
				return window.location.href='#/newsHome'
			}
		}
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
	width:100%;
	background-color: #f4f4f4;
	padding: 20px 0 60px 0;
	margin: auto;
}
.navOne{
	width: 100%;
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
.navTwo{
	background-image: url(../../static/images/home/bg_customer.png);
	background-size: cover;
	padding:5%; 
	img{
		height: 80px;	
		float: left;
	}
	&>div{
		padding-left: 3%;
		height: 50px;
		margin-top: 30px;
		display: inline-block;
		span:last-child{
			color: white;
			background-color: #dcab71;
		}
	}
	ul{
		text-align: center;
		li{
			text-decoration: none;
			display: inline-block;
			margin:5px 4%; 
		}
	}
	
}
section{
	width: 100%;
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
				height: 20px;
			}
		}
	}
	.nuoXin{
		position: relative;
		img{
			width: 100%;
			height: 80px;
		}
		p{
			width: 35%;
			color: white;
			font-size: 14px;
			position: absolute;
			top: 10px;
			left: 100px;
		}
	}
	>div:last-child{
		width: 100%;
		height: 300px;
		background-color: white;
		p{
			border-bottom:1px solid #f4f4f4;
			font-size: 14px;
			padding: 20px 8px;
		}
		&>ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			list-style-type: none;
			text-align: center;
			margin-top: 20px;
			li{
				width: 25%;
				height: 100px;
				img{
					height: 20px;
				}
			}
		}
	}
}
footer{
  .helloFooter {
    width: 100%;
    min-width: 250px;
    height: 43px;
    text-align: center;
    list-style-type: none;
    position: fixed;
    bottom: 0;
    left: 0;
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
        height: 20px;
      }
    }
  }
}
</style>