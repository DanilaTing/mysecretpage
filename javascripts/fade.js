$(function() {

  function fade(a, b) {

    var obj = $(a).offset().top
    console.log(obj);

    var height = $(window).height() / b
    console.log('a' + height);

    var scrollTop = $(window).scrollTop()
    console.log(scrollTop)

    var diff = obj - height
    console.log('b' + diff);

    if (scrollTop < diff) {
      $(a).css({'opacity': '0', 'transition': '0s'})
    } else {
      $(a).css({'opacity': '1', 'transition': '1s'})
    }
  }

  function blur(a, b) {

    var obj = $(a).offset().top
    console.log(obj);

    var height = $(window).height() / b
    console.log('a' + height);

    var scrollTop = $(window).scrollTop()
    console.log(scrollTop)

    var diff = obj - height
    console.log('b' + diff);

    if (scrollTop > diff) {
     $(a).css({'filter': 'blur(0px)', 'transition': '0.5s'})
    } else {
      $(a).css({'filter': 'blur(10px)', 'transition': '0s'})
    }
  }

  var desktop = $(window).width() > 768
  var mobile = $(window).width() <= 768
  var mobile = $('.mobileCheck').is(':visible');
  console.log(mobile);

  // if (!mobile) {
  //   // $('#obj1').css({'opacity': '0', 'transition': '0s'})
  //   // $('#obj2').css({'opacity': '0', 'transition': '0s'})
  //   // $('#obj4').css({'opacity': '0', 'transition': '0s'})
  //   // $('#obj6').css({'opacity': '0', 'transition': '0s'})
  //
  //   $('#obj2').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj4').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj6').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj7').css({'filter': 'blur(10px)', 'transition': '0s'})
  // } else {
  //   $('#obj2').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj4').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj6').css({'filter': 'blur(10px)', 'transition': '0s'})
  //   $('#obj7').css({'filter': 'blur(10px)', 'transition': '0s'})
  // }

  $('#obj2').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj4').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj6').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj7').css({'filter': 'blur(10px)', 'transition': '0s'})
  $('#obj8').css({'filter': 'blur(5px)', 'transition': '0s'})
  $('#obj9').css({'filter': 'blur(5px)', 'transition': '0s'})
  $('#obj10').css({'filter': 'blur(5px)', 'transition': '0s'})
  $('#obj11').css({'filter': 'blur(5px)', 'transition': '0s'})

  $('#obj1').css({'opacity': '1', 'transition': '2s'})

  $(window).on('scroll', function () {
    if (scrollTop = 100) {
      $('.scroll').css({'opacity': '0', 'transition': '2s'})
    } else {
      $('.scroll').css({'opacity': '1', 'transition': '2s'})
    }
    blur('#obj2', 2);
    blur('#obj3', 1.5);
    blur('#obj4', 2);
    blur('#obj5', 2);
    blur('#obj6', 1.4);
    blur('#obj7', 1.4);
    blur('#obj8', 1.4);
    blur('#obj9', 1.4);
    blur('#obj10', 1.4);
    blur('#obj11', 1.4);
  })
})
