<template>
	<div class="birthdayCake">
		<nav>
			<div>
				<a>
				  <img src="../../static/images/birthdayCake/address.png" alt="">
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
			<div>
				<img src="../../static/images/birthdayCake/shaixuan.png" alt="">
				筛选
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
			<router-link to="" v-for="(product,pdt) in BirProducts" :key="pdt">
			  <img :src="product.imgs" alt="">
			  <div>
		  		<div>{{product.pname}}</div>
		  		<br>
		  		<span>{{product.belong}}</span>
				  <p>{{product.desc}}</p>
			  </div>
			  <p>&yen;{{product.price}}</p>
			</router-link>
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
		      <img src="../../static/images/Helloword/cake.png" alt="">
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
				BirProducts:[
					{
						id:'021',
	          imgs:'../../static/images/birthdayCake/1.jpg',
	          pname:'雪域牛乳芝士·特浓',
	          belong:' ',
	          desc:"甄选澳洲a2®全脂鲜牛奶 浓醇升级",
	          price:218,
	          xiaoliang:524
					},
					{
						id:'022',
	          imgs:'../../static/images/birthdayCake/2.jpg',
	          pname:'桂圆琥珀核桃',
	          belong:'',
	          desc:"滋养新食尚 予你不藏私的关怀",
	          price:218,
	          xiaoliang:4524
					},
					{
						id:'023',
	          imgs:'../../static/images/birthdayCake/3.jpg',
	          pname:'雪域牛乳芝士',
	          belong:' ',
	          desc:"经典之作 热销多年",
	          price:218,
	          xiaoliang:256
					},
					{
						id:'024',
	          imgs:'../../static/images/birthdayCake/4.jpg',
	          pname:'茶草京都',
	          belong:'aha会员专享 限时免费加大',
	          desc:"抹茶控京都寻味 草色茶香自悠然",
	          price:218,
	          xiaoliang:543
					},
					{
						id:'025',
	          imgs:'../../static/images/birthdayCake/5.jpg',
	          pname:'果然倾心',
	          belong:'aha会员专享 限时免费加大',
	          desc:"迷上缤纷果香的滋味",
	          price:218,
	          xiaoliang:78
					},
					{
						id:'026',
	          imgs:'../../static/images/birthdayCake/6.jpg',
	          pname:'数字蛋糕',
	          belong:'第2件半价 第3件免单',
	          desc:"人见人爱Ins网红 明星同款",
	          price:218,
	          xiaoliang:846
					},
					{
						id:'027',
	          imgs:'../../static/images/birthdayCake/7.jpg',
	          pname:'草莓拿破仑',
	          belong:' ',
	          desc:"薄脆酥皮搭配清甜草莓",
	          price:218,
	          xiaoliang:545
					},
					{
						id:'028',
	          imgs:'../../static/images/birthdayCake/8.jpg',
	          pname:'环游世界',
	          belong:'+58元限时加大',
	          desc:"五星好评 9种口味一次过瘾",
	          price:218,
	          xiaoliang:5244
					},
					{
						id:'029',
	          imgs:'../../static/images/birthdayCake/9.jpg',
	          pname:'寿喜桃',
	          belong:'',
	          desc:"拉起福寿喜气贺词 贴心低甜木糖醇",
	          price:218,
	          xiaoliang:454
					},
				]
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
				for(var x=1;x<this.BirProducts.length;x++){
					for(var j = 0;j < this.BirProducts.length-x ;j++){
						if(this.BirProducts[j].id > this.BirProducts[j+1].id){
							var temp = this.BirProducts[j];
							this.BirProducts[j] = this.BirProducts[j+1];
							this.BirProducts[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
			},
			r2(){
				this.fb=true;
				this.fa=false;
				this.fc=false;
				for(var x=1;x<this.BirProducts.length;x++){
					for(var j = 0;j < this.BirProducts.length-x ;j++){
						if(this.BirProducts[j].xiaoliang < this.BirProducts[j+1].xiaoliang){
							var temp = this.BirProducts[j];
							this.BirProducts[j] = this.BirProducts[j+1];
							this.BirProducts[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
			},
			r3(){
				this.fc=true;
				this.fa=false;
				this.fb=false;
				for(var x=1;x<this.BirProducts.length;x++){
					for(var j = 0;j < this.BirProducts.length-x ;j++){
						if(this.BirProducts[j].id < this.BirProducts[j+1].id){
							var temp = this.BirProducts[j];
							this.BirProducts[j] = this.BirProducts[j+1];
							this.BirProducts[j+1] = temp;
						}
					}
				}
				this.$forceUpdate()
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
	height: 40px;
	line-height: 40px;
	background-color: white;
	text-align: center;
	position: fixed;
	padding-left: 5px;
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
			width: 15px;	
		}
	}
	div:nth-child(2){
		span{
			padding: 0 5px;
			font-size: 14px;
		}
		.aqq{
			color: #ff4001;
		}
	}
	div:last-child{
		font-size: 14px;
		position: absolute;
		right: 20px;
		img{
			width: 18px;
			position: relative;
			top: 2px;
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
	padding-bottom:60px;
	a{
		text-decoration: none;
		color: black;
		font-size: 14px;
		display: inline-block;
		width: 40%;
		margin:0 15px; 
		img{
			width: 100%;
		}
		>div{
			height: 150px;
			span{
				background-color: #cca976;
				color: white;
			}
			p{
				color: #9c9c9c;
			}
		}
	}
}
footer{
  .helloFooter {
    width: 100%;
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