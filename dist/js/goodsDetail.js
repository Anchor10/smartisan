define(["jquery","jquery-cookie","main"], function($){
	var goodsDetail = function(){ 
		$(function(){
			$.ajax({
				url: "../data/goods.json",
				type: "GET",
				success: function(res){
					var html = `
						<ul>
							<li><img src="${res[0].img}"></li>
							<li><img src="${res[0].img2}"></li>
							<li><img src="${res[0].img3}"></li>
							<li><img src="${res[0].img4}"></li>
							<li><img src="${res[0].img5}"></li>
						</ul>
						<div class="magnify">
							<img src="${res[0].img1}">
						</div>
						<div class="detail">
							<h1>${res[0].title}</h1>
							<div class="clear">
								<p>${res[0].decri}</p>
								<span class="goods_price">￥ ${res[0].price}</span>
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
					var detail = `<h1>产品信息</h1>
									<img src="${res[0].detail1}"/>
									<img src="${res[0].detail2}"/>
									<img src="${res[0].detail3}"/>
									<img src="${res[0].detail4}"/>
									<img src="${res[0].detail5}"/>
									<img src="${res[0].detail6}"/>
									<img src="${res[0].detail7}"/>
									<img src="${res[0].detail8}"/>
									<img src="${res[0].detail11}"/>
									<img src="${res[0].detail10}"/>
									<img src="${res[0].detail12}"/>
									<img src="${res[0].detail9}"/>`;
					$("#detail_img").html(detail);

				}
			})
		})

	}
	
	return{
		goodsDetail:goodsDetail
	}
	
})