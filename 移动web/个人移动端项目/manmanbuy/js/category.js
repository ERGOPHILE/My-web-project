(function(){
    var falg = true;//用于显示和隐藏商品列表
    //商品分类标题渲染
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        dataType:'json',
        success:function(info){         
           var str = template("title_tpl",info);
           $(".nav").append(str);      
        }
    });
    //商品分类列表 -->
    //单击隐藏显示         
    $(".nav").on("click",".title",function(){            
        var id = $(this).data("id");        
        $(this).toggleClass("show");
        $("a.show").next().toggleClass("shows");             
            $.ajax({
                url:"http://127.0.0.1:9090/api/getcategory",
                data:{
                    titleid:id
                },
                dataType:'json',
                success:function(info){                                    
                var str = template("list_tpl",info);                
                //    $(this).siblings().html(str);
                   $(".navs").eq(id).find("ul").html(str);
                   $(".navs").eq(id).siblings().find("ul").hide();                                                           
                }
            }); 
            if(falg){
                $(".navs").eq(id).find("ul").show();
                falg = false;    
               }else{
                $(".navs").eq(id).find("ul").hide();
                falg = true;               
               }   
   
        });   
               
})();