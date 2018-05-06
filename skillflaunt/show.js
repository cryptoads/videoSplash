$(document).ready(function(){   
    $(".showbutton").click(function(){
        $(".showme").fadeToggle("slow");

    });
        $('a[href^="#learnmore"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});