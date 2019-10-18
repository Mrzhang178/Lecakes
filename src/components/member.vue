<template>
	<div class="member">
		<section>
			<div class="aha">
				<div class="ahaHeader">
					<span>升级aha会员</span>
					<img src="../../static/images/member/aha.png" alt="">
					<span>预计可省336+元</span>
				</div>
				<ul>
					<li>
						<a href="">
							<img src="../../static/images/member/aha1.png" alt="">
						</a>
						<div class="whiteCol">派对狂欢</div>
						<div>人气蛋糕</div>
						<div>免费加大</div>
					</li>
					<li>
						<a href="">
							<img src="../../static/images/member/aha2.png" alt="">
						</a>
						<div class="whiteCol">乐翻全场</div>
						<div>全场蛋糕</div>
						<div>专享立减￥60</div>
					</li>
					<li>
						<a href="">
							<img src="../../static/images/member/aha3.png" alt="">
						</a>
						<div class="whiteCol">趣享甜宠</div>
						<div>喵叽叽曲奇</div>
						<div>享0元加购￥158</div>
					</li>
					<li>
						<a href="">
							<img src="../../static/images/member/aha4.png" alt="">
						</a>
						<div class="whiteCol">大咖沙龙</div>
						<div>心选蛋糕</div>
						<div>享会员价</div>
					</li>
					<li>
						<a href="">
							<img src="../../static/images/member/aha5.png" alt="">
						</a>
						<div class="whiteCol">平安吐司</div>
						<div>购买4周</div>
						<div>加赠1周</div>
					</li>
					<li>
						<a href="">
							<img src="../../static/images/member/aha6.png" alt="">
						</a>
						<div class="whiteCol">aha值返利</div>
						<div>1aha值=1元</div>
						<div>返利当钱花</div>
					</li>
				</ul>
			</div>
			<div class="upgradeNow">
				<a href="">立即升级￥99/年</a>
			</div>
			<div class="yangNi">
				<img src="../../static/images/member/yangni.jpg" alt="">
			</div>
			<p>
				<span></span>
				<span>aha会员专享权益</span>
				<span></span>
			</p>
			<a href="" class="interest">权益说明</a>
			<div class="daKa">
				<h3>大咖沙龙</h3>
				<span>心选人气蛋糕 会员专享优惠价</span>
				<br>
				<br>
				<div class="dakaCake">
					<img src="../../static/images/member/guiyuan.jpg" alt="">
					<br>
					<span>桂圆琥珀核桃</span>
					<br>
					<span>aha会员专享 限时免费加大</span>
					<br><br>
					<span>&yen;218</span>
				</div>
				<div class="dakaCake">
					<img src="../../static/images/member/shoutao.jpg" alt="">
					<br>
					<span>寿喜桃</span>
					<br>
					<span>aha会员专享 赠费南雪礼盒</span>
					<br><br>
					<span>&yen;388</span>
				</div>
			</div>
			<div><a href="">查看更多</a></div>
		</section>
		<div class="party">
			<div>
				<h3>派对狂欢</h3>
				<p>购买环游世界蛋糕2-4人食加大为5-8人食</p>
				<img src="../../static/images/member/party.jpg" alt="">
			</div>
			<div><a href="">立即使用</a></div>
		</div>
		<div class="party">
			<div>
				<h3>乐翻全场</h3>
				<p>全场蛋糕立减60元</p>
				<img src="../../static/images/member/lefan.jpg" alt="">
			</div>
			<div><a href="">立即使用</a></div>
		</div>	
		<div class="party">
			<div>
				<h3>趣享甜宠</h3>
				<p>0元加购价值158元喵叽叽曲奇·随机礼盒（280g）</p>
				<img src="../../static/images/member/quxiang.jpg" alt="">
			</div>
			<div><a href="">立即使用</a></div>
		</div>
		<div class="party">
			<div>
				<h3>早安吐司</h3>
				<p>任意吐司购买4周加赠1周
					<br>配送范围：华东诺心可配送区域</p>
				<img src="../../static/images/member/zaoan.jpg" alt="">
			</div>
			<div><a href="">立即使用</a></div>
		</div>	
		<div class="rebate">
			<h3>aha值返利</h3>
			<p>aha值当钱花 1aha值=1元</p>
			<img src="../../static/images/member/fanli.png" alt="">
			<div>
				<p>您当前aha值: 0</p>
				<p>已使用aha值: 0</p>
				<hr align="left">
				<p>如何获得aha值？</p>
				<p>（订单实付金额-运费）÷10=aha值</p>
			</div>
		</div>
		<p class="lastOne">更多aha会员惊喜权益 敬请期待</p>
		<footer v-show="lJ" @scrollTop="handleScroll"><a href="">立即升级 &yen;99/年</a></footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lJ:false,
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll);
		},
		methods:{
			handleScroll:function(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop>700){
					this.lJ=true;
				}else{
					this.lJ=false;
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.member{
		background-color: #f4f4f4;
	}
	section{
		width: 100%;
		margin: auto;
		background-color: white;
		box-sizing: border-box;
		.aha{
			height: 450px;
			width: 100%;
			padding-top: 30px;
			text-align: center;
			color: #ffffff;
			background-image: url(../../static/images/member/header_notAha.jpg);
			background-size: 100% 100%;
			.ahaHeader{
				img{
					width: 70px;
				}
			}
			ul{
				width: 88%;
				margin:60px auto 0;
				display: flex;
				flex-wrap: wrap;

				li{
					width: 30%;
					margin: 20px 0;
					list-style-type: none;
					display: inline-block;
					font-size: 14px;
					color: black;
					.whiteCol{
						color: white;
					}
					img{
						width: 60px;
					}
				}
			}
		}
		.upgradeNow{
			box-sizing: border-box;
			margin: 20px;
			padding: 15px;
			text-align: center;
			background-color: #ae864c;
			border-radius: 5px;
			a{
				text-decoration: none;
				color: white;	
			}
			
		}
		.yangNi{
			text-align: center;
			img{
				width: 95%;
			}
		}
		p{
			box-sizing: border-box;
			width: 100%;
			text-align: center;
			span:first-child{
				margin-right:15%;
				display: inline-block;
				width: 15%;
				height: 5px;
				background-image: url(../../static/images/member/line_left.png);
				background-size: 100%,100%;
			}
			span:last-child{
				display: inline-block;
				width: 15%;
				height: 5px;
				background-image: url(../../static/images/member/line_right.png);
				background-size: 100%,100%;
				margin-left: 15%;
			}
		}
		.interest{
			display: block;
			color: #9c9c9c;
			text-align: center;
		}
		.daKa{
			text-align: left;
			padding-bottom: 20px;
			border-bottom: 1px solid #e0dcd1;
			h3{
				padding-left: 35px;
			}
			&>span{
				padding-left: 35px;
				color: #9c9c9c;
				font-size: 14px;
			}
			.dakaCake{
				width: 40%;
				display: inline-block;
				margin-left: 30px;
				text-align: left;
				img{
					width: 100%;
				}
				span{
					font-size: 14px;
				}
				span:nth-child(5){
					background-color: #cca976;
					color: white;
					padding: 0 5px;
				}
			}
		}
		>div:last-child{
			text-align: center;
			padding:20px 0;
			a{
				color: #cca976;
				text-decoration: none;
			} 
		}
	}
	.party{
		box-sizing: border-box;
		width: 95%;
		margin:20px auto;
		padding: 10px 0;
		background-color: white;
		&>div:first-child{
			margin: 20px;
			p{
				color: #9c9c9c;
				font-size: 14px;
			}
			img{
				width: 100%;
			}
		}
		&>div:last-child{
			border-top: 1px solid #e0dcd1;
			text-align: center;
			padding: 10px 0; 
			a{
				text-decoration: none;
				color: #cfa875;
			}
		}
	}
	.rebate{
		box-sizing: border-box;
		width: 95%;
		height: 400px;
		margin:20px auto 30px;
		background-color: white;
		padding: 20px;
		position: relative;
		&>p{
			color: #9c9c9c;
			font-size: 14px;
		}
		img{
			width: 100%;
		}
		>div{
			margin: 20px;
			position: absolute;
			top: 70px;
			color: white;
			font-size: 14px;
			text-align: left;
			hr{
				width: 60px;
			}
		}
	}
	.lastOne{
		font-size: 14px;
		color: #9c9c9c;
		text-align: center;
		padding-bottom: 20px;
	}
	footer{
		box-sizing: border-box;
		width: 100%;
		background-color: #b89865;
		text-align: center;
		position: fixed;
		bottom: 0;		
		a{
			display: block;
			width: 100%;
			height: 60px;
			line-height: 60px;
			color: white;
			text-decoration: none;
		}
	}
</style>