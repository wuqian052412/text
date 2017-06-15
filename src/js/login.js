/*require(['config'],function(){
	require(['jquery'],function($){
		// 传递用户信息到后台
		$('#btnReg').on('click',function(){
			$.ajax({
				url:'../api/reg.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					console.log(res);
					if(res === 'ok'){
						alert('注册成功')
					}
				}
			});
		});
	});
});*/




;require(['config'],function(){
	require(['jquery'],function($){
			var $btn = $('.login-layer-btn');
		$btn.on('click',function(){
			$btn.css({'background-color':'red'});
			var $username = $('#username').val();
			/*console.log($username)*/
			var $password = $('#password').val();
			/*console.log($password)*/
			$.ajax({
				url:'../api/login.php',
				data:{
					username:$username,
					password:$password
				},
				success:function(res){
					if(res === 'ok'){
						// alert(666);
						location.href = '../index.html';
					}else{
						alert('用户名或密码错误，请重新输入');
						$('#username').val('');
						$('#password').val('');
					}
				}
			})

		});




	});
});