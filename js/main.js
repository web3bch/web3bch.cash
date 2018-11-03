$(function(){
  $(window).on('load', () => {
    const $jumbotronText = $("#jumbotron-text")
    const children = $jumbotronText.children('div')
    const texts = []
    children.each((i, e) => {
      texts.push($(e).text())
      $(e).text("")
    })
    $jumbotronText.css({opacity: 1})
    let line = 0;
    let index = 0;
    const insertText = () => {
      if (line > 0 && index === 0) {
        $(children[line - 1]).css({animation: "none", borderColor: "transparent"})
      }
      let timeout = 50
      const $el = $(children[line])
      const text = texts[line]
      $el.text($el.text() + text[index])
      index++
      if (text.length === index) {
        line++
        index = 0
        timeout += 700
      }
      if (line === texts.length) {
        return
      }
      setTimeout(insertText, timeout)
    }
    setTimeout(insertText, 500)
  });

  $(window).scroll(() => {
    var scrollRate = $(this).scrollTop() / ($("body").height() - window.innerHeight)
    var btnTop = (window.innerHeight - 20) * Math.min(scrollRate, 1)
    $("#scroll-button").css({top: btnTop});
  });

  $("#header-list li").click((e) => {
    const id = $(e.target).attr("data-id")
    $("html,body").animate({scrollTop:$('#' + id).offset().top});
  });

  // $("#jumbotron__scroll__text").click((e) => {
  //   const id = $(e.target).attr("data-id")
  //   $("html,body").animate({scrollTop:$('#' + id).offset().top});
  // });
});

// スムーズスクロール
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
$(function(){
  $('[data-scroll]').on('click', function() {
    var speed   = 500,
        $self   = $(this),
        $href   = $self.attr('href'),
        $margin = $self.attr('data-scroll') ? parseInt($self.attr('data-scroll')) : 0,
        $target = $($href);
    var pos = ( $target[0] && $target !== '#page_top' ) ? $target.offset().top - $margin : 0;
    $('html,body').animate({scrollTop: pos}, speed, 'swing');
    $self.blur();
    return false;
  });// end function.onClick
});// end function
