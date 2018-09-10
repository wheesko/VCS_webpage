var isRunning = false;

function transitionLine(el){

        ($(el).find('div')).css({
            display: 'block',
            'top': '-0.3rem',
            'left': '0',
            'height': '0.4rem',
            'color': 'white',
            'width': $(el).find('div').css('width'),
            'position': 'absolute'
        });

        $(el).children().css('color', 'white');
            $(el).find('div').stop();
            $(el).css('border-top', '0.3rem solid white');
            ($(el).find('div')).animate({
                'width': '33%'
            }, 500);


}
function ShrinkLine(el){
        $(el).children().css('color', '#f7eac5');
        $(el).css('border-top', '0.3rem solid #f7eac5');
        $(el).find('div').stop();
        ($(el).find('div')).animate({
            'width': '0%'
        }, 500);

}