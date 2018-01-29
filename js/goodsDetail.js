define(["ballMove","jquery","jquery-cookie"], function(ballMove,$){
	var goodsDetail = function(){ 
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
		$(function(){
			//获取查询字符串的id的值
			var str = window.location.search;
			//去掉？
			var currentId = str.substring(1);
			//找到=的位置
			var n = currentId.indexOf("=");
			//提取等号后面的id值
			var ID = currentId.substring(n+1);
			// alert(ID);

			// var ID = currentId.substring(3);
			$.ajax({
				url: "data/goods.json",
				type: "GET",
				success: function(res){
					
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
									<span class="addSub">-</span>
									<p class="num">1</p>
									<span class="addSub">+</span>
								</div>
								<div class="clear">
									<div class="tocart">加入购物车</div>
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

			//数量增减按钮的实现:
			$(".goods_detail").on("click",".addSub",function(){

				switch($(this).html()){
					case "+":
						$(".num").html(parseInt($(".num").html())+1);
						break;
					case "-":
						if($(".num").html()>1){
							$(".num").html(parseInt($(".num").html())-1);
						}
						break;
					default:
						break;
				}
			})


			//加入购物车按钮的实现:
			$(".goods_detail").on("click",".tocart",function(){
				// alert(1);
				//进行抛物线运动
				ballMove.ballMove(this);

				//b:判断是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;

				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + ID + ",num:"+$(".num").html()+"}]", {
						expires: 7
					});
				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品


					//b:遍历所有的对象，判断id是否有相同的，如果有num++
					for(var i in arr){
						if(arr[i].id == ID){
							arr[i].num += parseInt($(".num").html());

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}

					//e:是否有相同的商品 新增商品 数量是1
					if(!same){
						// alert(1);
						var obj = {id: ID, num: parseInt($(".num").html())};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}

				sc_car();
				//为了阻止冒泡
				return false;
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