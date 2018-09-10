
function unhideParagraph(el){
    var par = $(el).next();
    console.log(par);
    if($(par).is(':visible')==false){
        $(el).children().eq(1).toggleClass('icon-ARROW-_-DOWN');
        $(el).children().eq(1).toggleClass('icon-ARROW-_-UP');
        console.log("no display");
        $(par).show();
    }
    else{
        $(el).children().eq(1).toggleClass('icon-ARROW-_-UP');
        $(el).children().eq(1).toggleClass('icon-ARROW-_-DOWN');
        console.log("got display");
        $(par).hide();
    }
}