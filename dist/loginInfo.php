

<?php 
	header("content-type:text/html;charset='utf-8'");
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
	$sql = "SELECT * FROM smartisan_user WHERE phone='$phone' and password='$password';";

	//6、发给数据库，提取数据
	$res = mysql_query($sql);
	if($result = mysql_fetch_array($res)){
		echo('登录成功');
	}else{
		exit('登录失败');
	}

	// echo "<pre>";
	// var_dump($res);
	//7、获取到数据，展示数据，通过表格展示
	while($row = mysql_fetch_assoc($res)){
		$phone = $row['phone'];
		$password = $row['password'];
	}
	/*$phone = $row['phone'];
	$password = $row['password'];
	
	echo '<table border="1px" width="400px">';
	echo "<tr><th>id</th><th>name</th><th>math</th><th>english</th><th>chinese</th></tr>";
	while($row = mysql_fetch_assoc($res)){
		echo "<tr><td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['math']}</td><td>{$row['english']}</td><td>{$row['chinese']}</td></tr>";
	}
	echo "</table>";*/
 ?>