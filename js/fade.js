//AMD
/*
	循环广告窗口实现方法：

	1、图片的淡入淡出

*/



define(["jquery", "jquery-cookie"], function($){
	$(function(){
		$.ajax({
			url: "../data/banner.json",
			type: "GET",
			success: function(res){
				var html = "";

				for(var i = 0; i < res.length; i++){
					html += `<li><a href=""><img src="${res[i].img}"/></a></li>`
				}
				$(".banner ul").html(html);
				
			}
		})
	})
	var fade = function(){
			var index = 0;
			function change(index){
				// 一个淡入，其他淡出
				$("#play ul li").eq(index).siblings().stop(true,true).animate({opacity:0},1000);
				$("#play ul li").eq(index).stop(true,true).animate({opacity:1},1000);

				// 小红点切换
				$("#play ol li").eq(index).addClass("bg_white").siblings().removeClass('bg_white');

			}

			//点击切换
			$("#play ol").on("click","li",function(){
				var _index = $(this).index();
				index = _index;
				change(index);

			}); 
			
			var intimer = function(){
				index++;
				index = index % $("#play ul li").size();
				change(index);
			}

			var timer = setInterval(intimer,3000);
			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(intimer,3000);
			})

			return "这里是循环广告";
	}
	return {
		fade: fade
	}
})












