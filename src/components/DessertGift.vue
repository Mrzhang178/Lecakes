<template>
	<div class="dessertGift">
		<nav>
			<div>
				<a>
				  <img src="../../static/images/dessertGift/addressT.png" alt="">
				  <el-button type="text" @click="centerDialogVisible = true">
				    {{adds[add1]}}
				  </el-button>
				</a>
			</div>
			<div>
				<span @click="r1"><router-link to="/dessertGift" :class="{'aqq':fa}">综合</router-link></span>
				<span @click="r2"><router-link to="/dessertGift/xiaoliangGift" :class="{'aqq':fb}">销量</router-link></span>
				<span @click="r3"><router-link to="/dessertGift/xiandingGift" :class="{'aqq':fc}">季度限定</router-link></span>
			</div>
		</nav>
		<el-dialog
		  title="配送至"
		  :visible.sync="centerDialogVisible"
		  width="30%">
		  <span>当前定位城市：临沂市</span>
		  <span slot="footer" class="el-dialog__footer">
		    更多城市：
		    <br>
		    <span v-for="(add,ad) in adds" @click='addNow(ad)'>{{add}}<br></span>
		    </span>
		</el-dialog>
		<section>
			<router-link to="">
			  <img src="../../static/images/dessertGift/1.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="">
			  <img src="../../static/images/dessertGift/2.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="">
			  <img src="../../static/images/dessertGift/3.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="">
			  <img src="../../static/images/dessertGift/4.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="">
			  <img src="../../static/images/dessertGift/3.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="">
			  <img src="../../static/images/dessertGift/3.jpg" alt="">
			  <br>
			  <span>心悦团圆礼盒（四枚入）</span>
			  <p>团圆创意礼盒 中秋馈赠佳礼</p>
			  <br><br>
			  <p>&yen;232</p>
			</router-link>
			<router-link to="" class="lastA">
			  <img src="../../static/images/dessertGift/5.jpg" alt="">
			  <br>
			  <span>个性字母透明挎包</span>\
			  <p>秀场街拍潮品</p>
			  <p>清凉又撩人 百搭潮品</p>
			  <br>
			  <br>
			  <p>
			  	&yen;232
			  	<img src="../../static/images/dessertGift/markupPrice.png" alt="">
			  	<span>&yen;38</span>
			  </p>
			</router-link>
			<p>—— 没有更多产品咯 ——</p>
		</section>
		<footer>
		  <ul class="helloFooter">
		    <router-link to="/" tag="li">
		      <img src="../../static/images/Helloword/helloword1.png" alt="">
		      <br>
		       首页 
		    </router-link>
		    <router-link to="/dessertGift" tag="li">
		      <img src="../../static/images/Helloword/gife.png" alt="">
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
		      <img src="../../static/images/Helloword/home1.png" alt="">
		      <br>
		      我的诺心
		    </router-link>
		  </ul>
		</footer>
		<aside v-show="Aside" @scrollTop="handleScroll">
			<a href="#"><img src="../../static/images/dessertGift/backTop.png" alt=""></a>
		</aside>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				add1:"0",
				centerDialogVisible: false,
				adds:['上海','北京','广州','南京','成都','深圳','杭州','苏州','天津','宁波','无锡','绍兴','嘉兴','重庆'],
				Aside:false,
				fa:true,
				fb:false,
				fc:false
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll);
		},
		methods:{
			handleScroll:function(){
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (this.scrollTop>500){
					this.Aside=true;
				}else{
					this.Aside=false;
				}
			},
			r1(){
				this.fa=true;
				this.fb=false;
				this.fc=false;
			},
			r2(){
				this.fb=true;
				this.fa=false;
				this.fc=false;
			},
			r3(){
				this.fc=true;
				this.fa=false;
				this.fb=false;
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
	color: black;
	font-size: 14px;
}
nav{
	width: 100%;
	text-align: center;
	height: 40px;
	line-height: 40px;
	background-color: white;
	position: fixed;
	top: 0;
	border-bottom: 1px solid gray;
	div{
		display: inline-block;
	}
	div:first-child{
		position: relative;
		left: -35%;
		img{
			position: relative;
			top: 5px;
			width: 15px;	
		}
	}
	div:last-child{
		.classification{
			color: #ff4b0f;
		}
		a{
			padding: 0 10px;
		}
		.aqq{
			color: #ff4001;
		}
	}
}
.el-dialog__footer{
  background-image: url(../../static/images/Helloword/city_bg.png);
  background-size: cover;
  padding: 0;
}
section{
	width: 640px;
	margin:60px auto;
	a{
		display: inline-block;
		width: 280px;
		margin:0 15px; 
		img{
			width: 300px;
		}
		p:nth-child(4){
			color: #9c9c9c;
		}
	}
	.lastA{
		p:nth-child(4){
			width: 95px;
			background-color: #cca976;
			color: white;
			border-radius: 3px;
		}
		p:nth-child(5){
			color: #9c9c9c;
		}
		p{
			img{
				width: 35px;
				height: 15px;
			}
			span:last-child{
				color: #ac8a60;
			}
		}	
	}
	>p:last-child{
		text-align: center;
		font-size: 14px;
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
aside{
	img{
		width: 40px;
		position: fixed;
		right: 20px;
		bottom: 70px;
	}
}
</style>