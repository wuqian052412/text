;require(['config'],function(){
	require(['jquery','validate','messages'],function($,validate,messages){
		
		// 阅读并同意必须勾选
		var $checkbox = $(':checkbox');
		var $btn = $('.register-btn');
		$btn.attr('title','注册前必须同意协议');
		$checkbox.on('click',function(){
			if(this.checked){
				$btn.prop('disabled',false).removeClass('no');
			}else{
				$btn.prop('disabled',true).addClass('no');
			}
		});

		$('form').validate({
                // 验证规则
                rules:{
                    username:{
                        required:true,
                        rangelength:[6,12]
                    },
                    password:{
                        required:true,
                        rangelength:[6,12]
                    },
                    email:{
                        email:true
                    },
                    mobile:{
                        number:true
                    }
                },

                // 自定义提示
                messages:{
                    username:{
                        required:'这是必填项'
                    }
                }
            });

		/*var $btn = $('.register-btn');*/
		// 点击提交传递信息到后台
		$btn.on('click',function(){
			
			var $username = $('#number').val();
			var $password = $('#password').val();
			var $sure = $('#repassword').val();

			if($password != $sure){
				$('#repassword').val('');
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
							var mas =$('.register-form').find('input');
							$(mas).val('');
						}
					}
				});
			}

		});

		 
	});
});