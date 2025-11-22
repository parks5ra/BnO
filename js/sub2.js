$(document).ready(function(){
    const tabNav = $('.tab_nav li');
    const tabImg = $('.tab_image');
    const tabText = $('.tab_text');
    let a = 0;

    tabNav.click(function(){
        a = $(this).index();

        tabNav.removeClass('on');
        $(this).addClass('on');

        if ( !tabImg.eq(a).hasClass('on') ) {
            tabImg.stop().removeClass('on').fadeOut(600);
            tabImg.eq(a).stop().addClass('on').fadeIn(600);
        }

        if ( !tabText.eq(a).hasClass('on') ) {
            tabText.eq(a).siblings('div').stop().removeClass('on').fadeOut(0, function(){
                $(this).find('div').css({'transform':'translate(0, -35%)', 'transition-duration':'0'});
            })

            tabText.eq(a).stop().addClass('on').fadeIn(600)
            .find('div').css({'transform':'translate(0, -50%)', 'transition-duration':'1s'});
        }
    });
})