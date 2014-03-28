//
// Alijn - Responsive JavaScript Rules
//

jQuery.event.add(window, 'load', alijn)
jQuery.event.add(window, 'resize', alijn)

function alijn() {

  // Mobile Breakpoints
  tabletWidth = ($(window).width() >= 481)
  desktopWidth = ($(window).width() >= 769)

  // Phone-only styles
  // When the window is 480px or narrower
  if ( tabletWidth === false && desktopWidth === false) {

    // Card Alignment
    $(document).vAlijn('#card');
    $(document).hAlijn('#card');

    // Note alignment
    $(document).vAlijn('#note', '#main');
    $(document).hAlijn('#note', '#main');

    // Sticky alignment
    $(document).vAlijn('#sticky', false);
    $(document).hAlijn('#sticky', false);

  } // end Phone Styles

  // Tablet Styles
  // When the window is 481px or wider
  if (tabletWidth === true && desktopWidth === false) {

    // Card Alignment
    $(document).vAlijn('#card', false);
    $(document).hAlijn('#card', false);

    // Note alignment
    $(document).vAlijn('#note');
    $(document).hAlijn('#note');

    // Sticky alignment
    $(document).vAlijn('#sticky', '#main');
    $(document).hAlijn('#sticky', '#main');

  } // end Tablet Styles

  // Desktop styles
  // When the window is 769px or wider
  if (desktopWidth === true) {

    // Card Alignment
    $(document).vAlijn('#card', '#main');
    $(document).hAlijn('#card', '#main');

    // Note alignment
    $(document).vAlijn('#note', false);
    $(document).hAlijn('#note', false);

    // Sticky alignment
    $(document).vAlijn('#sticky');
    $(document).hAlijn('#sticky');

  } // end Desktop Styles

};
