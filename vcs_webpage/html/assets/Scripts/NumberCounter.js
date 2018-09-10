var isCalled = false;
$(window).scroll(function (){
    if($(window).scrollTop() + 500>= $('.numbers').offset().top && isCalled == false) {
        animateValue();
        isCalled = true;
    }
;});
function animateValue(){
    $('.numbers').find('h3').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}