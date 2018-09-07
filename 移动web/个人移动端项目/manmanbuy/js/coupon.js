
(function(){


    //渲染优惠券页面

 $.ajax({
    url:"http://127.0.0.1:9090/api/getcoupon",
    dataType:"json",
    success:function(info){
         console.log(info);
         var str = template("tpl",info);
         $("section ul").html(str);
    }
});
})();