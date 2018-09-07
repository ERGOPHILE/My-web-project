//接口用来创建页数 调用时必须通过按钮单击 后发送jaxa成功后 发送ajax 的方法名为list
//前端页面必须指定.data_id这个类 渲染的时候必须存入 
//data-page 一页显示多少条
//data-pagsize 总共有多少条数据
//前端代码
/* {<div ><button class="prev">上一页</button></div>
<div >
    <span class="btn_page down"></span>
    <ul class="select">
        <!-- <li>2/3</li>
        <li>2/3</li>                          -->
    </ul>
</div>
<div><button class="naxt">下一页</button></div> }*/
var page =1;//第一页
var num//页数;
var flage = true;//判断是否创建下拉选择页
    function size(){
        //一页的个数
        var page = $(".data_id").data("page");
        //总条数
        var pagesize = $(".data_id").data("pagesize");
            //页数   
        var size = Math.ceil(pagesize/page);
        return size;
    }
    //创建页码
    function pgsize(list){
        $(".btn_page").html(page+"/"+num+"");   
        //动态创建单击按钮页数
        if(flage){
        for(var i= 1; i<=num;i++){
            $(".select").append("<li data-num="+i+">"+i+"/"+num+"</li>");               
        }
        }  
          //单击上一页下一页
           //上一页
       $(".prev").click(function(){ 
        flage = false; //阻止创建下拉分页                                                         
          if(page ==1){
            page = 1;
          }else{
              page --;
              $(".btn_page").html(page+"/"+num+"");            
               list&&list(id,page);       
          }                          
      });
     // 下一页
     $(".naxt").click(function(){  
        flage = false; //阻止创建下拉分页                             
       if(page ==num){
         page = num;
       }else{
           page++;
           $(".btn_page").html(page+"/"+num+"");            
           list&&list(id,page);       
       }                          
   });
    //点击页数直接跳转
    $(".select").on("click","li",function(){
       var num =  $(this).data("num");
       list&&list(id,num);  
   });
    }
   //点击下来选择页数
   $(".btn_page").click(function(){  
    flage = false;    
      $(".select").fadeToggle();
       
}); 
