//此js为公共的方法
//基于jq
//geturl() 专门用来截取地址栏的参数的
    function geturl(){
            //地址栏传参
            // location.seacrch 可以获取html后面的字符
            // decodeURL(location.seacrch)可以解析地址栏中传的中文
            // var key  = decodeURI(location.search);
                //  var key = "?name=liuming&age=18";  
                var key = decodeURI(location.search);
                  
                //判断地址栏是否有值没有则不执行下面的方法
                  if(!key){
                     return;
                  }
                key = key.split("?")[1];//[1]截取？后面的name=liuming&age=18
                key = key.split("&")//用=分开放在数组里 ["name=liuming", "age=18"]
                //创建一个对象存入数组中的数据
                var obj = {};
                //遍历数组
                key.forEach(function(v,i){
                    obj[v.split("=")[0]]=  v.split("=")[1]
                
                });
                //返回对象
                return obj;
                                 
    }

// 用来实现rem 效果
    //此方法用来实时获取屏幕宽度来改变rem 的大小
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

//点击返回顶部 滚动条慢慢上去
  $("#btn_top").on("click",function(){
    $('html,body').animate({ scrollTop: '0px' }, 1000); 
      return false; 
  });


 