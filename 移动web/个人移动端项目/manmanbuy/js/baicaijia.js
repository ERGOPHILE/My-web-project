(function(){


    //白菜内容商品标题渲染

    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function(info){
             var str = template("title_tpl",info);
             $(".n_title ul").html(str);
        }
    });
    //白菜内容商品内容渲染
       page(0);//默认渲染的
      function page(id){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data:{
                titleid :id
            },
            dataType:"json",
            success:function(info){
                          
                 var str = template("content_tpl",info);
                 $(".content ").html(str);
                 $(".bar span").each(function(i,v){
                   setTimeout(function(){
                    var num = Math.round(Math.random()*1)                       
                    $(v).css("width","."+num+"rem"); 
                    console.log("."+"rem");
                    
                      
                   },1000);        
                 });
            
                                     
                  
            }
        });
      }
    //点击tab栏切换
    $(".n_title ul ").on("click","a",function(){
        var id = $(this).data("id");
        $(this).parent().siblings().removeClass("count");
        $(this).parent().addClass("count");
           page(id);  
    });

    //左右移动
     //touchstart:手指放到屏幕上时触发
        //touchmove:手指在屏幕上滑动式触发（会触发多次）
        //touchend:手指离开屏幕时触发
        //touchcancel:系统取消touch事件的时候触发,比如电话    

        var box = document.querySelector('.box');
        //绑定touch事件
        //通过事件对象event 获取事件相关的数据
        //在事件对象中，有三个属性都可以获取事件坐标值的数据
        //Touches         记录当前屏幕上所有触点的数据
        //targetTouches   只记录目标元素上触屏的数据
        //changeTouches   记录触屏状态改变时数据 
        //如果要获取手指离开屏幕是坐标值，只有changedTouches中会记录，其他属性来手指离开时已经销毁；
        //项目中直接使用tragetTouches来获取触点数据即可；
        //pageX   相对于页面的坐标值
        //clientX 相对于可视区域坐标值
        //screenX 相对于屏幕坐标值
        
     
         var box = document.querySelector(".n_title");
         var ul  = document.querySelector(".n_title ul");
         var min_X = box.offsetWiht -ul.offsetWiht;               
          //初始数据
          var start_X = 0;
          var move_X = 0;
          var X = 0;
          var ul_X = 0;
          //触屏开始
      
          
          box.addEventListener("touchstart",function(e){
                 start_X = e.targetTouches[0].clientX;
          });
          //触屏移动
          box.addEventListener("touchmove",function(e){
                 move_X = e.targetTouches[0].clientX;
                 X =  move_X-start_X ;        
                 ul.style.transition = 'none';
                 ul.style.transform = "translateX("+(X + ul_X)+"px)";                     
         });
         //触屏结束
         box.addEventListener("touchend",function(){
                //重新初始ul此时的位置
                ul_X += X;
                if(ul_X > 0){
                    ul_X = 0;
                }else if(ul_X < min_X){
                    ul_X = min_X;
                }  

                if(ul_X < -320){
                    ul_X = 0;
                }else if(ul_X > min_X +100){
                    ul_X = min_X;
                }             
                ul.style.transition = "transform 0.7s";
                ul.style.transform = "translateX("+ul_X+"px)";                
                start_X =  0;
                X = 0;
                move_X = 0;
       });

  
})();