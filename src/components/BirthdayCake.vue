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
				<span @click="r1"><router-link to="/" :class="{'aqq':fa}">综合</router-link></span>
				<span @click="r2"><router-link to="/" :class="{'aqq':fb}">销量</router-link></span>
				<span @click="r3"><router-link to="/" :class="{'aqq':fc}">季度限定</router-link></span>
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
	div:nth-child(2){
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
	div:last-child{
		font-size: 14px;
		position: absolute;
		right: 30px;
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
</style>