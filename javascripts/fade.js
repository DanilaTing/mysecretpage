$(function () {

  $(function () {
    $('#obj1').css({'opacity': '1', 'transition': '2s'})

    $(function() {
      $(window).on('scroll', function() {
        console.log('gogogo')
        var scrollTop = $(this).scrollTop()
        console.log(scrollTop)

        if (scrollTop > 70) {
          $('#obj2').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('#obj2').css({'opacity': '0', 'transition': '2s'})
        }

        if (scrollTop > 100) {
          $('#obj3').css({'filter': 'blur(0px)', 'transition': '3s'})
        } else {
          $('#obj3').css({'filter': 'blur(10px)', 'transition': '3s'})
        }

        if (scrollTop > 350) {
          $('#obj4').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('#obj4').css({'opacity': '0', 'transition': '2s'})
        }

        if (scrollTop > 370) {
          $('#obj5').css({'filter': 'blur(0px)', 'transition': '3s'})
        } else {
          $('#obj5').css({'filter': 'blur(10px)', 'transition': '3s'})
        }

        if (scrollTop > 750) {
          $('#obj6').css({'opacity': '1', 'transition': '2s'})
        } else {
          $('#obj6').css({'opacity': '0', 'transition': '2s'})
        }
      })
    })
  })
})
