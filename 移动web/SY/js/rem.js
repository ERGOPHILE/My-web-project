//此js 用来实时监听改变页面的宽度


 function rem(w){
     var width = document.querySelector("html").clientWidth;
        if(width >750){
            width = 750;
        }
        if(width <320){
              width = 320;
        }
         document.querySelector("html").style.fontSize = width/w*100 +"px";
 }
    rem(750);
 window.addEventListener("resize",function(){
             rem(750);
 });