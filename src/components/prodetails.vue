<template>
	<div class="prodetails">
		<nav>
			<img src="../../static/images/prodetails/fanhui.png" alt="" @click="history">
			<div>
				<span  :class="{'classOne':one}" @click="cOne">商品</span>
				<span  @click="cTwo" :class="{'classOne':two}">评价</span>
				<span  @click="cThree" :class="{'classOne':three}">详情</span>
				<span  @click="cFour" :class="{'classOne':four}">推荐</span>
			</div>
			<router-link to="/">
				<img src="../../static/images/prodetails/shouye.png" alt="">
			</router-link>
		</nav>
		<div class="carousTwo" id="One">
      <el-carousel>
        <el-carousel-item v-for="(img,z) in imgas" :key="z">
          <img :src="img" alt="" class="img">
        </el-carousel-item>
      </el-carousel> 
      <div class="jieShao">
      	<div>{{proCake.name}}<router-link to=""><img src="../../static/images/prodetails/fenxiang.png" alt="">分享</router-link></div>
      	<br>
      	<p>{{proCake.pname}}<span>甜度：<img src="../../static/images/prodetails/tiandu.png" alt=""></span></p>
      	<br>
      	<p>&yen;{{proCake.inputBs[A].price}}</p>
      	<router-link to="">
      		<img src="../../static/images/prodetails/huiiyuan.png" alt="">
      		<span>开通仅&yen;99 预计可省&yen;336</span>
      	</router-link>
      </div>
    </div>
    <div class="draw">
    	<div @click="drawe = true" type="primary" style="margin-left: 16px;">
    	  已选规格：{{proCake.inputBs[A].first}} <img src="../../static/images/prodetails/xiayige.png" alt="">
    	</div>
    	<el-drawer
    	  :visible.sync="drawe"
    	  direction="btt" 
    	  size=450px class="elDrawer">
    	  <img src="../../static/images/prodetails/guige.jpg" alt=""  style="width: 150px;">
    	  <div style="display: inline-block;">
    	  	<h4>雪域牛乳芝士</h4>
    	  	<p style="color: #ff4001;">&yen;{{proCake.inputBs[A].price}}</p>
    	  </div>
    	  <br>
    	  <span>建议食用人数</span>
    	  <div style="text-align: center;box-sizing: border-box;">
    	  	<input type="button" :value="inputB.first" :style="[btnStyle]" v-for="(inputB,B) in proCake.inputBs" :key='B' @click="gund(B)">
    	  </div>
    	  <div>
    	  	<span style="padding-right: 45px;">约{{proCake.inputBs[A].zhongliang}}</span>
	    	  <span style="padding-right: 45px;">约{{proCake.inputBs[A].daxiao}}</span>
	    	  <span>{{proCake.inputBs[A].canju}}</span>
    	  </div>
    	  <div v-show="zhsp">
    	  	<p>已选择<span>{{Images.length}}</span>个组合商品</p>
    	  	<div>
    	  		<span v-for="(zhspImg,zh) in Images">
    	  			<img :src="zhspImg" alt="" :key='zh' style="height: 50px;">+
    	  		</span>
    	  	</div>
    	  </div>
    	  <input type="button" value="立即购买" style="color: #ff4001;background-color: white;border: 1px solid #ff4001;width: 50%;height: 50px;position: absolute;bottom: 0;" @click='joinCar(proShopCar)'>
    	  <input type="button" value="加入购物车" style="color: white;background-color: #ff4001;border: 1px solid #ff4001;width: 50%;height: 50px;position: absolute;bottom: 0;right: 0;" @click='joinCar(proShopCar)'>    	  
    	</el-drawer>
    </div>
    <div class="cuxiao">
    	<div @click="drawer = true" type="primary" style="margin-left: 16px;">
    	  <b>促销</b>
    	  <span>限时加购</span>
    	  +39元享啪啪脸蛋糕
    	  <img src="../../static/images/prodetails/xiayige.png" alt="">
    	</div>
    	<el-drawer
    	  :visible.sync="drawer"
    	  direction="btt">
    	  <p> <span style="background-color: #ff4001;color: white;"> 限时加购 </span> +39元享啪啪脸蛋糕</p>
    	  <span>【“啪”你一脸大冒险】2019.1.10起，购买蛋糕馆内任意蛋糕，加39元可购价值88元的「啪啪脸蛋糕」1个，多买多得。配送时间：2019.1.12起。</span>
    	</el-drawer>
    </div>
    <div class="zshl">
    	<h4></h4>
			<h3>专属欢乐 为你点亮</h3>
			<div>
				<ul>
					<li v-for="(huanle,le) in zshls" :key="le" @click="checkImg(le,huanle)">
						<img :src="huanle.imgs" alt="">
						<p>{{huanle.pname}}</p>
						<div>&yen;{{huanle.price}}<s>&yen;{{huanle.noprice}}</s><img :src="huanle.check" alt=""></div>
						<span>限时抢</span>
					</li>
				</ul>
			</div>
    </div>
    <div class="xinli">
    	<h3>更多心礼 惠选尊享</h3>
    	<div>
    		<ul>
    			<li to="" v-for="(xinli,li) in gdxls" :key="li" @click="checkImgLi(li,xinli)">
    				<img :src="xinli.imgs" alt="">
    				<p>{{xinli.pname}}</p>
    				<div>&yen;{{xinli.price}}<s>&yen;{{xinli.noprice}}</s><img :src="xinli.check" alt=""></div>
    				<span>限时抢</span>
    			</li>
    		</ul>
    	</div>
    </div>
    <div class="zhsp" v-show="zhsp">
    	<p>已选择<span>{{Images.length}}</span>个组合商品</p>
    	<div>
    		<span v-for="(zhspImg,zh) in Images">
    			<img :src="zhspImg" alt="" :key='zh'>+
    		</span>
    	</div>
    </div>
    <div id="pingjia">
    	<div>
    		<span>用户评论</span>
    		<router-link to="/pinglun">看看大家怎么说<img src="../../static/images/prodetails/xiayige.png" alt=""></router-link>
    		<p>
    			<img src="../../static/images/pinglun/1.jpg" alt="">
					<span>188***2670</span>
					<span>2-4人食</span>
					<span>2019-10-08 08:52:03</span>
    		</p>
				<p>非常好！浓浓奶味</p>
			</div>
			<hr>
			<div>
				<p>
    			<img src="../../static/images/pinglun/2.jpg" alt="">
					<span>136***1067</span>
					<span>5-8人食</span>
					<span>2019-10-05 16:26:14</span>
    		</p>
				<p>很好吃，浓郁可口，一家人分享真好。快递小哥准时送达，服务到位</p>
			</div>
    </div>
    <section id="xiangqing">
    	<h5>找寻心中的美味</h5>
    	<img src="../../static/images/prodetails/meiwei.jpg" alt="">
    	<p>澳洲牧场的阳光</p>
    	<p>唤醒了一滴鲜牛乳的美梦</p>
    	<p>从南半球到北半球</p>
    	<p>从上等芝士到比利时白巧克力</p>
    	<p>在舌尖舒展 融化 萦绕</p>
    	<p>浓滑如新生纯雪</p>
    	<h4>严选食材</h4>
    	<img src="../../static/images/prodetails/yanxuanshicai.jpg" alt="">
    	<img src="../../static/images/prodetails/wap_01(21).jpg" alt="">
    	<img src="../../static/images/prodetails/wap_02(8).gif" alt="">
    	<h4>关于食用</h4>
    	<div>
    		<p>适合人群：大众</p>
    		<p>保鲜条件：冷藏0-4摄氏度</p>
    		<p>食用方法：请收到蛋糕后2-3小时内食用</p>
    		<p>温馨提示：蛋糕中出现的细小黑色颗粒为香草籽，此为香草荚未碾磨均匀带入的颗粒，可放心食用，商品以实物为准。</p>
    	</div>
    	<img src="../../static/images/prodetails/lijiqianggou.jpg" alt="">
    </section>
    <img src="../../static/images/prodetails/kelisiting.jpg" alt="" class="kelisiting">
    <div id="tuijian">
    	<h3>推荐商品</h3>
    	<p>Sincerely Recommend</p>
    	<router-link to="" v-for="(product,pdt) in tjPro" :key="pdt">
		  <img :src="product.imgs" alt="">
		  <div>
	  		<div>{{product.pname}}</div>
	  		<br>
	  		<span>{{product.belong}}</span>
			  <p>{{product.desc}}</p>
		  </div>
		  <p>&yen;{{product.price}}</p>
		</router-link>
    </div>
    <footer>
    	<ul>
    		<router-link to="https://webchat.7moor.com/wapchat.html?accessId=94ffd220-4ea3-11e9-874c-d90fda97278e&fromUrl=https%3A%2F%2Fwx01.lecake.com%2Fh5%2Fdetail%3Fuid%3D103103&urlTitle=%E8%AF%BA%E5%BF%83%E8%9B%8B%E7%B3%95%E5%AE%98%E7%BD%91_%E7%94%9F%E6%97%A5%E8%9B%8B%E7%B3%95%7C%E6%B0%B4%E6%9E%9C%E8%9B%8B%E7%B3%95%7C%E8%8A%9D%E5%A3%AB%E6%85%95%E6%96%AF%E8%9B%8B%E7%B3%95%7C%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95-LE%20CAKE%E8%AF%BA%E5%BF%83%E8%9B%8B%E7%B3%95%E5%BA%97%E7%BD%91%E4%B8%8A%E8%AE%A2%E8%B4%AD" tag="li">
	    		<img src="../../static/images/prodetails/udesk.png" alt="">
	    		<br>
	    		客服
	    	</router-link>
	    	<router-link to="/" tag="li">
	    		<img src="../../static/images/prodetails/shouye.png" alt="">
	    		<br>
	    		首页
	    	</router-link>
	    	<router-link to="/shoppingCart" tag="li">
	    		<img src="../../static/images/prodetails/car.png" alt="">
	    		<br>
	    		购物车
	    	</router-link>
	    	<span @click="drawe = true" type="primary">加入购物车</span>
    	</ul>
    </footer>
    <aside v-show="Aside" @scrollTop="handleScroll" @click="Top">
    	<span><img src="../../static/images/dessertGift/backTop.png" alt=""></span>
    </aside>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				one:true,
				two:false,
				three:false,
				four:false,
				drawe: false,
				drawer: false,
				zhsp:false,
				Aside:false,
				Images:[],
				proShopCar:[],
				msg:false,
				A:0,
				alls: JSON.parse(localStorage.getItem("proShopCar")),
				btnStyle:{
					padding: '5px 10px',
					margin: '10px 5px',
					border: 'none'
				},
				proCake:{
					id:'001',
					name:'雪域牛乳芝士·特浓',
					pname:'鲜乳芝士蛋糕',
					inputBs:[
					{
						imgs:'../../static/images/Helloword/btdcake1.jpg',
						name:'雪域牛乳芝士·特浓',
						pname:'鲜乳芝士蛋糕',
						first:'2-4人食',
						zhongliang:'510g',
						daxiao:'15*15*3cm',
						canju:'含5套餐具',
						price:'298',
						type:'蛋糕',
						num:1
					},
					{
						imgs:'../../static/images/Helloword/btdcake1.jpg',
						name:'雪域牛乳芝士·特浓',
						pname:'鲜乳芝士蛋糕',
						first:'5-8人食',
						zhongliang:'910g',
						daxiao:'20*20*3cm',
						canju:'含10套餐具',
						price:'458',
						type:'蛋糕',
						num:1
					},
					{
						imgs:'../../static/images/Helloword/btdcake1.jpg',
						name:'雪域牛乳芝士·特浓',
						pname:'鲜乳芝士蛋糕',
						first:'10-12人食',
						zhongliang:'1475g',
						daxiao:'25*25*3cm',
						canju:'含15套餐具',
						price:'680',
						type:'蛋糕',
						num:1
					},
					{
						imgs:'../../static/images/Helloword/btdcake1.jpg',
						name:'雪域牛乳芝士·特浓',
						pname:'鲜乳芝士蛋糕',
						first:'15-20人食',
						zhongliang:'2625g',
						daxiao:'33*33*3cm',
						canju:'含20套餐具',
						price:'1120',
						type:'蛋糕',
						num:1
					},
				],
				},
				
				imgas:[
					'../../static/images/prodetails/lunbotu.jpg',
					'../../static/images/prodetails/lunbotu2.jpg'
				],
				zshls:[
					{
						id:'031',
						imgs:'../../static/images/prodetails/zhuanshuhuanle1.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'032',
						imgs:'../../static/images/prodetails/zhuanshuhuanle.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'033',
						imgs:'../../static/images/prodetails/zhuanshuhuanle2.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'034',
						imgs:'../../static/images/prodetails/zhuanshuhuanle4.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'035',
						imgs:'../../static/images/prodetails/zhuanshuhuanle3.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					}
				],
				gdxls:[
					{
						id:'0011',
						imgs:'../../static/images/prodetails/xinli1.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'0012',
						imgs:'../../static/images/prodetails/xinli2.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'0013',
						imgs:'../../static/images/prodetails/xinli3.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'0014',
						imgs:'../../static/images/prodetails/xinli4.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					},
					{
						id:'0015',
						imgs:'../../static/images/prodetails/xinli5.jpg',
						pname:'Happy Birthday蜡烛',
						price:'18',
						noprice:'38',
						check:'../../static/images/prodetails/weixuanzhong.png',
						type:'物品',
						num:1
					}
				],
				tjPro:[
					{
						id:'041',
						imgs:'../../static/images/prodetails/tuijianshangpin1.jpg',
						pname:'环游世界',
						desc:'五星好评 9种口味一次过瘾',
	          belong:'+58元限时加大',
	          price:218
					},
					{
						id:'042',
						imgs:'../../static/images/prodetails/tuijianshangpin2.jpg',
						pname:'雪域蓝莓芝士·特浓',
						desc:'清新蓝莓与澳洲进口牛乳的奇妙碰撞',
	          belong:'',
	          price:298
					},
					{
						id:'043',
						imgs:'../../static/images/prodetails/tuijianshangpin3.jpg',
						pname:'雪域牛乳芝士',
						desc:'经典之作 热销多年',
	          belong:'',
	          price:218
					},
					{
						id:'044',
						imgs:'../../static/images/prodetails/tuijianshangpin4.jpg',
						pname:'果然倾心',
						desc:'迷上缤纷果香的滋味',
	          belong:'aha会员专享 限时免费加大',
	          price:218
					},
				],
			}
		},
		created(){
			window.addEventListener('scroll',this.handleScroll);
		},
		methods:{
			checkImg(li,xinli){
				if(this.zshls[li].check=='../../static/images/prodetails/weixuanzhong.png'){
					this.zshls[li].check='../../static/images/prodetails/xuanzhong.png';
					this.Images.push(this.zshls[li].imgs);
					this.proShopCar.push(this.zshls[li]);
				}else{
					this.zshls[li].check='../../static/images/prodetails/weixuanzhong.png';
					for(var i in this.Images){
						if(this.Images[i]==xinli.imgs){
							this.Images.splice(i,1)
						}
					}
				}
				if(!this.Images.length){
					this.zhsp=false;
				}else if(this.Images.length){
					this.zhsp=true;
				}
			},
			checkImgLi(li,xinli){
				if(this.gdxls[li].check=='../../static/images/prodetails/weixuanzhong.png'){
					this.gdxls[li].check='../../static/images/prodetails/xuanzhong.png';
					this.Images.push(this.gdxls[li].imgs);
					this.proShopCar.push(this.gdxls[li]);
				}else{
					this.gdxls[li].check='../../static/images/prodetails/weixuanzhong.png';
					for(var i in this.Images){
						if(this.Images[i]==xinli.imgs){
							this.Images.splice(i,1)
						}
					}
				}
				if(!this.Images.length){
					this.zhsp=false;
				}else if(this.Images.length){
					this.zhsp=true;
				}
			},
			gund(B){
				this.A=B;
			},
			handleScroll:function(){
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (this.scrollTop>500){
					this.Aside=true;
				}else{
					this.Aside=false;
				}
			},
			Top(){
				document.documentElement.scrollTop=0;
			},
			history(){
				history.back();
			},
			cOne(){
				this.one=true;
				this.two=false;
				this.three=false;
				this.four=false;
				document.documentElement.scrollTop=0;
			},
			cTwo(){
				this.two=true;
				this.one=false;
				this.three=false;
				this.four=false;
				document.documentElement.scrollTop=1300;
			},
			cThree(){
				this.three=true;
				this.two=false;
				this.one=false;
				this.four=false;
				document.documentElement.scrollTop=1600;
			},
			cFour(){
				this.two=false;
				this.three=false;
				this.one=false;
				this.four=true;
				document.documentElement.scrollTop=5550;
			},
			joinCar(){
				this.proShopCar.push(this.proCake.inputBs[this.A]);
			   for(var x=0;x<this.proShopCar.length;x++){
			   	this.alls.shuxing.push(this.proShopCar[x])
			   }
		   	for(var i=1;i< this.alls.shuxing.length;i++){
		   		for(var j=this.alls.shuxing.length-i;j>0;j--){
		   			if((this.alls.shuxing[i].imgs)==(this.alls.shuxing[j].imgs)){
		   				this.alls.shuxing[i].num+=1;
		   				console.log(j)
		   				this.alls.shuxing.splice(j,1)
		   			}
		   		}
		  	}
	   		localStorage.setItem("proShopCar",JSON.stringify(this.alls))
	   			return window.location.href='#/shoppingCart';
			}
		},
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.prodetails{
	background-color: #f4f4f4;
}
a{
	text-decoration: none;
	font-size: 14px;
	color: black;
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
		padding: 0 30px;
		.classOne,.classTwo,.classThree,.classFour{
			border-bottom: 1px solid #ff4001;
			color: #ff4001;
		}
		a{
			display: inline-block;
			height: 37px;
			margin: 0 10px;
		}
	}
	img{
		height: 20px;
	}
}
.carousTwo{
	margin-top: 40px;
	height: 250px;
	.img{
		width:100%;
		height:250px;
	}
	.jieShao{
		div{
			padding-left: 10px;
			font-size: 20px;
			a{
				font-size: 15px;
				position: absolute;
				right: 10px;
				img{
					height: 20px;
					width: 20px;
					position: relative;
					top:3px;
				}
			}
		}
		p{
			padding-left: 10px;
			span{
				position: relative;
				left: 50px;
				img{
					height: 20px;
					position: relative;
					top: 5px;
				}
			}
		}
		p:nth-child(5){
			font-size: 18px;
			color: #ff4001;
		}
		a{
			span{
				position: relative;
				top: -40px;
				left: 20px;
				color: white;
			}
			img{
				height: 80px;
				width: 100%;
			}
		}
	}
}
.draw{
	width: 100%;
	margin-top: 270px;
	background-color: white;
	height: 50px;
	line-height: 50px;
	img{
		height: 20px;
		position: relative;
		left: 45%;
		top: 5px;
	}
}
.cuxiao{
	background-color: white;
	margin-top: 30px;
	height: 50px;
	line-height: 50px;
	position: relative;
	span{
		background-color: #ff4001;
		color: white;
	}
	img{
		height: 20px;
		position: absolute;
		right:5%;
		top: 13px;
	}
	p{
		span{
			background-color: #ff4001;
			color: white;
		}
	}
}
.zshl,.xinli{
	margin: 20px 0;
	padding-bottom: 20px;
	background-color: white;
	border-bottom: 1px solid #f4f4f4;
	h4{
		height: 10px;
		background-image: url(../../static/images/prodetails/groupListBg.jpg);
	}
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
				top: -200px;
				color: white;
				background-color: #ff4001;
			}
			div{
				position: relative;
				s{
					color: #9c9c9c;
				}
				img{
					height: 22px;
					position: absolute;
					right: 0;
				}
			}
		}
	}
}
.zhsp{
	img{
		height: 50px;
	}
}
#pingjia{
	padding: 10px;
	font-size: 12px;
	background-color: white;
	div{
		width: 100%;
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
#xiangqing{
	margin-top: 20px;
	padding-top: 10px;
	background-color: white;
	width: 100%;
	text-align: center;
	&>p{
		font-size: 12px;
	}
	h4,h5{
		margin-top: 20px;
		color: #a6906c;
	}
	img{
		width: 100%;
	}
	div{
		width: 85%;
		text-align: left;
		padding-left: 14%;
		p:last-child{
			color: #ff4001;
		}
	}
}
.kelisiting{
	margin-top: 10px;
	width: 100%;
}
#tuijian{
	margin-top: 20px;
	background-color: white;
	&>h3,&>p{
		text-align: center;
		color:#a38d6b; 
	}
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
	position: fixed;
	bottom: 0;
	left: 0;
	text-align: center;
	width: 100%;
	height: 50px;
	z-index: 10;
	background-color: white;
	li{
		width: 20%;
		display: inline-block;
		img{
			height: 20px;
		}
	}
	span{
		display: inline-block;
		width: 35%;
		height: 64px;
		background-color: #ff4001;
		text-align:center;
		padding-top: 10px;
		color: white;
		vertical-align: middle;
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