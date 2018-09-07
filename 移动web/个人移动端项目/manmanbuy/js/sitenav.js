(function(){


    //白菜内容商品标题渲染

 $.ajax({
    url:"http://127.0.0.1:9090/api/getsitenav",
    dataType:"json",
    success:function(info){
         console.log(info);
         var str = template("tpl",info);
         $("section div").html(str);
    }
});
})();