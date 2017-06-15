;require(['config'],function(){
	require(['jquery'],function($){
		// 阅读并同意必须勾选
		var $checkbox = $(':checkbox');
		var $btn = $('button');
		$btn.attr('title','注册前必须同意协议');
		$checkbox.on('click',function(){
			if(this.checked){
				$btn.prop('disabled',false).removeClass('no');
				/*$btn.css({'background-color':'red'});*/
			}else{
				$btn.prop('disabled',true).addClass('no');
			}
		});


		var $btn = $('.register-btn');
		// 点击提交传递信息到后台
		$btn.on('click',function(){
			
			console.log(555)
			var $username = $('#number').val();
			var $password = $('#password').val();
			var $sure = $('#repassword').val();

			if($password != $sure){
				$('#sure').val('');
				$('#password').val('');
				alert('两次密码输入不一致，请重新输入');

			}else if($username == '' || $password == ''){
				$checkbox.prop('checked',false);
				$btn.prop('disabled',true).addClass('no');
				alert('用户名密码不能为空值');
			}
			else{

				$.ajax({
					url:'../api/reg.php',
					data:{
						username:$username,
						password:$password
					},
					success:function(res){
						if(res === 'ok'){
							alert('恭喜您注册成功，赶紧登陆吧！');
						}else if(res == '已经存在'){
							alert('用户名已经存在，请另起一个用户名');
							$(':input').val('');
						}
					}
				});
			}

		})
	});
});