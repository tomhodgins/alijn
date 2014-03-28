//
// Alijn - JavaScript Alignment Functions
//

// vAlijn - Vertical Centering
$.fn.extend({
  vAlijn: function(element, parent) {
    if (parent == undefined) {
      parent = 'html';
      $('html').css({'width': '100%', 'height': '100%'})
    }
    if (parent !== undefined && parent !== false) {
      vCenter = ((($(parent).outerHeight(true))/2) - (($(element).outerHeight(true))/2))
      $(parent).css('position', 'relative');
      $(element).css({ 'position': 'absolute', 'top': vCenter, 'z-index': '1000' });
    }
    if (parent == false) {
      $(element).css({'position': 'relative', 'top': '0', 'z-index': '0'})
    }
  }
});

// hAlijn - Horizontal Centering
$.fn.extend({
  hAlijn: function(element, parent) {
    if (parent == undefined) {
      parent = 'html';
      $('html').css({'width': '100%', 'height': '100%'})
    }
    if (parent !== undefined && parent !== false) {
      hCenter = ((($(parent).outerWidth(true))/2) - (($(element).outerWidth(true))/2))
      $(parent).css('position', 'relative');
      $(element).css({ 'position': 'absolute', 'left': hCenter, 'z-index': '1000' });
    }
    if (parent == false) {
      $(element).css({'position': 'relative', 'left': '0', 'z-index': '0'})
    }
  }
});