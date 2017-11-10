$(function () {

  function fade() {
    $('.fade#obj1').css({'opacity': '1', 'transition': '2s'})

    $(function() {
      $(window).on('scroll', function() {
        console.log('gogogo')
        var scrollTop = $(this).scrollTop()
        console.log(scrollTop)

        if (scrollTop > 70) {
          $('.fade#obj2').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('.fade#obj2').css({'opacity': '0', 'transition': '2s'})
        }

        if (scrollTop > 100) {
          $('.fade#obj3').css({'filter': 'blur(0px)', 'transition': '3s'})
        } else {
          $('.fade#obj3').css({'filter': 'blur(10px)', 'transition': '3s'})
        }

        if (scrollTop > 350) {
          $('.fade#obj4').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('.fade#obj4').css({'opacity': '0', 'transition': '2s'})
        }

        if (scrollTop > 370) {
          $('.fade#obj5').css({'filter': 'blur(0px)', 'transition': '3s'})
        } else {
          $('.fade#obj5').css({'filter': 'blur(10px)', 'transition': '3s'})
        }

        if (scrollTop > 750) {
          $('.fade#obj6').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('.fade#obj6').css({'opacity': '0', 'transition': '2s'})
        }
      })
    })
  }

  if ($(window).width() < 500) {
    $('body').removeClass('fade');
  } else {
    fade();
  }
})
