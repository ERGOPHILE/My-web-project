(function(){
    
    //发送ajax请求主要用来获取首页上面菜单栏数据
    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        dataType:"json",
        success:function(info){; 
              var str = template("n_tpl",info);
              $("nav ul").html(str);
        }
    });
    //单击更多现实更多数据
    $("nav").on("click","li.more",function(){
            //通过移除类来改变菜单栏现实和隐藏
            // nextAll()后面所有兄弟元素
            $("nav li.nav.more").nextAll().toggleClass("hide")            
    });
   
    //用来获取折扣商品的列表信息
    $.ajax({
         url:'http://127.0.0.1:9090/api/getmoneyctrl',
         dataType:"json",
         success:function(info){               
                var str = template("s_tpl",info);
              $(".s_conter ul").html(str); 
         }
    });
})();