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
     $(a).css({'filter': 'blur(0px)', 'transition': '1s'})
    } else {
      $(a).css({'filter': 'blur(10px)', 'transition': '0s'})
    }
  }

  var desktop = $(window).width() > 768
  var mobile = $(window).width() <= 768
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
  } else {
    $('#obj3').css({'filter': 'blur(0px)', 'transition': '0s'})
    $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
    $('#obj5').css({'filter': 'blur(0px)', 'transition': '0s'})
    $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
  }

  $('#obj1').css({'opacity': '1', 'transition': '2s'})

  $(window).on('scroll', function () {
    if (scrollTop = 100) {
      $('.scroll').css({'opacity': '0', 'transition': '2s'})
    } else {
      $('.scroll').css({'opacity': '1', 'transition': '2s'})
    }
    fade('#obj2', 3);
    blur('#obj3', 2);
    fade('#obj4', 2);
    blur('#obj5', 1.6);
    fade('#obj6', 1.4);

    if (mobile) {
      blur('#obj3', 3);
    }
  })
})

// $(function () {
//
//   // var desktop = $(window).width() > 768
//   // var mobile = $(window).width() <= 768
//   var mobile = $('.mobileCheck').is(':visible');
//   console.log(mobile);
//
//   if (!mobile) {
//     $('#obj1').css({'opacity': '0', 'transition': '0s'})
//     $('#obj2').css({'opacity': '0', 'transition': '0s'})
//     $('#obj4').css({'opacity': '0', 'transition': '0s'})
//     $('#obj6').css({'opacity': '0', 'transition': '0s'})
//
//     $('#obj3').css({'filter': 'blur(0px)', 'transition': '0s'})
//     $('#obj3').css({'filter': 'blur(10px)', 'transition': '0s'})
//     $('#obj5').css({'filter': 'blur(0px)', 'transition': '0s'})
//     $('#obj5').css({'filter': 'blur(10px)', 'transition': '0s'})
//   }
//
//   function fade () {
//     $('#obj1').css({'opacity': '1', 'transition': '2s'})
//
//     $(function() {
//       $(window).on('scroll', function() {
//         console.log('gogogo')
//         var scrollTop = $(this).scrollTop()
//         console.log(scrollTop)
//
//         if (scrollTop > 50) {
//           $('.scroll').css({'opacity': '0', 'transition': '1s'})
//         } else {
//           $('.scroll').css({'opacity': '1', 'transition': '1s'})
//         }
//
//         if (scrollTop > 70) {
//           $('#obj2').css({'opacity': '1', 'transition': '1s'})
//         } else {
//           $('#obj2').css({'opacity': '0', 'transition': '1s'})
//         }
//
//         if (scrollTop > 100) {
//           $('#obj3').css({'filter': 'blur(0px)', 'transition': '1s'})
//         } else {
//           $('#obj3').css({'filter': 'blur(10px)', 'transition': '1s'})
//         }
//
//         if (scrollTop > 350) {
//           $('#obj4').css({'opacity': '1', 'transition': '1s'})
//         } else {
//           $('#obj4').css({'opacity': '0', 'transition': '1s'})
//         }
//
//         if (scrollTop > 350) {
//           $('#obj5').css({'filter': 'blur(0px)', 'transition': '1s'})
//         } else {
//           $('#obj5').css({'filter': 'blur(10px)', 'transition': '1s'})
//         }
//
//         if (scrollTop > 400) {
//           $('#obj6').css({'opacity': '1', 'transition': '1s'})
//         } else {
//           $('#obj6').css({'opacity': '0', 'transition': '1s'})
//         }
//       })
//     })
//   }
//
//   if (!mobile) {
//     console.log('desktop');
//     fade ();
//   } else {
//     console.log('mobile');
//   }
// })
