define(["jquery","jquery-cookie"], function($){
	var goodsDetail = function(){ 
		$(function(){
			$.ajax({
				url: "data/goods.json",
				type: "GET",
				success: function(res){
					var currentId = window.location.href;
					// alert(currentId);
					var ID = currentId.substring(42);
					//ID存在是才执行以下操作
					if(res[ID]){
						var html = `
							<ul>
								<li class="li1"><img src="${res[ID].img}"></li>
								<li class="li2"><img src="${res[ID].img2}"></li>
								<li class="li3"><img src="${res[ID].img3}"></li>
								<li class="li4"><img src="${res[ID].img4}"></li>
								<li class="li5"><img src="${res[ID].img5}"></li>
							</ul>
							<div class="small">
								
								<img class="smallpic1 smallpic" src="${res[ID].img}"/>
								<img class="smallpic2 smallpic" src="${res[ID].img2}"/>
								<img class="smallpic3 smallpic" src="${res[ID].img3}"/>
								<img class="smallpic4 smallpic" src="${res[ID].img4}"/>
								<img class="smallpic5 smallpic" src="${res[ID].img5}"/>
								<span class="mark"></span>
								<span class="float"></span>
							</div>
							<div class="big">
								<img class="bigpic1 bigpic" src = "${res[ID].img}">
								<img class="bigpic2 bigpic" src = "${res[ID].img2}">
								<img class="bigpic3 bigpic" src = "${res[ID].img3}">
								<img class="bigpic4 bigpic" src = "${res[ID].img4}">
								<img class="bigpic5 bigpic" src = "${res[ID].img5}">
							</div>
							<div class="detail">
								<h1>${res[ID].title}</h1>
								<div class="clear">
									<p>${res[ID].decri}</p>
									<span class="goods_price">￥ ${res[ID].price}</span>
								</div>
								
								<div class="numOfGoods clear">
									<p>数量</p>
									<span>-</span>
									<p class="num">1</p>
									<span>+</span>
								</div>
								<div class="clear">
									<div class="cart">加入购物车</div>
									<div class="buyNow">现在购买</div>
								</div>
							</div>`;

						$(".goods_detail").html(html);
						var detail = `<h1>产品信息</h1>
										<img src="${res[ID].detail1}"/>
										<img src="${res[ID].detail2}"/>
										<img src="${res[ID].detail3}"/>
										<img src="${res[ID].detail4}"/>
										<img src="${res[ID].detail5}"/>
										<img src="${res[ID].detail6}"/>
										<img src="${res[ID].detail7}"/>
										<img src="${res[ID].detail8}"/>
										<img src="${res[ID].detail11}"/>
										<img src="${res[ID].detail10}"/>
										<img src="${res[ID].detail12}"/>
										<img src="${res[ID].detail9}"/>`;
						$("#detail_img").html(detail);
					}

				}
			})
			//点击切换
			$(".goods_detail").on("click",".li1",function(){
				$(".goods_detail li").css("boxShadow","");
				$(this).css("boxShadow","0px 2px 5px #ccc");
				$(".smallpic").css("display","none");
				$(".smallpic1").css("display","block");
				$(".bigpic").css("display","none");
				$(".bigpic1").css("display","block");
			})
			$(".goods_detail").on("click",".li2",function(){
				$(".goods_detail li").css("boxShadow","");
				$(this).css("boxShadow","0px 2px 5px #ccc");
				$(".smallpic").css("display","none");
				$(".smallpic2").css("display","block");
				$(".bigpic").css("display","none");
				$(".bigpic2").css("display","block");
			})
			$(".goods_detail").on("click",".li3",function(){
				$(".goods_detail li").css("boxShadow","");
				$(this).css("boxShadow","0px 2px 5px #ccc");
				$(".smallpic").css("display","none");
				$(".smallpic3").css("display","block");
				$(".bigpic").css("display","none");
				$(".bigpic3").css("display","block");
			})
			$(".goods_detail").on("click",".li4",function(){
				$(".goods_detail li").css("boxShadow","");
				$(this).css("boxShadow","0px 2px 5px #ccc");
				$(".smallpic").css("display","none");
				$(".smallpic4").css("display","block");
				$(".bigpic").css("display","none");
				$(".bigpic4").css("display","block");
			})
			$(".goods_detail").on("click",".li5",function(){
				$(".goods_detail li").css("boxShadow","");
				$(this).css("boxShadow","0px 2px 5px #ccc");
				$(".smallpic").css("display","none");
				$(".smallpic5").css("display","block");
				$(".bigpic").css("display","none");
				$(".bigpic5").css("display","block");
			})

			//放大镜功能
			$(".goods_detail").on("mouseover",".mark",function(){
				$(".float").css("display","block");
				$(".big").css("display","block");
			})
			$(".goods_detail").on("mouseout",".mark",function(){
				$(".float").css("display","none");
				$(".big").css("display","none");
			})
			$(".goods_detail").on("mousemove",".mark",function(e){
				var l=e.pageX-$(".small").offset().left-$(".float").width()/2;
				var t=e.pageY-$(".small").offset().top-$(".float").height()/2;
				
				if(l<0){
					l=0;
				}
				else if(l>$(".mark").width()-$(".float").width()){
					l=$(".mark").width()-$(".float").width();
				}
				
				if(t<0){
					t=0;
				}
				else if(t>$(".mark").height()-$(".float").height()){
					t=$(".mark").height()-$(".float").height();
				}
				$(".float").css("left",l).css("top",t);

				
				var percentX=l/($(".mark").width()-$(".float").width());
				var percentY=t/($(".mark").height()-$(".float").height());

				$(".bigpic").css("left",-percentX*($(".bigpic").width()-$(".big").width())).css("top",-percentY*($(".bigpic").height()-$(".big").height()));
				
			})
		})
	}	
	return{
		goodsDetail:goodsDetail
	}
	
})