$(function () {

  // var desktop = $(window).width() > 768
  // var mobile = $(window).width() <= 768
  var mobile = $('.mobileCheck').is(':visible');
  console.log(mobile);

  if (!mobile) {
    $('#obj1').css({'opacity': '0', 'transition': '0s'})
    $('#obj2').css({'opacity': '0', 'transition': '0s'})
    $('#obj4').css({'opacity': '0', 'transition': '0s'})
    $('#obj6').css({'opacity': '0', 'transition': '0s'})

    $('#obj3').css({'filter': 'blur(0px)', 'transition': '0s'})
    $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
    $('#obj5').css({'filter': 'blur(0px)', 'transition': '0s'})
    $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
  }

  function fade () {
    $('#obj1').css({'opacity': '1', 'transition': '2s'})

    $(function() {
      $(window).on('scroll', function() {
        console.log('gogogo')
        var scrollTop = $(this).scrollTop()
        console.log(scrollTop)

        if (scrollTop > 50) {
          $('.scroll').css({'opacity': '0', 'transition': '1s'})
        } else {
          $('.scroll').css({'opacity': '1', 'transition': '1s'})
        }

        if (scrollTop > 70) {
          $('#obj2').css({'opacity': '1', 'transition': '1s'})
        } else {
          $('#obj2').css({'opacity': '0', 'transition': '1s'})
        }

        if (scrollTop > 100) {
          $('#obj3').css({'filter': 'blur(0px)', 'transition': '1s'})
        } else {
          $('#obj3').css({'filter': 'blur(10px)', 'transition': '1s'})
        }

        if (scrollTop > 350) {
          $('#obj4').css({'opacity': '1', 'transition': '1s'})
        } else {
          $('#obj4').css({'opacity': '0', 'transition': '1s'})
        }

        if (scrollTop > 350) {
          $('#obj5').css({'filter': 'blur(0px)', 'transition': '1s'})
        } else {
          $('#obj5').css({'filter': 'blur(10px)', 'transition': '1s'})
        }

        if (scrollTop > 400) {
          $('#obj6').css({'opacity': '1', 'transition': '1s'})
        } else {
          $('#obj6').css({'opacity': '0', 'transition': '1s'})
        }
      })
    })
  }

  if (!mobile) {
    console.log('desktop');
    fade ();
  } else {
    console.log('mobile');
  }
})
