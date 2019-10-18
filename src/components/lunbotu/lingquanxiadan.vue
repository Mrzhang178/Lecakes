<template>
	<div class="lingquanxiadan">
		<nav>
		  <div>
		    <a>
		      <img src="../../../static/images/lunbo1/address.png" alt="">
		      <el-button type="text" @click="centerDialogVisible = true">
		        {{adds[add1]}}
		      </el-button>
		    </a>
		    <a href="" class="searchMap">配送查询</a>
		  </div>
		  <h4>诺心 LE CAKE</h4>
		  <router-link to="/" class="helloW">
		    <img src="../../../static/images/lunbo1/index.png" alt="">
		    首页
		  </router-link>
		</nav>
		<section>
			<img src="../../../static/images/lingquanxiadan/1.jpg" alt="">
			<img src="../../../static/images/lingquanxiadan/2.jpg" alt="">
			<div>
				<div>
					<input type="text" placeholder="输入手机号" v-model="phoneNum">
					<br>
					<input type="text" placeholder="验证码" v-model="ma">
					<input type="button" value="hkaj">
					<br>
					<input type="text" placeholder="短信验证码" v-model='yzMa'>
					<input type="button" v-model="sendMa" @click="send">
				</div>
				<div>
					<input type="button" value="立即领券">
				</div>
			</div>
			<div>
				<h4>活动说明</h4>
				<p><b>活动时间：</b>即日起至2019年12月31日</p>
				<p><b>配送区域 :</b>诺心可配送区域，具体配送范围及收费标准以下单信息为准。</p>
				<b>参与规则：</b>
				<p>1. 即日起，凡参与本活动的用户可立即获得立减优惠券。</p>
				<p>2. 每位用户限领1次。</p>
				<p>优惠券使用方式：进入结算页面，选中活动优惠券即享优惠；详见官网【我的诺心】—【我的优惠券】</p>
				<b>特别提示：</b>
				<p>1. 同一订单仅限使用一张优惠券。</p>
				<p>2. 本券不退换、不兑现、不找零，不可转赠，抵扣部分不开具发票。</p>
				<p>3. 此次活动仅限线上支付用户参与，不可与其他优惠同享（如蛋糕券、兑换券、储值卡、银行优惠等）。</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data () {
		  return {
		  	phoneNum:"",
		  	sendMa:"发送验证码",
		  	num:120,
		  	yzMa:'',
		  	ma:'',
		    add1:"0",
		    centerDialogVisible: false,
		    adds:['上海','北京','广州','南京','成都','深圳','杭州','苏州','天津','宁波','无锡','绍兴','嘉兴','重庆'],
		  }
		},
		methods:{
			send(){
				var path = /^1[3-9]\d{9}$/g;
				if(this.phoneNum.match(path)){
					if(this.ma=='hkaj'){
						this.yzMa=parseInt(Math.random()*9000+1000);
						alert(this.yzMa);
						this.disable = true;
						var timer= setInterval(() =>{
							this.num--;
							if(this.num < 1){
								clearInterval(timer);
								this.disable=false;	
							}
							this.sendMa=this.num+'s后重试';
						},1000)
					}else{
						alert('请输入正确的验证码')
					}
				}else{
					alert('请输入正确的手机号')
				}
			},
		}
	}
</script>

<style scoped lang="less">
*{
	padding: 0;
	margin: 0;
}
a{
	text-decoration: none;
	font-size: 14px;
	color: black;
}
nav{
  height: 35px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 35px;
  background-color: white;
  border-bottom: 1px solid #a38d6b;
  z-index: 1000;
  text-align: center;
  div{
    text-align: left;
    position: absolute;
    left: 20px;
    display: inline-block; 
    a{
      text-decoration: none;
      font-size: 14px;
      color: black;
      img{
        position: relative;
        top:3px;
        width:15px;
      }
    }
    .searchMap{
      color: #9c9c9c;
    }
  }
  h4{
    display: inline-block;
    color:#e83a0e;
    margin: 0;
  }
  .helloW{
    position: absolute;
    right: 10px;
    img{
      width: 15px;
    }
  }
}
.el-dialog__footer{
  width: 200px;
  background-image: url(../../../static/images/Helloword/city_bg.png);
  background-size: cover;
}
section{
	display: flex;
	width: 100%;
	margin: auto;
	flex-wrap: wrap;
	img{
		width: 100%;
	}
	div{
		width: 100%;
		background-color: #f8c468;
		&>div{
			width: 83%;
			margin: auto;
			padding: 30px;
			background-color: #f19100;
			input{
				border: 1px solid white;
				background-color: #f7bd52;
				color: white;
				padding-left: 20px;
				font-size: 15px;
				margin-top:10px; 
				height: 50px;
			}
			input:first-child{
				width: 93%;
			}
			input:nth-child(4){
				font-size: 25px;
				font-weight: bold;
			}
			input:nth-child(4),input:nth-child(7){
				background-color: white;
				color: #ed8400;
				width: 25%;
				margin-left: 5px;
				text-align: center;
				padding: 0;
			}
		}
		&>div:last-child{
			width: 83%;
			padding: 30px;
			background-color: #f08c00;
			border-top: 1px dashed #f1bd73;
			input{
				width: 100%;
				padding: 0;
				margin: 0;
			}
		}
	}
	&>div:last-child{
		color: #a5631e;
		padding: 5px;
		background-color: #fac76e;
		h4{
			text-align: center;
		}
	}
}
</style>