
$(document).ready(function() {
  console.log("I am ready")


  $("textarea").on("keyup",function(){
    let strings = $(this).val();
    let strLength = (140 - strings.length);
    let $counter = $(this).siblings('span.counter');
    //
    $counter.toggleClass("invalid",strLength < 0)
    $counter.html(strLength) ;
  })

})

