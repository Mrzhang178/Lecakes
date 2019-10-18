<template>
	<div class="lunboOne">
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
		<el-dialog
		  title="配送至"
		  :visible.sync="centerDialogVisible"
		  width="25%">
		  <span>当前定位城市：临沂市</span>
		  <span slot="footer" class="el-dialog__footer">
		    更多城市：
		    <br>
		    <span v-for="(add,ad) in adds" @click='addNow(ad)'>{{add}}<br></span>
		    </span>
		</el-dialog>
		<section>
			<img src="../../../static/images/lunbo1/download1.jpg" alt="">
			<img src="../../../static/images/lunbo1/2.jpg" alt="">
			<img src="../../../static/images/lunbo1/3.jpg" alt="">
			<img src="../../../static/images/lunbo1/4.jpg" alt="">
			<router-link to="" class="a1"></router-link>
			<router-link to="" class="a2"></router-link>
			<router-link to="/member" class="a3"></router-link>
			<img src="../../../static/images/lunbo1/5.jpg" alt="">
			<img src="../../../static/images/lunbo1/6.jpg" alt="">
			<img src="../../../static/images/lunbo1/7.jpg" alt="">
			<img src="../../../static/images/lunbo1/8.jpg" alt="">
			<div class="rules">
				<b>活动规则</b>
				<p>活动时间：2019年10月9日至2019年10月23日</p>
				<p>配送区域：华东、华南诺心可配送区域，具体配送范围及收费标准以下单信息为准。</p>
				<p>适用商品：闲蛋皇、茶草京都、芋见伯爵、果然倾心（2-4人食）</p>
				<br>
				<b>参与规则</b>
				<p>1. 活动期间，单笔订单正价购买闲蛋皇、茶草京都、芋见伯爵、果然倾心2-4人食，免费加大为5-8人食</p>
				<p>2. 本活动仅限aha会员参与，不与其他优惠同享（如优惠券、蛋糕券、兑换券、储值卡、银行优惠等）。</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data () {
		  return {
		    add1:"0",
		    centerDialogVisible: false,
		    adds:['上海','北京','广州','南京','成都','深圳','杭州','苏州','天津','宁波','无锡','绍兴','嘉兴','重庆'],
		  }
		}
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.lunboOne{
	background-color: #f4f4f4;
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
    left: 10px;
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
    right: 30px;
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
	width: 100%;
	margin: 35px auto;
	position: relative;
	display:flex;
	flex-wrap:wrap;
	.rules{
		position: absolute;
		font-size: 14px;
		bottom:70px;
		left: 15px;
	}
	img{
		width: 100%;
		margin:0;
		padding:0;
	}
	a{
		display: inline-block;
		position: absolute;
	}
}
</style>