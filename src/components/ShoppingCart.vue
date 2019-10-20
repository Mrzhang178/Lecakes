<template>
	<div class="shoppingCart">
		<div v-show='wu'>
			<nav>
				<img src="../../static/images/shoppingCart/car.png" alt="">
				<p>您还没有选购您的商品</p>
			</nav>
			<section>
				<h4>推荐商品</h4>
				<p>Sincerely Recommend</p>
				<div v-for='(pro11,pro) in shopProducts' :key='pro' style="width: 40%;">
					<img :src="pro11.imgs" alt="">
					<div>
						<p>{{pro11.pname}}</p>
						<span>{{pro11.desc}}</span>
					</div>
					<p>&yen;{{pro11.price}}	<span>+</span></p>
				</div>
			</section>		
		</div>
		<div class="shopProduct" v-show='you'>
			<nav>
				<span>专属欢乐 为你点亮</span>
				<span>加购惊喜好礼 点亮你欢乐时刻</span>
				<span>点击选购></span>
			</nav>
			<section class="pro1" v-for='(cakeA,A) in cakes' :key="A">
				<img :src="xuanzhong" alt="" @click='allCkeck'>
				<img :src="cakeA.imgs" alt="">
				<div>
					<p>{{cakeA.pname}}</p>
					<p>{{cakeA.canju}}</p>
					<div>
						<span>&yen;{{cakeA.price*cakeA.num}}</span>
						<div>
							<button type="button" @click='jian(A)'><img src="../../static/images/shoppingCart/del.png" alt="" v-show='btn1' @click='del'><span v-show='btn2'>-</span></button>
							<input type="button" v-model="cakeA.num">
							<input type="button" value="+" @click='Add(A)'>
						</div>
					</div>
				</div>
				<div class="birt">
					<div @click='birt'>{{msgs}}</div>
					<div style="font-size: 10px;color: gray;">点击上方填写生日信息，免费赠送巧克力生日牌</div>
				</div>
			</section>
			<section class="pro2"  v-for='(res,B) in ress' :key="B">
				<img :src="xuanzhong" alt="">
				<img :src="res.imgs" alt="">
				<div>
					<p>{{res.pname}}</p>
					<div>
						<span>&yen;{{res.price*res.num}}</span>
						<div>
							<button><img src="../../static/images/shoppingCart/del.png" alt=""><span>-</span></button>
							<input type="button" v-model='res.num'>
							<input type="button" value="+">
						</div>
					</div>
				</div>
			</section>
			<section class="zshl">
				<h3>专属欢乐 为你点亮</h3>
				<div>
					<ul>
						<li v-for="(huanle,le) in zshls" :key="le" @click="checkImg(le)">
							<img :src="huanle.imgs" alt="">
							<p>{{huanle.pname}}</p>
							<div>&yen;{{huanle.price}}<s>&yen;{{huanle.noprice}}</s><span>+</span></div>
							<span>限时抢</span>
						</li>
					</ul>
				</div>
			</section>
			<section class="jieSuan">
				<div @click='allCkeck'>
					<img :src="xuanzhong" alt="">	全选
				</div>
				<div>
					<span>应付&yen;<span>{{zongjia}}</span></span>
					<input type="button" value="结算">
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
		data(){
			return{
				wu:true,
				you:false,
				btn1:true,
				btn2:false,
				xuanzhong:'../../static/images/shoppingCart/xuanzhong.png',
				proShopCar:"",
				msgs:'填写生日信息，免费赠送巧克力生日牌 ',
				msg:this.$route.query.r,
				zongjia:298,
				cakes:[],
				ress:[],
				shopProducts:[
					{
						id:'101',
	          imgs:'../../static/images/shoppingCart/shangpin1.jpg',
	          pname:'心悦团圆礼盒（四枚入）',
	          desc:"",
	          price:218,
					},
					{
						id:'102',
	          imgs:'../../static/images/shoppingCart/shangpin2.jpg',
	          pname:'数字蛋糕',
	          desc:"第2件半价 第3件免单",
	          price:298,
					},
					{
						id:'103',
	          imgs:'../../static/images/shoppingCart/shangpin3.jpg',
	          pname:'美刀刀',
	          desc:"",
	          price:218,
					},
				],
				zshls:[
					{
						id:'031',
						imgs:'../../static/images/prodetails/zhuanshuhuanle1.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						num:1
					},
					{
						id:'032',
						imgs:'../../static/images/prodetails/zhuanshuhuanle.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						num:1
					},
					{
						id:'033',
						imgs:'../../static/images/prodetails/zhuanshuhuanle2.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						num:1
					},
					{
						id:'034',
						imgs:'../../static/images/prodetails/zhuanshuhuanle4.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						num:1
					},
					{
						id:'035',
						imgs:'../../static/images/prodetails/zhuanshuhuanle3.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						num:1
					}
				],
			}
		},
		mounted(){
			this.msgs=this.msg;
			this.proShopCar=JSON.parse(localStorage.getItem("proShopCar"));
			for(var a=0;a<this.proShopCar.shuxing.length;a++){
				if(this.proShopCar.shuxing[a].type=='蛋糕'){
					this.cakes.push(this.proShopCar.shuxing[a]);
				}else{
					this.ress.push(this.proShopCar.shuxing[a]);
				}
			}
			if(this.proShopCar.shuxing.length){
				this.wu=false;
				this.you=true;
			}else if(this.proShopCar.shuxing.length==0){
				this.wu=true;
				this.you=false;
			}
		},
		methods:{
			Add(A){
				this.cakes[A].num++;
				this.zongjia=this.cakes[A].price*this.cakes[A].num;
				if(this.cakes[A].num>1){
					this.btn1=false;
					this.btn2=true;
				}
			},
			jian(A){
				if(this.cakes[A].num>1){
					this.cakes[A].num--;
					this.zongjia=this.cakes[A].price*this.cakes[A].num;
				}
				if(this.cakes[A].num==1){
					this.cakes[A].num=1
					this.btn1=true;
					this.btn2=false;
				}
			},
			del(){
				this.cakes='';
			},
			allCkeck(){
				if(this.xuanzhong=='../../static/images/shoppingCart/xuanzhong.png'){
					this.xuanzhong='../../static/images/shoppingCart/weixuanzhong.png'
				}else{
					this.xuanzhong='../../static/images/shoppingCart/xuanzhong.png'
				}
			},
			checkImg(x){
				this.ress.push(this.zshls[x])
				for(var q=0;q<this.ress.length;q++){
					for(var w=this.ress.length; w<0;w--){
						if(this.ress[q].imgs==this.ress[w].imgs){
							console.log(5854555)
							this.ress.splice(j,1);
							this.ress[q].num++;
						}
					}
				}
			},
			birt(){
				return window.location.href='#/birZhuFu';
			},
		}
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.shoppingCart{
	background-color: #f4f4f4;
	&>div{
		width: 100%;
		margin: auto;
		background-color: white;
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
			&>h4,&>p{
				margin-top: 15px;
				text-align: center;
				color: #a38d6b;
			}
			&>div{
				width: 90%;
				display: inline-block;
				margin:15px 14px;
				font-size: 14px;
				div{
					height: 80px;
				}
				img{
					width: 100%;
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
						right: -50%;
					}
				}
			}
		}
	}
	.shopProduct{
		nav{
			padding: 0;
			height: 50px;
			line-height: 50px;
			font-size: 10px;
			span:first-child{
				background-color: #ff4001;
				color: white;
				padding: 2px 5px;
			}
			span:last-child{
				color: #ff4001;
				border-bottom: 1px solid #ff4001;
			}
		}
		.pro1,.pro2{
			padding-left: 20px;
			&>img:first-child{
				width: 20px;
				position: relative;
				bottom: 40px;
			}
			&>img:nth-child(2){
				width: 100px;
			}
			&>div:nth-child(3){
				display: inline-block;
				width: 50%;
				height: 100px;
				line-height: 38px;
				div{
					position: relative;
					div{
						display: flex;
						position: absolute;
						right: -15px;
						top: 0;
						input,button{
							height: 25px;
							width: 25px;
							img{
								height: 100%;
							}
						}
					}
				}
			}
			.birt{
				width: 90%;
				div{
					width: 80%;
					height: 30px;
					background-color: #f9f9f9;
				}
			}
		}
		.zshl{
			margin: 20px 0;
			padding-bottom: 20px;
			background-color: white;
			border-bottom: 1px solid #f4f4f4;
			h3{
				text-align: center;
				margin: 10px 0;
			}
			ul{
				display: flex;
				overflow: auto;
				li{
					list-style-type: none;
					margin: 0 10px;
					&>img{
						width: 160px;
						height: 160px;
					}
					&>span{
						padding: 3px 5px;
						position: relative;
						top: -260px;
						color: white;
						background-color: #ff4001;
					}
					div{
						position: relative;
						s{
							color: #9c9c9c;
						}
						span{
							padding: 2px 5px;
							color: white;
							background-color: #ff4001;
							position: absolute;
							right: 0;
						}
					}
				}
			}
		}
		.jieSuan{
			height: 40px;
			position: fixed;
			width: 100%;
			bottom: 0;
			background-color: white;
			div{
				display: inline-block;
				width: 20%;
				img{
					height: 20px;
					width: 20px;
				}
			}
			&>div:last-child{
				text-align: right;
				margin: 0;
				position: absolute;
				right: 0;
				width: 45%;
				input{
					height: 40px;
					width: 50%;
					border: none;
					outline: none;
					background-color: #ff4001;
				}
				span{
					background-color: white;
					color: black;
					span{
						color: #ff4001;
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
}
</style>