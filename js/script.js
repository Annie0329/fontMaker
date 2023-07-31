$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $btn = $('#btn')
  const $input = $('#input')
  //按下enter就顯示訊息
  $input.keypress(function (e) {
    if (e.keyCode == 13) {
      $btn.click();
    }
  });

  //按傳送鈕也可以
  //顯示資訊
  $btn.click(function () {
    if ($input.val() != "") {
      var fontName = $input.val();
      $(".test").css("font-family", fontName);
    }
  });

});
