(function () {

  var num//页数;
  var flage = true;//判断是否创建下拉选择页
     
  //获取前一个页面传来的 categoryid
  var  categoryId = geturl().categoryId;
  function size() {
    //一页的个数
    var page = $(".data_id").data("page");
    //总条数
    var pagesize = $(".data_id").data("pagesize");
    //页数   
    var size = Math.ceil(pagesize / page);
    return size;
  }
  //商品列表标题渲染
  $.ajax({
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    dataType: "json",
    data: {
      categoryid: categoryId
    },
    success: function (info) {      
      var str = template("title_tpl", info);
      $(".n_l").html(str);
      var id = $(".tiele").data("id");
       var title =  $(".tiele").data("title");
    
       
      //商品列表渲染 
      var page = 1;//第一页
      list(id, page);
      function list(id, page) {
        $.ajax({
          url: "http://127.0.0.1:9090/api/getproductlist",
          data: {
            categoryid: id,
            pageid: page
          },
          dataType: "json",
          success: function (info) {    
                 
            var str = template("list_tpl", info);
            $("section ul").html(str);
            //分类名称传给下个页面的
       
           var href = $(".name").attr("href");
               href = href+"&title="+title;
              
               $(".name").attr("href",href);                    
             num = size();
             $(".btn_page").html(page + "/" + num + "");
            //动态创建单击按钮页数
            if (flage) {
              for (var i = 1; i <= num; i++) {
                $(".select").append("<li data-num=" + i + ">" + i + "/" + num + "</li>");
              }
            }
          }
        });
      }

      //上一页
      $(".prev").click(function () {
        flage = false; //阻止创建下拉分页                                                         
        if (page == 1) {
          page = 1;
        } else {
          page--;
          $(".btn_page").html(page + "/" + num + "");
          list(id, page);
        }
      });
      // 下一页
      $(".naxt").click(function () {
        flage = false; //阻止创建下拉分页                             
        if (page == num) {
          page = num;
        } else {
          page++;
          $(".btn_page").html(page + "/" + num + "");
          list(id, page);
        }
      });
      //点击页数直接跳转
      $(".select").on("click", "li", function () {
        var num = $(this).data("num");
        list(id, num);
      });
    }

  });



  //点击下来选择页数
  $(".btn_page").click(function () {
    flage = false;
    $(".select").fadeToggle();
  });

})();