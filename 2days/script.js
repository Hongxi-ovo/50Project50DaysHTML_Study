let num = 0;
$(document).ready(function () {
  $(".n").click(function () {
    if (num < 3) {
      $(".p").removeClass("none");

      num++;
      $(".line:eq(" + (num - 1) + ")").addClass("lineSelect");
      $(".projress:eq(" + num + ")").addClass("proSelect");
      if (num == 3) {
        $(".n").addClass("none");
      }
    }
  });
  $(".p").click(function () {
    if (0 < num) {
      $(".n").removeClass("none");
      $(".p").removeClass("none");
      $(".line:eq(" + (num - 1) + ")").removeClass("lineSelect");
      $(".projress:eq(" + num + ")").removeClass("proSelect");
      num--;
      if (num == 0) {
        $(".p").addClass("none");
      }
    }
  });
});
