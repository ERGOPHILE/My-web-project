(function(){
 
            //轮播图继续自动轮播
            $('.carousel').carousel({
                interval:3000
            })
    //定义手指初始位置
    var startX = 0;
    var move =0;
    var x = 0;
    $(".carousel").on("touchstart",function(e){
            //关闭轮播图
            $(this).carousel("pause");
            startX = e.originalEvent.targetTouches[0].clientX;           
    });
    $(".carousel").on("touchmove",function(e){
        //关闭轮播图    
        moveX = e.originalEvent.targetTouches[0].clientX;  
        x = moveX - startX;         
    });
    $(".carousel").on("touchend",function(e){
             if(x>0){
                $(this).carousel("prev");
             }else{
                $(this).carousel("next");                 
             }
              //轮播图继续自动轮播
              $('.carousel').carousel('cycle')
                 startX = 0;
                 move =0;
                 x = 0;
    });
})();