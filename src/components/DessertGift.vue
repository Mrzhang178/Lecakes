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
				<span @click="r1" :class="{'aqq':fa}">综合</span>
				<span @click="r2" :class="{'aqq':fb}">销量</span>
				<span @click="r3" :class="{'aqq':fc}">季度限定</span>
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
			<router-link to="" v-for="(des,d) in proDess" :key="d" class="goods">
			  <img :src="des.imgs" alt="">
			  <div>
		  		<span>{{des.pname}}</span>
				  <p>{{des.desc}}</p>
			  </div>
			  <p>&yen;{{des.price}}</p>
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
				fc:false,
				proDess:[
					{
						id:'011',
	          imgs:'../../static/images/dessertGift/1.jpg',
	          pname:'心悦团圆礼盒（四枚入）',
	          desc:"团圆创意礼盒 中秋馈赠佳礼",
	          price:218,
	          xiaoliang:542,
	          zonghe:1,
					},
					{
						id:'012',
	          imgs:'../../static/images/dessertGift/1.jpg',
	          pname:'心悦团圆礼盒（六枚入）',
	          desc:"团圆创意礼盒 中秋馈赠佳礼",
	          price:298,
	          xiaoliang:412,
	          zonghe:2,
					},
					{
							id:'013',
	          imgs:'../../static/images/dessertGift/2.jpg',
	          pname:'心悦团圆礼盒（六枚入）',
	          desc:"金奖月饼&创意礼盒 中秋馈赠佳礼",
	          price:218,
	          xiaoliang:825,
	          zonghe:3,
					},
					{
						id:'014',
	          imgs:'../../static/images/dessertGift/3.jpg',
	          pname:'喵叽叽云顶小花曲奇礼盒（原味）',
	          desc:"征服朋友圈的办公室零食",
	          price:158,
	          xiaoliang:417,
	          zonghe:4,
					},
					{
						id:'015',
	          imgs:'../../static/images/dessertGift/4.jpg',
	          pname:'心悦团圆礼盒（四枚入）',
	          desc:"卖到疯狂的秒杀款",
	          price:158,
	          xiaoliang:75,
	          zonghe:5,
					},
					{
						id:'016',
	          imgs:'../../static/images/dessertGift/5.jpg',
	          pname:'喵叽叽云顶小花曲奇礼盒（咖啡味）',
	          desc:"财富自由新标配",
	          price:68,
	          xiaoliang:641,
	          zonghe:6,
					}
				],
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll);
		},
		methods:{
			addNow:function(ad){
			  this.add1=ad,
			  this.centerDialogVisible=false
			},
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
				for(var x=1;x<this.proDess.length;x++){
					for(var j = 0;j < this.proDess.length-x ;j++){
						if(this.proDess[j].zonghe > this.proDess[j+1].zonghe){
							var temp = this.proDess[j];
							this.proDess[j] = this.proDess[j+1];
							this.proDess[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
			},
			r2(){
				this.fb=true;
				this.fa=false;
				this.fc=false;
				for(var x=1;x<this.proDess.length;x++){
					for(var j = 0;j < this.proDess.length-x ;j++){
						if(this.proDess[j].xiaoliang < this.proDess[j+1].xiaoliang){
							var temp = this.proDess[j];
							this.proDess[j] = this.proDess[j+1];
							this.proDess[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
			},
			r3(){
				this.fc=true;
				this.fa=false;
				this.fb=false;
				for(var x=1;x<this.proDess.length;x++){
					for(var j = 0;j < this.proDess.length-x ;j++){
						if(this.proDess[j].id < this.proDess[j+1].id){
							var temp = this.proDess[j];
							this.proDess[j] = this.proDess[j+1];
							this.proDess[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
			},
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
	left: 0;
	border-bottom: 1px solid gray;
	div{
		display: inline-block;
	}
	div:first-child{
		position: absolute;
		left: 15px;
		img{
			position: relative;
			top: 5px;
			width: 15px;	
		}
	}
	div:last-child{
		span{
			font-size: 14px;
			padding: 0 5px;
		}
		.aqq{
			color: #ff4b0f;
		}
	}
}
.el-dialog__footer{
  background-image: url(../../static/images/Helloword/city_bg.png);
  background-size: cover;
  padding: 0;
}
section{
	width: 100%;
	margin:60px auto;
	.goods{
		font-size: 14px;
		display: inline-block;
		width: 40%;
		margin:0 15px; 
		div{
			height: 100px;
			p{
				color: #9c9c9c;
			}
		}
		img{
			width: 100%;
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
aside{
	img{
		width: 40px;
		position: fixed;
		right: 20px;
		bottom: 70px;
	}
}
</style>