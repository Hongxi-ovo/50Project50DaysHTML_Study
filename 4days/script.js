$(function () {
  $(".iconfont").click(function () {
    if ($(".inputName").hasClass("inputShow")) {
      $(".inputName").removeClass("inputShow");
      $('.iconfont').removeClass('iconSelect')
    } else {
      $(".inputName").addClass("inputShow");
      $('.iconfont').addClass('iconSelect')
    }
  });
});
