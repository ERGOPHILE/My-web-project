(function(){

       //截取商品id
       var  productId = geturl().productId;
       //标题名称
       var url = decodeURI(location.search);
        //分类标题       
        var   name = url.split("&title=")[1];
         $("#name").html(name +"   >");
         //二级标题      
        var   title  = url.split("&")[1];
              title  = title.split("=")[1];
              title  = title.split(" ")[0];
            $("#title").html(title);

    //商品详情渲染
    $.ajax({

        url:"http://127.0.0.1:9090/api/getproduct",
        data:{
            productid :productId
        },
        dataType:"json",
        success:function(info){        
               var str = template("list_tpl",info);
               $("section .s_top").html(str);
               var id = $(".s_top .t_top").data("id"); 
               var categoryId = $(".s_top .t_top").data("categoryid");                 
               var href = $("#name").attr("href","productlist.html?categoryId="+categoryId);                             
                //评价渲染
                $.ajax({
                    url:"http://127.0.0.1:9090/api/getproductcom",
                    data:{
                        productid :id
                    },
                    dataType:"json",
                    success:function(info){  
                        console.log(info);
                                 
                          var str = template("cotent_tpl",info)
                          $(".s_bottom ul").html(str);
                          
                    }
                });
        }
    });
   
})();