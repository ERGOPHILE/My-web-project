(function(){

    var falg = true;//用于显示和隐藏商品列表

    //白菜内容商品标题渲染

 $.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    success:function(info){
         var str = template("list_tpl",info);http:
         $(".nav ").html(str);
         console.log(info);
         
    }
 });
  
         
})();