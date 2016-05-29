jQuery(function ($) {
    var _lockFixed = false;
    $('.nav-btn').click(function(){
        $('#header').addClass('fixed');
        _lockFixed = true;  
        $('.nav').show();
        $('.lang').show();
        $('.close').show();
        $('.logo').css('visibility','hidden');
        $('.outer').css('background-color','none');
    });
    $('.close').click(function(){
        $('.nav').hide();
        $('.lang').hide();
        $('.outer').show();
        $('.close').hide();
        $('.logo').css('visibility','');
        $('#header').removeClass('fixed');
        
        _lockFixed = false;
    });
    
    $(window).scroll(function () {
               if (!_lockFixed) {
 $('#header').toggleClass('fixed',window.scrollY>window.innerHeight);
               }
            });

    $('body').on('click', '.menu-item', function () {
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
        anchorScroller(this);
        
        if ($(window).width() <= 769) {
            $('.nav').hide();
        }
    });
    
    $(window).resize(function() {
        if ($(this).width() > 769) {
            $('.lang').hide();
            $('.outer').show();
            $('.close').hide();
            $('.logo').css('visibility','');
            $('.nav').show();
        } else {
            $('.nav').hide();
        }
    });
});

//$('body').scrollspy({ target: '#nav' });