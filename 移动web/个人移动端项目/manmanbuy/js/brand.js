(function(){

      //获取品牌id
      var brandtitleid = geturl().brandTitleId;
    //十大品牌排行,列表渲染
 $.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
        brandtitleid:brandtitleid
    },
    dataType:"json",
    success:function(info){
         console.log(info);
         var str = template("list_tpl",info);
         $(".nav ").html(str);
    }
});
//平板电视产品销量排行渲染

$.ajax({
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
        brandtitleid:0
    },
    dataType:"json",
    success:function(info){
         console.log(info);
         var str = template("content_tpl",info);
         $(".n_list").html(str);
         //获取第一个商品的id根据商品id获取该商品的评论信息然后渲染到页面上
         var  productid = $(".n_list li").eq(0).data("id");
         var  img = $(".n_list li").eq(0).data("img");
         var title = $(".n_list li").eq(0).data("title");
         
         // //评论渲染
        $.ajax({
            url:"http://127.0.0.1:9090/api/getproductcom",
            data:{
                productid :productid
            },
            dataType:"json",
            success:function(info){
                console.log(info)     
                 var str = template("comments_tpl",info);
                 $(".comments  ul").html(str);
                 $(" .co_top .l_img").html(img);
                 $(" .co_top .l_p").html(title);
                 
            }
        });
    }
});




})();