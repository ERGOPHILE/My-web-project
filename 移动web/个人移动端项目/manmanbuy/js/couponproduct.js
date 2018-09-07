(function(){

    var arr_img = [];
    var i = 0;//默认显示第一张
    //优惠券渲染
    var couponid = geturl().couponid;

 $.ajax({
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
        couponid:couponid||1
    },
    dataType:"json",
    success:function(info){
        
         var arr = info.result
         var str = template("tpl",info);
         $("section ul").html(str);
         arr.forEach(function(v,i){
            arr_img.push(v.couponProductImg);
        });
        $("#box_img  .img").html(arr_img[i]);   
        
    }
});
    //点击显示
    $("section").on("click","li",function(){
        $("#box_img").fadeIn(1000);
    });
    //轮播图
    //自动轮播
    function img(){
        i++;
        if(i>arr_img.length){
        i = 0;
        }
        $("#box_img  .img").html(arr_img[i]);      
        
    }
    var time = setInterval(img,1000);
    $("#prev").click(function(){
           i--;
           if(i<0){
             i=0;
           }
        $("#box_img  .img").html(arr_img[i]);    
        console.log(i);                
    });
    $("#next").click(function(){
           i++;
           if(i>arr_img.length){
             i = arr_img.length;
           }
        $("#box_img  .img").html(arr_img[i]);      
   });
      //当鼠标移入
      $("#box_img ").on("mouseenter",function(){
          clearInterval(time);
      });
      $("#box_img ").on("mouseleave",function(){
        time = setInterval(img,1000);
    });
    //点击遮盖层隐藏
    $("#box_img ").on("click",function(){
          $(this).fadeOut(1000);
    });
})();