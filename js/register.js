define(["jquery", "jquery-cookie"], function($){
	var register = function(){
		$(function(){
			//手机号检测
			$("#phone_num").blur(function(){
				//<2>检测手机号码长度是否为11；
				if($("#phone_num").val().length != 11){
					$(".phone_error").css("display","block");
				}else{
					$(".phone_error").css("display","none");
				}
			})
			//密码检测 
			$("#password").blur(function(){
				if($("#password").val().length < 6 || $("#password").val().length > 16){
					$(".password_error").css("display","block");
				}else{
					$(".password_error").css("display","none");
				}
			})
			//密码确认
			$("#diff").blur(function(){
				if($("#diff").val() != $("#password").val()){
					$(".diff").css("display","block");
				}else{
					$(".diff").css("display","none");
				}
			})


	})
	}
	
	
	return {
		register:register
	}
})