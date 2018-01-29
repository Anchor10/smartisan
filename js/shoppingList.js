
define(["jquery", "jquery-cookie","index"], function($){
	//计算购物车商品数量-----------------------------------------------
	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){ //如果cookie存在
			var arr = eval(sc_str);
			var sum = 0; //用于累加的和
			for(var i in arr){
				sum += arr[i].num;
			}

			$(".cart").html(sum).css("backgroundColor","#E86C62");

		}else{
			$(".cart").html(0);
		}
	}
	//购物详单----------------------------------------------------------
	var shoppingList = function(){
		$(function(){
			price();
			//计算商品小计和总价------------------------------------------
			function price(){			
				$.ajax({
					url: "../data/goods.json",
					type: "get",
					success: function(res){
						$(".total2").html(totalPrice);
						var sc_str = $.cookie("goods");
						var html = "";
						//有商品无商品画面切换
						if(sc_str){
							$(".lists").css("display","block");
							$(".picture").css("display","none");
							var arr = eval(sc_str);
							var totalPrice = 0;
							
							for(var i = 0;i < arr.length;i++){
								//计算总价格
								totalPrice += arr[i].num*Number(res[arr[i].id].price);
								//单种商品小计
								smallTotal = arr[i].num*Number(res[arr[i].id].price);

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
												<li><span class="addSub ${arr[i].id}">X</span></li>
												<li class="total1">￥ ${arr[i].num*Number(res[arr[i].id].price)}.00</li>
												<li><span class="addSub ${arr[i].id}">-</span><b class="numOfs">${arr[i].num}</b><span class="addSub ${arr[i].id}">+</span></li>
												<li>￥ ${res[arr[i].id].price}</li>
											</ul>
										</li>`;
								$(".total1").html(smallTotal);	
							}
							html += `<div class="totalBuy">
										<div class="buyNow">现在结算</div>
										<p class="total">应付总额：<span class="total2">￥ ${totalPrice}.00</span></p>
									</div>`;
							$(".info_lists").html(html);
							
							$(".total2").html(`￥ ${totalPrice}.00`);

						}else{
							$(".picture").css("display","block");
							$(".lists").css("display","none");

						}

					}
				})
			}
			//事件委托，给数量增减按钮添加点击按钮------------------------------------
			$(".info_lists").on("click",".addSub",function(){
				price();
				var sc_str = $.cookie("goods");
				var arr = eval(sc_str);
				// 点击的按钮对应的ID
				var btnId = this.className.substring(7);

				for(var i = 0; i < arr.length; i++){

					if(btnId == arr[i].id){
						switch($(this).html()){
							case "+":
								arr[i].num = arr[i].num + 1;
								break;
							case "-":
								//数量不能少于1
								if(arr[i].num > 1){
									arr[i].num = arr[i].num - 1;
								}
								break;
							case "X":
								arr.splice(i,1);
								if(arr.length == 0){
									//清除cookie
									$.cookie("goods",null);
									price();
									sc_car();
								}

								
								break;
							default:
								break;
						}
						//数组长度不为0时重新设置cookie
						if(arr.length != 0){
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
						}						
						
						sc_car();
						if(arr[i]){
							$(this).closest("li").find(".numOfs").html(arr[i].num);
						}
						
						
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










