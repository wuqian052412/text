require(['config'],function(){
	require(['jquery','common'],function($,com){
    	var car={
    		cookie:function(){
    	/*
				1）获取cookie
				2）把cookie中的商品信息写入#carList
				3）计算总价
				4）清空购物车
					清除cookie
			 */
			 // 1）获取cookie
				var carlist = getCookie('carlist');

				// 把json字符串转换成js对象
				carlist = carlist ? JSON.parse(carlist) : [];
				var listNum=$('.list-Num');
				var res =carlist.map(function(item){
					/*totalPrice += item.price * item.qty;*/
					/*console.log(item.guid)*/
					return `<li guid="${item.guid}">
		 						<p class="shop"><input type="checkbox" checked>店铺: <a href="#">汇通数码风暴专营店</a></p>
	 							<div class="detail">
	 								<ul class="clearfix">
	 									<li class="s-info">
		 									<input type="checkbox">
		 									<a href="#" class="pic"><img src="${item.imgurl}" alt=""></a>
											<div class="info-box">
		 										<a href="#"><p class="name">${item.name}</p></a>
		 										<p class="color">颜色: <span>${item.color}</span></p>
		 										<p class="tao">套装: <span>${item.type}</span></p>
		 									</div>
	 								 	</li>		 											 								
	 									<li class="sprice"><span class="yj">${item.yuan}</span><span class="xj">${item.price}</span></li>
	 									<li class="s-amount">
	 										<div class="buy-num">
	 											<a class="jian">-</a>
	 										<input type="text" value="${item.qty}">
	 										<a class="jia">+</a>
	 										</div>
	 										
	 									</li>
	 									<li class="s-agio">
	 										<span class="tuan">团购</span>
	 										<span class="time">14小时15分42秒</span>
	 									</li>
	 									<li class="price"><span class="price1">${item.price}</span></li>
	 									<li class="del">
		 									<a href="#"><span>移入收藏夹</span></a>
		 									<a href="#"><span>删除</span></a>
	 									</li>
	 								</ul>
	 							</div>
		 					</li>`
				}).join(''); 
				listNum.html(res);

	    			// 删除商品
				var dels =$('.del').children().eq(1).find('span');
				dels.on('click' ,function(){
					window.location.href = "../html/car.html";
					var currentLi = $(this).parents('.detail').parent('li');

					var guid = Number(currentLi.attr('guid'));
					/*console.log(guid)*/
					for(var i=0;i<carlist.length;i++){
						if(carlist[i].guid == guid){
						// 删除数组中对应的商品
							carlist.splice(i,1);
							currentLi.remove();	
						// 重新写入cookie
							setCookie('carlist',JSON.stringify(carlist));
							break;
						}
					}
						
				})
	    	},

			/* 获取购买数量信息*/
			num:function(){
			    var buyNum=$('.buy-num');
			    var price=$('.to-price');
		       	buyNum.on('click','.jian',function(){
		           $(this).parent().children().eq(1).val(parseInt( $(this).parent().children().eq(1).val())-1);
		            if( $(this).parent().children().eq(1).val()<0){
		                 $(this).parent().children().eq(1).val(0);
		            }		           
		       	}).on('click','.jia',function(){
		            $(this).parent().children().eq(1).val(parseInt($(this).parent().children().eq(1).val())+1);
		            if($(this).parent().children().eq(1).val()>66){
		                $(this).parent().children().eq(1).val(66);
		            }
		       });
				
			},


			 /*获取购物车商品个数*/
			 listNum:function(){
				var listNm=$('.car-status').children().find('.number');
				var rre=$('.list-Num').children('li').length;
				listNm.html(rre);
			},

			// 计算总价
			total:function(){
				var $checkbox = $('.s-info').find('input');
				var totle = $('.to-price');
				var res=0;
				$checkbox.on('click',function(){
					if(this.checked){

						 res += $(this).parent().next().children().eq(1).text()*$(this).parent().next().next().find('input').val();
						totle.html(res);
					}else{
						res -= $(this).parent().next().children().eq(1).text()*$(this).parent().next().next().find('input').val();
						totle.html(res);
					}
				})
			},

			// 删除商品
			/*del:function(){
				var dels =$('.del').children().eq(1).find('span');
				dels.on('click' ,function(){
					
				var currentLi = $(this).parents('.detail').parent('li');		
				currentLi.remove();	
				})
			}*/
    	}
    	car.cookie();
    	car.num();
    	car.listNum();
    	car.total();
    });
});