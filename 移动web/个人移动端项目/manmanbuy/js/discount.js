(function(){
       var productid = geturl().productId;

    //渲染文章标题内容
    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        data:{
            productid:productid
        },
        dataType:"json",
        success:function(info){          
             var str = template("tiele_tpl",info);
              $(".nav_sesction").html(str);
        }
    });
})();