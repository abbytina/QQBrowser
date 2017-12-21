$(function () {
  $('#fullpage').fullpage({
    // 内容不要垂直居中 
    verticalCentered: false,
    // 是否显示导航
    navigation: true,
    // 滚动到最顶部后是否滚底部
    loopTop: true,
    // 滚动到最底部后是否滚回顶部
    loopBottom: true,
    // 滚动到某一屏幕后触发执行
    afterLoad: function (link, index) {
      // 第一屏 加载好之后 图片和文字显示在文中央
      if (index == 1) {
        $(".s1_main").removeClass("s1_main_begin");
      }
      // 第二屏加载完成后
      if (index == 2) {
        $(".s2_main").css("transition", "transform 1s");
        $(".s2_main").removeClass("s2_main_begin");
      }
      // 第三屏加载完成后
      if (index == 3) {
        //  $(".s3_main").css("transition", "transform 1s");
        $(".s3_main").removeClass("s3_main_begin");
      }
      // 第四屏加载完成后
     
    },
    // 一离开就触发
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex == 1) {
        $("#qq_bg").removeClass("qq_bg_rotate");
      } else {
        $("#qq_bg").addClass("qq_bg_rotate");
      }
      // 一离开第一屏时,再次滑向第一屏，恢复第一屏的动画
      if (index == 1) {
        $(".s1_main").addClass("s1_main_begin");
      }
      // 一离开第二屏时,再次滑向第二屏，恢复第二屏的动画
      if (index == 2) {
        $(".s2_main").addClass("s2_main_begin");
      }
      // 一离开第三屏时,再次滑向第三屏，恢复第三屏的动画
      if (index == 3) {
        $(".s3_main").addClass("s3_main_begin");
      }
      // 一离开第四屏时,再次滑向第四屏，恢复第四屏的动画
      
    }
  });
});