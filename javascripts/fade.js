$(function () {
  function check() {
    var x = $('.obj').offset();
    console.log('x'+'='+ x.top);

    if (x = 59) {
      console.log('good')
      $('.obj').css({"opacity": "1", "transition": "3s"});
    } else {
      console.log('bad')
      $('.obj').css({"opacity": ".5", "transition": "3s"});
    }
  }

  $().scroll(function () {
    $(check)
  })

})
