//
// Alijn - Responsive JavaScript Rules
//

jQuery.event.add(window, 'load', alijn);
jQuery.event.add(window, 'resize', alijn);

function alijn() {

  // Mobile Breakpoints
  var tabletWidth = ($(window).width() >= 481),
      desktopWidth = ($(window).width() >= 769);

  // Phone-only styles
  // When the window is 480px or narrower
  if (tabletWidth === false && desktopWidth === false) {

    // Card Alignment
    $(document).vAlijn('#card', false);
    $(document).hAlijn('#card', false);

    // Note alignment
    $(document).vAlijn('#note', false);
    $(document).hAlijn('#note', false);

    // Sticky alignment
    $(document).vAlijn('#sticky', false);
    $(document).hAlijn('#sticky', false);

  } // end Phone Styles

  // Tablet Styles
  // When the window is 481px or wider
  if (tabletWidth === true && desktopWidth === false) {

    // Card Alignment
    $(document).vAlijn('#card', '.v-third-top');
    $(document).hAlijn('#card', '.v-third-top');

    // Note alignment
    $(document).vAlijn('#note', '.v-third-middle');
    $(document).hAlijn('#note', '.v-third-middle');

    // Sticky alignment
    $(document).vAlijn('#sticky', '.v-third-bottom');
    $(document).hAlijn('#sticky', '.v-third-bottom');

  } // end Tablet Styles

  // Desktop styles
  // When the window is 769px or wider
  if (desktopWidth === true) {

    // Card Alignment
    $(document).vAlijn('#card', '.h-third-left');
    $(document).hAlijn('#card', '.h-third-left');

    // Note alignment
    $(document).vAlijn('#note', '.h-third-middle');
    $(document).hAlijn('#note', '.h-third-middle');

    // Sticky alignment
    $(document).vAlijn('#sticky', '.h-third-right');
    $(document).hAlijn('#sticky', '.h-third-right');

  } // end Desktop Styles

}
