

/*
	注意：引入jq去进行开发
*/
define(["jquery", "jquery-cookie"], function($){
	var shoppingList = function(){
		$(function(){
			$.ajax({
				url: "../data/goods.json",
				type: "get",
				success: function(res){
					var sc_str = $.cookie("goods");
					var html = "";
					if(sc_str){
						$(".lists").css("display","block");
						var arr = eval(sc_str);
						var totalPrice = 0;
						
						for(var i = 0;i < arr.length;i++){
							//计算总价格
							totalPrice += arr[i].num*Number(res[arr[i].id].price);
							html += `<li class="info_goods">
								<ul class="clear">
									<li>
										<div class="picGoods">
											<img src="${res[arr[i].id].img}">
										</div>
										<div class="detaGoods">
											<h4>${res[arr[i].id].title}</h4>
											<p>${res[arr[i].id].decri}</p>
										</div>
									</li>
									<li><span>X</span></li>
									<li>￥ ${arr[i].num*Number(res[arr[i].id].price)}.00</li>
									<li><span>-</span><b>${arr[i].num}</b><span>+</span></li>
									<li>￥ ${res[arr[i].id].price}</li>
								</ul>
							</li>`;
							// alert(arr[i]);
							
						}
						// totalPrice += Number(arr[i].num) * Number(res[arr[i].id].price);
						html += `<div class="totalBuy">
							<div class="buyNow">现在结算</div>
							<p class="total">应付总额：<span>￥ ${totalPrice}.00</span></p>
						</div>`;
						$(".info_lists").html(html);
					}else{
						$(".picture").css("display","block");
					}

				}
			})
		})

		return "我是shoppingList函数";
	}
	return {
		shoppingList: shoppingList
	}
})










