<template>
	<div class="entry">
		<header>
			<p @click='pEntry(1)' :class="ent?'pe':''">手机一键登录</p>
			<p @click='pEntry(2)' :class="ent?'':'pe'">账号登录</p>
		</header>
		<section class="secOne" v-show="secOne">
			<p>未注册的用户默认直接注册</p>
			<div>登录即代表您已同意<router-link to="">《诺心lecake用户服务协议》</router-link></div>
			<div>
				<div>
					<img src="../../static/images/entry/phone.png" alt="">
					<input type="text" placeholder="请输入手机号" v-model='phoneNum'>
				</div>
				<p v-show='pp'>手机号不能为空</p>
				<div>
					<img src="../../static/images/entry/yanzhengma.png" alt="">
					<input type="text" placeholder="请输入短信验证码" v-model='newNum'>
					<input type="button" @click='sendNum' v-model="sendN" :disabled="disable">
				</div>
				<input type="button" value="验证并登录" @click='validate'>
			</div>
 		</section>
 		<section v-show="secTwo" class="secTwo">
 			<div>
 				<img src="../../static/images/entry/phone.png" alt="">
 				<input type="text" placeholder="请输入手机号或邮箱">
 			</div>
 			<div>
 				<img src="../../static/images/entry/yanzhengma.png" alt="">
 				<input type="text" placeholder="请输入密码">
 			</div>
 			<input type="button" value="登录">
 		</section>
		<footer>
			<h3><hr><span>其他登录方式</span></h3>
			<router-link to=""><img src="../../static/images/entry/qq.png" alt=""></router-link>
		</footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				secOne:true,
				secTwo:false,
				pp:false,
				ent:true,
				disable:false,
				phoneNum:'',
				newNum:'',
				sendN:'发送验证码',
				num:121,
			}
		},
		methods:{
			pEntry(e){
				if(e==2){
					this.ent=false;
					this.secOne=false;
					this.secTwo=true;
				}else{
					this.ent=true;
					this.secOne=true;
					this.secTwo=false;
				}
			},
			sendNum(){
				var path = /^1[3-9]\d{9}$/g;
				if(this.phoneNum.match(path)){
					this.newNum=parseInt(Math.random()*9000+1000);
					alert(this.newNum);
					this.disable = true;
					var timer= setInterval(() =>{
						this.num--;
						if(this.num < 1){
							clearInterval(timer);
							this.disable=false;	
						}
						this.sendN=this.num+'s后重试';
					},1000)
				}else if(this.phoneNum ==''){
					this.pp=true;
				}else{
					alert('请输入正确的手机号')
				}
			},
			validate(){
				if(this.newNum !=''){
					sessionStorage.setItem(this.phoneNum,this.newNum)
					return window.location.href='#/home';
				}else{
					alert('请输入验证码')
				}
			}
		}
	}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.entry{
	padding: 20px 15px;
	header{
		p{
			display: inline-block;
		}
		p:last-child{
			border-left: 1px solid gray;
			padding-left: 20px;
			margin-left: 20px;
		}
		.pe{
			color: #fe4320;
		}
	}
	.secOne{
		width: 100%;
		p{
			font-size: 13px;
			color: #9c9c9c;
		}
		div{
			position: relative;
			font-size: 13px;
			color: #9c9c9c;
			a{
				color: #fe4320;
				text-decoration: none;
			}
			&>p{
				position: absolute;
				font-size: 10px;
				top: 40px;
				z-index: 10;
				color: #fe4320;
			}
		}
		&>div:nth-child(3){
			width: 100%;
			div{
				height: 40px;
				margin: 15px 0;
				border-bottom: 1px solid #e7e2d6;
				input{
					height: 40px;
					outline: none;
					border: none;
				}
			}
			div:first-child{
				input{
					width: 90%;
					box-shadow: none;
				}
			}
			div:nth-child(3){
				input:nth-child(2){
					width:60%;
				}
				input:nth-child(3){
					width: 25%;
					border-left:1px solid #fe4320;
					background-color: white;
				}
			}
			&>input{
				width: 100%;
				height: 40px;
				border: none;
				background-color: #fe4320;
				color: white;
			}
		}
	}
	.secTwo{
		width: 100%;
		div{
			height: 40px;
			margin: 15px 0;
			border-bottom: 1px solid #e7e2d6;
			img{
				width: 15px;
				margin-right: 5px;
			}
			input{
				height: 40px;
				border: none;
				outline: none;
			}
		}
		&>input{
			width: 100%;
			height: 40px;
			color: white;
			background-color: #fe4320;
			border: none;
		}
	}
	footer{
		font-size: 14px;
		font-weight: normal;
		margin-top:250px; 
		text-align: center;
		h3{
			hr{
				width: 100%;
			}
			span{
				background-color: white;
				position: relative;
				top: -10px;
			}
		}
	}
}
</style>