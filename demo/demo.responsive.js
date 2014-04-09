////////////////////////////////////////////////////
                                                  //
//                                                //
// Demo page                                      //
//                                                //
                                                  //
jQuery.event.add(window, 'load', alijn);          //
jQuery.event.add(window, 'resize', alijn);        //
                                                  //
function alijn() {                                //
                                                  //
  // Mobile Breakpoints                           //
  var tabletWidth = ($(window).width() >= 481),   //
      desktopWidth = ($(window).width() >= 769);  //
                                                  //
////////////////////////////////////////////////////

  // Smooth Scrolling
  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var dest = 0,
        position = $('.carousel').scrollTop(),
        offPage = position - $('.carousel').height();
    if ($(this.hash).offset().top < offPage) {
      dest = (offPage);
    } else {
      dest = ($(this.hash).offset().top + position);
    }
    $('.carousel').animate({scrollTop: dest}, 500, 'swing');
  });

  // data-elWidth
  var elWidth = $('[data-elWidth]').outerWidth();
  $('[data-elWidth]').attr({'data-elWidth': elWidth});

  // data-reckon-text
  var textLength = $(this).text().length;
  $('[data-reckon-text]').attr({'data-reckon-text': textLength});

  ////////////////////
  //                //
  //  Slide: Alijn  //
  //                //
  ////////////////////

  //
  // Phone width only
  //
  if (tabletWidth === false && desktopWidth === false) {
    // Card Alignment
    $('.slide#alijn').vAlijn('#card', false);
    $('.slide#alijn').hAlijn('#card', false);
    // Note alignment
    $('.slide#alijn').vAlijn('#note', false);
    $('.slide#alijn').hAlijn('#note', false);
    // Sticky alignment
    $('.slide#alijn').vAlijn('#sticky', false);
    $('.slide#alijn').hAlijn('#sticky', false);
  }

  //
  // Tablet width only
  //
  if (tabletWidth === true && desktopWidth === false) {
    // Card Alignment
    $('.slide#alijn').vAlijn('#card', '.v-third-top');
    $('.slide#alijn').hAlijn('#card', '.v-third-top');
    // Note alignment
    $('.slide#alijn').vAlijn('#note', '.v-third-middle');
    $('.slide#alijn').hAlijn('#note', '.v-third-middle');
    // Sticky alignment
    $('.slide#alijn').vAlijn('#sticky', '.v-third-bottom');
    $('.slide#alijn').hAlijn('#sticky', '.v-third-bottom');
  }

  //
  // Desktop width only
  //
  if (desktopWidth === true) {
    // Card Alignment
    $('.slide#alijn').vAlijn('#card', '.h-third-left');
    $('.slide#alijn').hAlijn('#card', '.h-third-left');
    // Note alignment
    $('.slide#alijn').vAlijn('#note', '.h-third-middle');
    $('.slide#alijn').hAlijn('#note', '.h-third-middle');
    // Sticky alignment
    $('.slide#alijn').vAlijn('#sticky', '.h-third-right');
    $('.slide#alijn').hAlijn('#sticky', '.h-third-right');
  }

  ////////////////////
  //                //
  //  Slide: Modal  //
  //                //
  ////////////////////

  $('[data-modal]').on('click', function(e) {
    e.preventDefault();
    var modal = $(this).attr('data-modal');
    $(modal).toggleClass('show');
  });
  $('.modal nav a').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.modal').toggleClass('show');
  });

  $('.slide#modal').vAlijn('p.intro');
  $('.slide#modal').hAlijn('p.intro');

  $('.slide#modal').vAlijn('#modal-demo');
  $('.slide#modal').hAlijn('#modal-demo');

  // Phone width only
  if (tabletWidth === false && desktopWidth === false) {
    $('.slide#modal').vAlijn('#modal-right', '.v-half-bottom');
    $('.slide#modal').hAlijn('#modal-right', '.v-half-bottom');
    $('.slide#modal').vAlijn('#modal-left', '.v-half-top');
    $('.slide#modal').hAlijn('#modal-left', '.v-half-top');
  }

  // Tablet & Desktop
  if (tabletWidth === true) {
    $('.slide#modal').vAlijn('#modal-right', '.h-half-right');
    $('.slide#modal').hAlijn('#modal-right', '.h-half-right');
    $('.slide#modal').vAlijn('#modal-left', '.h-half-left');
    $('.slide#modal').hAlijn('#modal-left', '.h-half-left');
  }

  ///////////////////////////////
  //                           //
  //  Slide: Element Queries   //
  //                           //
  ///////////////////////////////

  $('.slide#element-queries').vAlijn('#querybox');
  $('.slide#element-queries').hAlijn('#querybox');

  // #querybox element queries
  if (($('#querybox').outerWidth()) < 350) {
    $('#querybox').addClass('350minus');
  } else { $('#querybox').removeClass('350minus'); }

  if (($('#querybox').outerWidth()) >= 350) {
    $('#querybox').addClass('350plus');
  } else { $('#querybox').removeClass('350plus'); }

  if (($('#querybox').outerWidth()) >= 500) {
    $('#querybox').addClass('500plus');
  } else { $('#querybox').removeClass('500plus'); }

  if (($('#querybox').outerWidth()) >= 750) {
    $('#querybox').addClass('750plus');
  } else { $('#querybox').removeClass('750plus'); }

///
}//
///