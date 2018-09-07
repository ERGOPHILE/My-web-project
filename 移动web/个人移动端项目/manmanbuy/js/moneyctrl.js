(function(){
    var page =0;//第一页
    var num//页数;
    var flage = true;//判断是否创建下拉选择页
    
     function size(){
         //一页的个数
         var page = $(".data_id").data("page");
         //总条数
           var pagesize = $(".data_id").data("pagesize");
             //页数   
            var size = Math.ceil(pagesize/page);
          return size;
     }
         list(0);
      function list(page){
           //商品内容渲染
       $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"json",
         data:{
            pageid:page
         },
        success:function(info){                 
          var str = template("tpl",info);
          $("nav ul").html(str); 
         var  num = size();       
               //创建页码 单击上一页
               $(".btn_page").html(page+1+"/"+num+"");   
               //动态创建单击按钮页数
            if(flage){
            for(var i= 1; i<= num;i++){
                $(".select").append("<li data-num="+i+">"+i+"/"+num+"</li>");                                  
              }
            } 
            
             //上一页
      $(".prev").click(function () {
        flage = false; //阻止创建下拉分页                                                         
        if (page <1) {
          page = 1;
        } else {
          page--;
          $(".btn_page").html(page + "/" + num + "");
           list(page);
        }
      });
      // 下一页
      $(".naxt").click(function () {
        flage = false; //阻止创建下拉分页                             
        if (page > num) {
          page = num;
        } else {
          page++;
          $(".btn_page").html(page + "/" + num + "");
          list(page);
        }
      });
      //点击页数直接跳转
      $(".select").on("click", "li", function () {
        var num = $(this).data("num");
        list(num-1);
      });
        }
           
         }); 
         
      }
   
    
     //点击下来选择页数
  $(".btn_page").click(function () {
    flage = false;
    $(".select li").fadeToggle();
  });  
})();



   
