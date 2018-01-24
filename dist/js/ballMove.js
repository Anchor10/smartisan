//遵从AMD
define(["jquery", "parabola"], function($){

	//node起始的位置的购物车按钮
	function ballMove(node){
		//抛物线运动
		$("#ball").css({
			display: "block",
			left: $(node).offset().left,
			top: $(node).offset().top
		})

		var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
		var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;

		//【注】配置参数
		var bool = new Parabola({
			el: "#ball",
			targetEl: null,
			offset: [offsetX, offsetY],
			curvature: 0.0002,
			duration: 400,
			callback: function(){
				$("#ball").css("display", "none");
			}
		})
		//启动
		bool.start();
	}
	return {
		ballMove: ballMove
	}
})
















