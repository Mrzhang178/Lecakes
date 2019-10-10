<template>
	<div class="shoppingCart">
		<div>
			<nav>
				<img src="../../static/images/shoppingCart/car.png" alt="">
				<p>您还没有选购您的商品</p>
			</nav>
			<section>
				<h4>推荐商品</h4>
				<p>Sincerely Recommend</p>
				<div>
					<img src="../../static/images/shoppingCart/shangpin1.jpg" alt="">
					<p>雪域牛乳芝士</p>
					<br><br>
					<p>&yen;218	<span>+</span></p>
				</div>
				<div>
					<img src="../../static/images/shoppingCart/shangpin2.jpg" alt="">
					<p>数字蛋糕</p>
					<span>第2件半价 第3件免单</span>
					<br><br>
					<p>&yen;218	<span>+</span></p>
				</div>
				<div>
					<img src="../../static/images/shoppingCart/shangpin3.jpg" alt="">
					<p>美刀刀</p>
					<br><br>
					<p>&yen;298	<span>+</span></p>
				</div>
			</section>		
		</div>
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
		      <img src="../../static/images/Helloword/car.png" alt="">
		      <br>
		      购物车
		    </router-link>
		    <router-link to="/home" tag="li">
		      <img src="../../static/images/Helloword/home1.png" alt="">
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
	margin: 0;
	padding: 0;
}
.shoppingCart{
	background-color: #f4f4f4;
	>div{
		width: 600px;
		margin: auto;
		background-color: white;
		padding: 20px;
		nav{
			height: 200px;
			text-align: center;
			padding-top: 100px;
			font-size: 14px;
			color: #9c9c9c;
			border-bottom: 1px solid #9c9c9c;
			img{
				width: 100px;
			}
		}
		section{
			margin-bottom: 50px;
			>h4,>p{
				margin-top: 15px;
				text-align: center;
				color: #a38d6b;
			}
			>div{
				width: 280px;
				display: inline-block;
				margin:15px 8px;
				font-size: 14px;
				img{
					width: 280px;
				}
				>span{
					color: white;
					background-color: #cca976;
					border-radius: 3px;
				}
				p{
					span{
						color: white;
						padding:0 3px;
						font-size: 16px;
						background-color: #ff4f00;
						border-radius: 3px;
						position: relative;
						right: -80%;
					}
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
	    height: 50px;
	    text-align: center;
	    list-style-type: none;
	    position: fixed;
	    bottom: 0;
	    column-count: 5;
	    z-index: 1000;
	    background-color: white;
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
}
</style>