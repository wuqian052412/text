<?php
	// 引入其他php文件
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// SQL语句
	$sql = "select username from login";

	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	
	// 获取关联数组的键值，并保存到一个新的数值数组中
	for($i=0;$i<count($rows);$i++){

		foreach ($rows[$i] as $key) {
			 // print_r($key);
			$arr[$i] = $key; 
		}
	}
	

	// 查看从前端获取到的用户名与后台数据是否重复
	// print_r($arr[2]);
	if(in_array($username, $arr)){
		echo '已经存在';
		/*print_r($arr);*/
	}else{
		
		// md5加密
		$password = md5($password);

		$sql = "insert into login(username,password) values('$username','$password')";

		// 获取查询结果
		$res = $conn->query($sql);

		if($res){
			echo "ok";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		//关闭连接
		$conn->close();

}
?>