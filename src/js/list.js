require(['config'],function(){
	require(['jquery','common','TTCarousel','lazyload'],function($,com,Carousel,lazy){

		/*console.log(lazyload)*/
		$('.banner').TTCarousel({
				width:740,
				height:290,
				imgs:['../img/01.jpg','../img/02.jpg','../img/03.jpg'],
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

		let $goodslist = $('.commodity-list');

		// 请求数据
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			/*data:{
				page:pageNo,
				qty:qty
			},*/
			success:function(res){
				showList(res);

				/*// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str);*/
			}
		});

		
		function showList(res){
			let html = res.map(item=>{
				return `
					<li class="commodity-item">
				<a href="detail.html?guid=${item.id}" class="commodity-item-link">
					<div class="item-pic">
						<div class="pic-img"><img data-original="${item.imgurl}" class="lazy"></div>
					</div>
					<div class="item-info">
						<div class="item-desc">
							<p class="item-name">${item.name}</p>
							<span class="item-intro">${item.intro}</span>
						</div>
						<div class="item-detail clearfix">
							<div class="item-detail-left">
								<div class="item-price">
									<span class="xj-price">
										<em>￥</em>
										<span>${item.xj_price}</span>
									</span>
									<span class="yj-price">
										<em>￥</em>
										<span>${item.yj_price}</span>
									</span>
								</div>
								<span class="is-price">
									立省
									<span class="save">${item.save}</span>
									元
								</span>
							</div>
							<div class="item-btn">
								<span class="item-btn-con">马上抢</span>
							</div>	
						</div>
					</div>
					<div class="show-time">
						<div class="item-time-con clearfix ">
							<span class="countdown">
								剩余:
								<em class="day">1</em>天
								<em class="hour">03</em>时
								<em class="minute">39</em>分
								<em class="second">50</em>秒
							</span>
						</div>
					</div>
				</a>
			</li>
				`
			}).join('');
			$goodslist.html(html);
			//设置懒加载，引入懒加载插件
			$('.lazy').lazyload({effect:'slideDown',threshold:10});
		}


	});
});
