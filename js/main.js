$(function(){
  $(window).scroll(() => {
    var scrollRate = $(this).scrollTop() / ($("body").height() - window.innerHeight)
    var btnTop = (window.innerHeight - 20) * Math.min(scrollRate, 1)
    $("#scroll-button").css({top: btnTop});
  })
})