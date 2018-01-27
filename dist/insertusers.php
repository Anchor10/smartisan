<?php 
	header("content-type:text/html;charset='utf-8'");
	//声明编码格式
	
	//1、接受用户提交的学生信息
	//$_POST全局数组，这个数组里存放着所有通过post请求提交上来的数据。
	// print_r($_POST);
	//2、将所有的数组中信息提取出来
	
	$phone = $_POST["phone"];
	$password = $_POST["password"];


	//3、登陆mysql
	/*
		mysql_connect("localhost", "root", 123456);

		第一个参数：是数据库的主机名


	 */
	$con = mysql_connect("localhost", "root", 123456);
	//判断是否成功
	if(!$con){
		echo "error";
		exit;
	}else{
		echo "success";
	}

	//4、选择数据库名字
	mysql_select_db("smartisan_user");

	//5、拼接sql语句
	$sql = "INSERT INTO smartisan_user VALUES('$phone','$password');";

	//6、将sql语句发给数据库，执行得到结果
	$is_ok = mysql_query($sql);

	if($is_ok == true){
		echo "success";
	}else{
		echo "error";
	}
	
 ?>