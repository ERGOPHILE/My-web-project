
//轮播图实现
var mySwiper = new Swiper('.swiper-container',{
    loop: true, //是否无缝
    autoplay : 2000,
    speed: 300,  //滚动速度
    autoplayDisableOnInteraction: false, //用户操作后 是否停止定时器
    longSwipesRatio: 0.33, //最小滑动比例
});
