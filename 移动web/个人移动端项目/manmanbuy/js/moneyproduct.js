(function(){

         //获取首页地址栏传来的商品id
           var productid = geturl().productId;          
       //渲染文章标题内容
       $.ajax({
           url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
           data:{
            productid :productid||1
           },
           dataType:"json",
           success:function(info){            
                var str = template("tiele_tpl",info);
                 $(".nav_sesction").html(str);
           }
       });
})();