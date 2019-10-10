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
			<img src="../../../static/images/lunbo1/5.jpg" alt="">
			<img src="../../../static/images/lunbo1/6.jpg" alt="">
			<img src="../../../static/images/lunbo1/7.jpg" alt="">
			<img src="../../../static/images/lunbo1/8.jpg" alt="">
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
	width: 600px;
	margin: 35px auto;
	display:flex;
	flex-wrap:wrap;
	img{
		width: 600px;
		margin:0;
		padding:0;
	}
}
</style>