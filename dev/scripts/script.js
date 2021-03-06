$(function(){
    console.log('hi');
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: 4500,
      wrapAround: true,
      draggable: false
    });

    let about = $('.about-section').offset().top;
    let work = $('.p1').offset().top;
    let contact = $('.contact-me-section').offset().top;

    $('li.home').on('click', function(e){
        e.preventDefault();
        console.log('hello');
        $('html,body').animate({scrollTop: 0},'slow');
    })

    $('li.about').on('click', function(e){
        e.preventDefault();
        console.log('hello');
        $('html,body').animate({scrollTop: about},'slow');
        console.log(about)
    })

    $('li.work').on('click', function(e){
        e.preventDefault();
        console.log(work);
        $('html,body').animate({scrollTop: work},'slow');
    })

    $('li.contact').on('click', function(e){
        e.preventDefault();
        console.log('hello');
        $('html,body').animate({scrollTop: contact},'slow');
    })

    $('.side-nav').on('click', function(e){
        e.preventDefault();
        console.log('burgerr');
        $('.nav-bar__side').toggleClass('toggle-nav__side');
        $('#growth-line').toggleClass('open');
        $('#current-view').toggleClass('toggle-current-view')
    })

    // how do i turn this off after i close the menu??

    $(window).scroll(()=>{

        if ($('#nav-bar__side').hasClass('toggle-nav__side')) {
            // console.log('yea');
            $('#current-view').removeClass('toggle-current-view');
            $('.nav-bar__side').toggleClass('toggle-nav__side');
            $('#growth-line').toggleClass('open');
        }

        let scroll = $(window).scrollTop();
        let firstFold = $(window).height();
        let viewWidth = $(window).width();
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


        if(scroll > secondFold && scroll < 2500) {
            $('#current-view').text('MY WORK')
        } else if (scroll > 2500) {
            $('#current-view').text('SAY HELLO')
        } else {
            $('#current-view').text('ABOUT ME')
        }


        // keyline animation in background
        if (scroll < 800) {
            $('.keyline3').css('width', ((0.35*viewWidth)*scrollPercent))
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