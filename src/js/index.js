require(['config'],function(){
	require(['jquery','common','TTCarousel'],function($,com,Carousel){

		var username =location.search.slice(10);
		var $deng =$('.zc-login').find('a');
		$deng.html(username);
		$('.banner').TTCarousel({
				width:740,
				height:290,
				imgs:['img/01.jpg','img/02.jpg','img/03.jpg'],
			});
		$('.hot-banner').TTCarousel({
				width:838,
				height:218,
				imgs:['img/tb01.jpg','img/tb02.jpg','img/tb03.jpg'],
			});

			function show(temp,res){
				// 绑定事件
				temp.on('mouseenter',function(){
					res.show();
					temp.addClass('active');
				}).on('mouseleave',function(){
					res.hide();
					temp.removeClass('active');
				});
			}

				//首页head的手机商城tab切换
			var $zc_mobile = $('.zc-mobile');
			var $zc_mobile_bd = $('.zc-mobile-bd');
				show($zc_mobile,$zc_mobile_bd);

				//首页head的联系客服tab切换
			var $kefu = $('.lianxikefu');
			var $zc_service_tel = $('.zc-service-tel');
				// 绑定事件
				show($kefu,$zc_service_tel);

				//首页head的买家中心tab切换
			var $zc_my_center = $('.zc-my-center');
			var $zc_my_center_bd = $('#zc-my-center-bd');
				show($zc_my_center,$zc_my_center_bd);

			//首页地址tab切换
			var $city_ocation = $('.city-location');
			var $city_list = $('.city-list');
				// 绑定事件
				$city_ocation.on('mouseenter',function(){
					$city_list.show();
				}).on('mouseleave',function(){
					$city_list.hide();
				});
			//首页商品分类tab切换
			var $menu_nav_containers = $('.menu-nav-container').children('.tb');
				var index = 0;
			for(var i=0;i<$menu_nav_containers.length;i++){
				$menu_nav_containers.eq(i).on('mouseenter',function(idx){
						
						$(this).addClass('active');
						$(this).children().eq(2).show()
				}).on('mouseleave',function(idx){
					$(this).children().eq(2).hide();
					
					$(this).removeClass('active');
				})
			}

				//首页1楼商品分类tab切换
				var $tabs = $('.tab').children('li');
				var $items = $('.contain').children('li');
				var index = 0;
			
		for(var i=0;i<$tabs.length;i++){
			$tabs.eq(i).on('mouseenter',function(){
				var index = i;
				console.log(index)
				$(this).addClass('cur').siblings().removeClass('cur');
				/*$items.eq(index).show().siblings().hide();
					*/
			})
		}

		/*banner块*/
		var main_lists =$('.main-list').children().find('.pic');
		for(var i=0;i<main_lists.length;i++){
			main_lists.eq(i).on('mouseenter',function(){
				console.log($(this))
				$(this).animate({right:10});
			}).on('mouseleave',function(){
				$(this).animate({right:0});
			})
		}

		/*全国团购时间*/
		var $h =$('.countdown').children().find('.h');
		var $m =$('.countdown').children().find('.m');
		var $s =$('.countdown').children().find('.s');
		/*console.log($h)*/
		// 1）设置秒杀活动的开始时间startTime
		var startTime = Date.parse('2017-6-19 14:54:59');
		var timer=setInterval(showtime,1000);
		showtime();
		function showtime(){
			var now=new Date();
			var offset = Math.floor((startTime - now)/1000);
			// 计算剩余时间（时、分、秒）
			var secLeft = offset%60;
			var minLeft = Math.floor(offset/60)%60;
			var hourLeft = Math.floor(offset/60/60);
			// 补0操作
			secLeft = secLeft<10 ? '0' + secLeft : secLeft;
			minLeft = minLeft<10 ? '0' + minLeft : minLeft;
			hourLeft = hourLeft<10 ? '0' + hourLeft : hourLeft;
			$h.text(hourLeft);
			$m.text(minLeft);
			$s.text(secLeft);
			// 4）到达秒杀时间后
			if(offset<=0){
				/*// * 隐藏倒计时
				timeLeft.style.display = 'none';
*/
				// 清除定时器
				clearInterval(timer);
			}
		}



		///////////////////////////////////////
		
		/*吸顶菜单*/
			var $search_layer =$('.search-layer');
			$(window).on('scroll',function(){
				var $scTop = window.scrollY;
				if($scTop >= 800){
					$search_layer.show();
				}else if(window.scrollY <= 800){
					$search_layer.hide();
				}
			})
		///////////////////////////////////////	





	})
})
