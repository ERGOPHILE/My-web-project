(function(){

    var shopid;//店铺
    var areaid;//地区
    //导航栏店铺信息渲染
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshop",
        dataType:"json",
        success:function(info){
     
            var str = template("name_tpl",info);
            $(".select .name ul").html(str);
             //店铺
            $(".select .name ul").on("click","a",function(){
                  shopid =  $(this).data("shopid"); 
                  var str = $(this).html();
                  $(" .n_l li:first-child a").html(str)                 
                     page(shopid,areaid);  
                 
                   $(this).parent().parent().parent().toggleClass("show");
                          
             });
        }
    });
     //导航栏地址信息渲染
     $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        dataType:"json",
        success:function(info){
            console.log(info);
            var str = template("city_tpl",info);
            $(".select .city ul").html(str);
            $(".select .city ul").on("click","a",function(){
                areaid =  $(this).data("areaid"); 
                var str = $(this).html();
                    str = str.split("（")[0];                
                $(" .n_l li:nth-child(2) a").html(str)    
                 page(shopid,areaid);  
                 $(this).parent().parent().parent().toggleClass("show");                 
                   
           });
        }
    });
    
    
 //点击让下拉框显示隐藏
   $(".n_l li a").click(function(){       
          var s_li = $(this).data("li")
          $(".select").find("."+s_li).siblings().removeClass("show")
          $(".select").find("."+s_li).toggleClass("show");
   });
     

     //商品渲染
        page(0,0);
       function page(areaid,shopid){
        
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsproduct",
            data:{
                areaid :areaid||0,
                shopid :shopid||0
            },
            dataType:"json",
            success:function(info){
                console.log(info);
                var str = template("content_tpl",info);
                $("section ul").html(str);
            }
        });
       }
    
})();