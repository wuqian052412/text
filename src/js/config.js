require.config({
  // baseUrl : "js",//
  //解决缓存问题
	urlArgs: 'v='+ Date.now(),
    // 配置别名
    // 使用短文件名
    paths : {
      // 这里的路径也是基于baseURl
      "jquery": "../lib/jquery-3.2.1",
      'gdszoom': '../lib/jquery-gdszoom/jquery.gdszoom',
      'TTCarousel': '../lib/jquery-TTCarousel/jquery-TTCarousel',
      'common':'../js/common',
      'lazyload':'../lib/jquery.lazyload.min',
      'validate':'../lib/jquery-validate/jquery.validate',
      'messages':'../lib/jquery-validate/localization/messages_zh'
    },
    shim:{
      'gdszoom':['jquery'],
       'TTCarousel':['jquery'],
       'common':['jquery'],
       'lazyload':['jquery'],
       'validate':['jquery'],
       'messages':['validate']
    }
});