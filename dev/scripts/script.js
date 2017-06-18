$(function(){
    console.log('hi');
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: 2500,
      wrapAround: true,
      draggable: false
    });

    $('h5.home').on('click', function(e){
        e.preventDefault();
        console.log('hello');
        $('html,body').animate({scrollTop: 2000},'slow');
    })

    $(window).scroll(()=>{
        let scroll = $(window).scrollTop();
        let firstFold = $(window).height();
        let halfFold = 0.5*firstFold;
        let secondFold = 2*firstFold;
        let thirdFold = 3*firstFold;
        let fourthFold = 4*firstFold;
        let scrollPercent = scroll / firstFold;
        console.log(scroll);
        // console.log(secondFold);


        // nav bar toggles
        if (scroll > 15) {
            $('.nav-bar__top').addClass('toggle-nav');
            $('.logo').css('transform', 'scale(0.6)');
            $('.side-nav').removeClass('toggle-nav')
        } else {
            $('.nav-bar__top').removeClass('toggle-nav');
            $('.logo').css('transform', 'scale(1)');
            $('.side-nav').addClass('toggle-nav')
        }

        if (scroll > (firstFold - 120)) {
            // $('.line1').css('width', '130px')
            $('#growth-line').removeClass('line1').addClass('toggle-growth-line');
            $('#current-view').removeClass('toggle-current-view')
        } else {
            $('#growth-line').addClass('line1').removeClass('toggle-growth-line');
            $('#current-view').addClass('toggle-current-view')
        }


        if(scroll > (secondFold - 120) && scroll < (thirdFold - 50)) {
            $('#current-view').text('MY WORK')
        } else if (scroll > (thirdFold - 80)) {
            $('#current-view').text('SAY HELLO')
        } else {
            $('#current-view').text('ABOUT ME')
        }


        // keyline animation in background
        if (scroll < 800) {
            $('.keyline3').css('width', (800*scrollPercent))
        }

        if (scroll < 773) {
            $('.keyline2').css('height', (365*(1+scrollPercent*2)));
            // $('.keyline2').css('height', (365 + 800*scrollPercent))
        } else if (scroll === 0) {
            $('.keyline2').css('height', halfFold*0.9)
        }

        if (scroll > 590) {
            $('.keyline-text').text('MY WORK >')
        } else {
            $('.keyline-text').text('ABOUT ME >')
        }

    });




});