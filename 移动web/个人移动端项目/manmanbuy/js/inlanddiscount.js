(function(){


    //折扣详情渲染
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        dataType:"json",
        success:function(info){
             console.log(info);
             var str = template("tpl",info);
            $("section ul").html(str); 
        }
    });
})();