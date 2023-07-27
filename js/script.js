$(document).ready(function () {
    const $download = $('#download');
    const $content = $('#content');
    const $gridMM = $('#gridMM');
    const $lineStyle = $('#lintStyle');
    const $aLink = $('#downloadLink');

    //如果切換使用者的話就換格式
    $download.click(
        function () {
            contentVal = $('#content').find(":selected").val();
            gridMMVal = $('#gridMM').find(":selected").val();
            lineStyleVal = $('#lineStyle').find(":selected").val();
            if (gridMMVal == 8)
                gridNum = 288;
            else if (gridMMVal == 10)
                gridNum = 210;
            else
                gridNum = 120;
            //$("#hello").text("./pdfs/" + contentVal + "_" + gridMMVal + "_" + gridNum + "_" + lineStyleVal + "稿紙.pdf")
            $aLink.attr("href", "./pdfs/" + contentVal + "_" + gridMMVal + "_" + gridNum + "_" + lineStyleVal + "稿紙.pdf");

        }
    )

});
