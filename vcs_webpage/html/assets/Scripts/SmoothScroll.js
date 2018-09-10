function scrollToTarget(el){
    $('html, body').animate({
       scrollTop: $(el).offset().top
    }, 1000);
}