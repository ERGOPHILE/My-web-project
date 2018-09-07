// 实时获取屏幕尺寸 设置rem
// 在设计稿640px 情况 ，设置1rem = 100px 
    // 推算1rem 在其他屏幕 取值 
    // 根据媒体查询检测当前屏幕宽度，根据宽取设置rem的值   
    //当前值 = 当前屏幕宽度/750*100
    //design 设计稿宽
    (function(){
        function getRem(design){
            //  获取当前屏幕宽度
            var width=window.innerWidth;
            if(width>design){
                width=design;
            }
            if(width<320){
                width=320;
            }
            // 动态设置rem的值
            var size = width/design*100+"px";

            document.querySelector('html').style.fontSize=size;
            
            }
            getRem(750);
            window.onresize=function(){
                getRem(750);
            }
    })();