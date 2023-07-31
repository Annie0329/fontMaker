$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $btn = $('#btn')

  //按按鈕也可以
  $('input[type=file]').change(function () {
    var fileName = $('input[type=file]').val().split('\\').pop();
    fileName = fileName.replace(".ttf", "")
    $("#testFont").text(fileName)
    $(".test").css("font-family", fileName);
  });

});