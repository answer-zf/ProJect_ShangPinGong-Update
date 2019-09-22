// 手机端 
  var swiper = new Swiper('#mobile-page', {
    centeredSlides: true,
    direction: 'vertical',
    slidesPerView: 1,
    hashNavigation: true,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      slideChangeTransitionStart: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      }
    }
  });
  // 导航按钮
  var $menu = $(".menu");
  var $btn = $("#btn");
  var $ani = $(".ani");
  $(document).ready(function () {
    $("#btn").click(function () {
      $menu.css("left", "0")
      $btn.css("display", "none");
    })
    $(".btn-close").click(function () {
      $btn.css("display", "block");
      $menu.css("left", "-100%")
    })
    $(".menu-page").click(function () {
      $btn.css("display", "block");
      $menu.css("left", "-100%");
      var hrfe = $(this).attr('href');
      history.replaceState(null, null, hrfe);
      location.reload();
      //var hash = window.location.hash;
      //// var location=window.location.href.replace(hash, "");
      //var n = window.location.href.replace(hash, "") + hrfe;
      //location.assign(n);
      //location.reload();
      //// console.log(hrfe);
      ////
      //// location.assign(location)
      //// $ani.css("visibility", "visible");
    })
  })
