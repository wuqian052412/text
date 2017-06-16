require(['config'],function(){
	require(['jquery','common','gdszoom'],function($,com,gdszoom){
    let $goodsdetail = $('.zs-inner');
       // 请求数据
    var guid =location.search.slice(6);
      /* console.log(guid);*/
    $.ajax({
        url:'../api/detail.php',
        dataType:'json',
        data:{
            guid:guid
        },
        success:function(res){
            showList(res);
           /*console.log(res)*/
        }
    });

    function showList(res){
            let html = res.map(item=>{
                return `<div class="zs-deal-detail">
                <div class="zs-focus">
                    <div class="zs-big-pic goods">
                        
                            <img src="${item.imgurl}" style="width:300px;height:300px;" data-big="../img/dt-max01.jpg">
                        
                    </div>
                    <div class="zoom-big" style="display:none;"></div>
                    <div class="zs-focus-thumb">
                        <div class="zs-focus-list">
                            <div class="smallList">
                                        <img src="../img/dt-min02.jpg" alt=""data-big="../img/dt-max02.jpg">
                    
                                        <img src="../img/dt-min03.jpg" alt=""data-big="../img/dt-max03.jpg">
                                    
                                        <img src="../img/dt-min04.jpg" alt=""data-big="../img/dt-max04.jpg">
                                
                                        <img src="../img/dt-min05.jpg" alt=""data-big="../img/dt-max05.jpg">
                                    
                                        <img src="../img/dt-min01.jpg" alt=""data-big="../img/dt-max01.jpg">
                                
                            </div>
                        </div>
                        <div class="zs-action clearfix">
                            <a href="#" class="zs-collect">
                                关注商品
                            </a>
                            <div class="zs-share-box">
                                <a href="#" class="zs-complain">分享</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="zs-deal-wrap">
                    商品标题
                    <h3 class="zs-commodity-title"><span class="wq">${item.name} </span>
                        <span class="subheading">${item.intro}</span>
                                </h3>
                                商品详情页
                                <div class="zs-group-box">
                                    <div class="range-logo">
                                        <a href="#" class="mall-logo">ZOL商城</a>|
                                        <a href="#" class="group-logo">
                                            团购
                                        </a>
                                    </div>
                                    <div class="group-over-time">
                                        距离结束仅剩
                                        <span class="time-num"></span>:
                            <span class="time-num"></span>:
                            <span class="time-num"></span>
                                    </div>
                                </div>
                                商品价格
                                <div class="zs-price-panel">
                                    <dl class="zs-sale-price">
                                        <dt>团 购 价</dt>
                                        <dd class="clearfix">
                                            <span class="zs-price">
                                                ￥ <em class="zp-goods-price">${item.xj_price}</em>
                                            </span>
                                            <span class="original">￥${item.yj_price}</span>
                                            <span class="save-icon">立省${item.save}元</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="zs-detail-infor">
                                    <dl class="zs-freight-a">
                                        <dt>配 送 :</dt>
                                        <dd class="clearfix">
                                            <div class="zs-freight-area">
                                    <span class="area-name">广东</span>
                                    <span>可送达， 运费0.00</span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl class="zs-evaluate">
                                        <dt>评 价 :</dt>
                                        <dd>
                                            <a href="#" id="a-buy-review">购买评价<span>1</span></a>|
                                            <a href="#" id="a-buy-record">成交记录<span>1</span></a>
                                        </dd>
                                    </dl>
                                    <dl class="zs-service-bar">
                                        <dt>服务保障:</dt>
                                        <dd class="clearfix">
                                            由 <span>绿园区当当电子产品经销部</span> 发货并承诺提供以下服务保障
                                        </dd>
                                        <dd>
                                            <ul class="clearfix">
                                                <li><a href="#">正品保障</a></li>
                                                <li><a href="#">发票保障</a></li>
                                                <li><a href="#">无忧退换</a></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                    <div class="zs-skin-inner">
                                        <div class="groupware-type-box">
                                            <div class="groupware-type">
                                                <span class="show-more">展开</span>
                                                <dl>
                                                    <dt>团购商品:</dt>
                                                    <dd>
                                                        <ul class="ware-type-list tuan clearfix">
                                                            <li class="active">团i5含笔</li>
                                                            <li>团套餐一</li>
                                                        </ul>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div class="zs-color-type clearfix">
                                                    <span>商品颜色:</span>
                                                    <span>
                                                        <ul class="ware-type-list color clearfix">
                                                            <li class="active">i5含笔</li>
                                                            <li>套餐一</li>
                                                        </ul>
                                                    </span>
                                            </div>
                                            <div class="zs-suit clearfix">
                                                    <span>套 装 :</span>
                                                    <span>
                                                        <ul class="ware-type-list type clearfix">
                                                            <li class="active">官网标配</li>
                                                        </ul>
                                                    </span>
                                            </div>
                                            <form action="#">
                                                    <dl class="zs-quantity">
                                                        <dt>购买数量:</dt>
                                                        <dd class="clearfix">
                                                            <div class="amount-widget">
                                                                <span class="zs-decrease">-</span>
                                                                <input type="text" title="请输入购买量" value="1" class="zs-goods-number">
                                                                <span class="zs-increase">+</span>
                                                            </div>
                                                            <span class="zs-part">
                                                                件(限购66件)
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <div class="zs-deal-btn clearfix">
                                                        <a href="car.html" class="zs-buy-now">立即购买</a>
                                                        <a href="#" class="zs-store-buy">加入购物车</a>
                                                    </div>
                                            </form>
                                    </div>
                                </div>
                </div>
            </div> `
            }).join('');
            $goodsdetail.html(html);
        }

    /*由于Ajax请求数据需要时间，所以获取不到上面的元素，需要用延时器延迟下面的代码执行*/
        setTimeout(function(){
            /*放大镜*/
            var detail = {
                fdj:function(){
                    $(function(){
                        $('.goods').gdszoom({
                            width:300,height:300,position:'right'
                        });

                        $('.smallList img').click(function(){
                            $('.goods img').attr({
                                'src':this.src,
                                'data-big':$(this).attr('data-big')
                            }).gdszoom({
                                position:'right'
                            });

                        })
                    });
                },

            };
            detail.fdj();

    	/*购物车列表*/
         // 获取原cookie中的值  
    	// 获取页面元素
            var $btn = $('.zs-store-buy');
            /*console.log($btn.get(0))*/
            var myCar = document.querySelector('.cart-list'); 
            var carList = myCar.querySelector('ul');
            var ssaside = document.querySelector('.ssaside');
             // 1）给按钮绑定点击事件
            var clonePrice;
            /*var qty*/
            $btn.on('click',function(){
         	// 1>复制当前商品图片(用于实现动画效果)
         	 	var Img=$('.zs-big-pic').children().eq(0);
         	 	var price=$('.zs-price');
                var price1=$('.zp-goods-price');
                var priceY=$('.original');
         	 	var title=$('.zs-commodity-title');
                var tuan= $('.tuan').find('.active');
                var color= $('.color').find('.active');
                var type= $('.type').find('.active');
                var qty =$('.zs-goods-number');
                var wq=$('.wq');
         	 	// 1>复制当前商品信息(用于实现动画效果和购物车信息)
         	 	var cloneTitle =title.clone();
         	 	clonePrice =price.clone();
         	 	clonePrice.addClass('clonePrice');
         	 	var cloneImg =Img.clone();
         	 	var cloneImg2 =Img.clone();
         	 	cloneImg2.css({'width':'50px','height':'50px'})
                cloneImg.addClass('clone-img');
                // 把复制的图片定位到与当前商品图片一致
                cloneImg[0].style.left =Img[0].offsetLeft + 'px';
                cloneImg[0].style.top = Img[0].offsetTop + 'px';
         	 	 // 把复制的图片写入页面
                document.body.appendChild(cloneImg[0]);
                 // 抛物线飞入效果
                var yspeed = -10;
                var topTarget = myCar.offsetTop + carList.offsetTop + carList.offsetHeight;
         	 
                 var timer = setInterval(()=>{
                    var currentTop = cloneImg[0].offsetTop;
                    yspeed++;
                    // 当currentTop到达目标值后，停止定时器
                    if(currentTop >= topTarget){
                        clearInterval(timer);
                    }
                    cloneImg[0].style.top = currentTop + yspeed + 'px';
                },50);

                     // 2>动画飞入效果
                 animate(cloneImg[0],{left:ssaside.offsetLeft + carList.offsetLeft,width:20,height:20},function(){
                    document.body.removeChild(cloneImg[0]);
                    var Li =document.createElement('li');

                    // 在购复制商品中添加移除按钮
                    var btnClose = document.createElement('span');
                    btnClose.classList.add('btn-close');
                    btnClose.innerHTML = '&times;';
                    Li.appendChild(btnClose);
                    Li.appendChild(cloneImg2[0]);
                    Li.appendChild(cloneTitle[0]);
                    Li.appendChild(clonePrice[0]);
                    carList.appendChild(Li);
                    // 停止top抛物线定时器
                    clearInterval(timer);
                    num();
                }); 
                    var carlist = getCookie('carlist');

                    carlist = carlist ? JSON.parse(carlist) : [];  

                    // 关键：判断当前商品是否存在cookie
                    for(var i=0;i<carlist.length;i++){
                        if(carlist[i].guid === guid){
                            carlist[i].qty++;
                            break;
                        }
                    } 
                // 商品不存cookie中
                if(i===carlist.length){              
                    var goods = {
                        guid:guid,
                        name:wq.text(),
                        price:price1.text(),
                        yuan:priceY.text(),
                        imgurl:Img.attr('src'),
                        color:color.text(),
                        tuan:tuan.text(),
                        type:type.text(),
                        qty:qty.val()
                    };
                // 把当前商品信息写入carlist
                    carlist.push(goods);
                }
                setCookie('carlist',JSON.stringify(carlist));
               /* console.log(JSON.parse(getCookie('carlist')))*/
            });
             
              // 点击按钮时，删除购物车中对应的商品
            carList.onclick = (e)=>{
                if(e.target.className === 'btn-close'){
                    var Li = e.target.parentElement;
                    carList.removeChild(Li);
                    num();
                }
            };
                    /*购物车列表数量*/
            function num(){
                var count=$('.count');
                var num=count.children().eq(0);
                var res=clonePrice.children().eq(0).text();
                var rre=$(carList).find('li').length;
               /* var rre=qty.val();*/
                var asides=$('.aside').children().children().eq(0);
                asides.html(rre);                                       
                num.html(res+'*'+rre+'='+res*rre);
            };
                /*实现点击左边栏btn收起左边栏，点击购物车，展开左边栏*/
    		var $aside=$('.aside');
    		$aside.on('click','span',function(){
    			$(this).parent().parent().animate({width:260})
    		})
    		var $h4=$('.cart-list').children().eq(0);
    		$h4.on('click','button',function(){
    			$h4.parent().parent().animate({width:50})
    		})
        	
            /*实现点击商品详情，选中该选项*/
            function show(temp){
                // 绑定事件
                temp.on('click',function(){
                    $(this).addClass('active').siblings().removeClass('active');
                })
            };
           /* 获取团购信息*/
           var wareTypeLists =$('.ware-type-list').children();
           show(wareTypeLists);

           /* 获取购买数量信息*/
           var amountWidget=$('.amount-widget');
           amountWidget.on('click','.zs-decrease',function(){
                amountWidget.children().eq(1).val(parseInt(amountWidget.children().eq(1).val())-1);
                if(amountWidget.children().eq(1).val()<0){
                    amountWidget.children().eq(1).val(0);
                }
           }).on('click','.zs-increase',function(){
                amountWidget.children().eq(1).val(parseInt(amountWidget.children().eq(1).val())+1);
                if(amountWidget.children().eq(1).val()>66){
                    amountWidget.children().eq(1).val(66);
                }
           });

       },50);

    });
});