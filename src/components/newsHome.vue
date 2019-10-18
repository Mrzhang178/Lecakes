<template>
	<div>
		<nav>
			<img src="../../static/images/prodetails/fanhui.png" alt="" @click="history">
			<div>个人信息</div>
		</nav>
		<section>
			<div @click='quit'>退出登录</div>
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
		methods:{
			history(){
				history.back();
			},
			quit(){
				sessionStorage.clear();
				return window.location.href='#/home'
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
	margin-top: 200px;
	text-align: center;
}
footer{
	  .helloFooter {
	    width: 99%;
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