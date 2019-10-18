<template>
	<div class="news">
		<nav>
			<router-link to="/"><img src="../../static/images/news/return.png" alt=""></router-link>
			<h5>公告</h5>
		</nav>
		<section>
			<div>
				<div class="content">
					<h4>国庆阅兵期间北京地区配送公告:<span>2019-09-26</span></h4>
					<span>尊敬的北京用户：</span>
					<div>
						2019年9月30日至10月1日，受国庆阅兵临时交通管制影响，北京市东二环路由东直门桥至东便门桥双方向路段，前门东西大街，官园桥由平安里西大街至东四十条桥及工体北路，西二环西便门桥至官园桥双方向路段，上述路段蛋糕站点物流停止配送。其它区域物流配送可能延迟。特此公告，敬请谅解。
					</div>
				</div>
				<div class="content">
					<h4>深圳部分区域配送调整公告:<span>2019-01-22</span></h4>
					<span>尊敬的深圳用户：</span>
					<div>
						2019年2月2日至2月14日期间，深圳部分地区调整配送范围。深圳水库以东、深圳河以北、G25长深高速以西、茂仔村以南；丹平快速以东大望村、梧桐树暂停配送，具体调整区域请查看2月2日起发布的深圳配送地图或提前电话咨询，特此公告。
					</div>
				</div>
				<div class="content">
					<h4>上海滴水湖区域配送调整公告:<span>2018-12-29</span></h4>
					<span>尊敬的上海用户：</span>
					<div>
						2019年1月1日起上海部分地区调整配送范围。上海滴水湖区域取消配送，具体调整区域请查看1月1日起发布的上海配送地图或提前电话咨询，特此公告。
					</div>
				</div>
				<div class="content">
					<h4>上海部分区域配送调整公告:<span>2018-12-03</span></h4>
					<span>尊敬的上海用户：</span>
					<div>
						2018年12月1日起上海部分地区调整配送范围。浦东国际机场、迪士尼园区内取消配送，具体调整区域请查看12月1日起发布的上海配送地图或提前电话咨询，特此公告。
					</div>
				</div>
				<div class="content">
					<h4>蛋糕券兑换适用区域调整公告:<span>2018-11-12</span></h4>
					<span>尊敬的诺心用户：</span>
					<div>
						2018年11月15日起，为更好地保护您的合法权益，诺心蛋糕券仅支持当地城市所在区域兑换使用，不可跨区通兑，蛋糕券适用区域详见卡面说明。特此公告，敬请谅解。
					</div>
				</div>
				<div class="content">
					<h4>进博会期间上海地区配送公告:<span>2018-11-01</span></h4>
					<span>尊敬的上海用户：</span>
					<div>
						2018年11月5日至11月10日，每天8:00-19:00，因进博会临时交通管制，上海市崧泽大道-蟠臻路-蟠中东路-蟠文路-徐民东路-蟠秀路-盈港东路-涞港路-崧泽大道合围区域（除盈港东路-涞港路外）上述路段蛋糕站点物流配送可能延迟。特此公告，敬请谅解。
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name:"News"
	}
</script>

<style scoped lang="less">
	a{
		text-decoration: none;
	}
	nav{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;
		border-bottom: 1px solid #f4f4f4;
		img{
			padding-left: 10px;
			height: 15px;
		}
		h5{
			padding-left: 40%;
			display: inline-block;
			color: #a38d6b;
		}
	}
	section{
		width: 100%;
		box-sizing: border-box;
		&>div{
			width: 90%;
			background-color: #f4f4f4;
			margin:10px auto;
			padding: 10px 0;
		}
		.content{
			width: 90%;
			font-size: 12px;
			background-color: white;
			margin: 20px;
			h4{
				position: relative;
				span{
					position: absolute;
					right: 0px;
					color: #9c9c9c;
				}
			}
		}
		
	}
	
</style>