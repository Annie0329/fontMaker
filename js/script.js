$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  $('#fontName').change(function () {
    $("#testFont").text($('#fontName').val())
    $(".test").css("font-family", $('#fontName').val());
  });

});