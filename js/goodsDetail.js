define(["jquery"], function($){
	$(function(){
		$.ajax({
			url: "../data/goods.json",
			type: "GET",
			success: function(res){
				var html = `
			<ul>
				<li><img src=""></li>
				<li><img src=""></li>
				<li><img src=""></li>
				<li><img src=""></li>
				<li><img src=""></li>
			</ul>
			<div class="magnify">
				<img src="">
			</div>
			<div class="detail">
				<h1>Smartisan 原装快充充电器 18W</h1>
				<div class="clear">
					<p>18W 安全快充</p>
					<span class="goods_price">¥59.00</span>
				</div>
				
				<div class="numOfGoods clear">
					<p>数量</p>
					<span>-</span>
					<p class="num">1</p>
					<span>+</span>
				</div>
				<div class="clear">
					<div class="toCart">加入购物车</div>
					<div class="buyNow">现在购买</div>
				</div>
			</div>`;
				$(".goods_detail").html(html);
				
			}
		})
	})
	
})