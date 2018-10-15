$(document).ready(function () {
    $(".pro-center").click(function () {
        $(".select").toggle();
    })
    $(".null-label a").click(function () {
        $(".tips").show();
    })
    $(".tips-panel").click(function () {
        $(".tips").hide();
    })
})