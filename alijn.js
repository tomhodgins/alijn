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
      scrollTop = $(window).scrollTop(),
      parentOffset = $(parent).offset().top;
      elementOffset = (parentOffset - scrollTop)
      vCenter = (((($(parent).outerHeight(true))/2) - (($(element).outerHeight(true))/2)) + elementOffset)
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
          scrollTop = $(window).scrollTop(),
      parentOffset = $(parent).offset().left;
      elementOffset = (parentOffset - scrollTop)
      hCenter = (((($(parent).outerWidth(true))/2) - (($(element).outerWidth(true))/2)) + elementOffset)
      $(parent).css('position', 'relative');
      $(element).css({ 'position': 'absolute', 'left': hCenter, 'z-index': '1000' });
    }
    if (parent == false) {
      $(element).css({'position': 'relative', 'left': '0', 'z-index': '0'})
    }
  }
});

//
// Alignment Grid
//

$('html').append('<div class="alijnGrid"></div>')

// Halves
$('.alijnGrid').append('\n\
<div id="v-half-top"><div class="v-half-top"></div></div>\n\
<div id="v-half-bottom"><div class="v-half-bottom"></div></div>\n\
<div id="h-half-left"><div class="h-half-left"></div></div>\n\
<div id="h-half-right"><div class="h-half-right"></div></div>\n\
');

// Thirds
$('.alijnGrid').append('\n\
<div id="v-third-top"><div class="v-third-top"></div></div>\n\
<div id="v-third-middle"><div class="v-third-middle"></div></div>\n\
<div id="v-third-bottom"><div class="v-third-bottom"></div></div>\n\
<div id="h-third-left"><div class="h-third-left"></div></div>\n\
<div id="h-third-middle"><div class="h-third-middle"></div></div>\n\
<div id="h-third-right"><div class="h-third-right"></div></div>\n\
');

// Grid Styles
$('head').append('\n\
  <style type="text/css">\n\
  .alijnGrid {\n\
    width: 100%;\n\
    height: 100%;\n\
    position: absolute;\n\
  }\n\
  .alijnGrid > div {\n\
    width: 100%;\n\
    height: 100%;\n\
    top: 0;\n\
    left: 0;\n\
    position: absolute;\n\
  }\n\
  .alijnGrid > div > div {\n\
    width: 100%;\n\
    height: 100%;\n\
  }\n\
  .alijnGrid div[id$="-top"] {\n\
    top: 0;\n\
  }\n\
  .alijnGrid div[id$="-bottom"] {\n\
    top: auto;\n\
    bottom: 0;\n\
  }\n\
  .alijnGrid div[id$="-left"] {\n\
    left: 0;\n\
  }\n\
  .alijnGrid div[id$="-right"] {\n\
    left: auto;\n\
    right: 0;\n\
  }\n\
  /* Halves */\n\
  .alijnGrid div[id^="v-half"] {\n\
    height: 50%;\n\
  }\n\
  .alijnGrid div[id^="h-half"] {\n\
    width: 50%;\n\
  }\n\
  /* Thirds */\n\
  .alijnGrid div[id^="v-third"] {\n\
    height: 33%;\n\
  }\n\
  .alijnGrid div[id^="h-third"] {\n\
    width: 33%;\n\
  }\n\
  .alijnGrid div#h-third-middle {\n\
    left: 33%;\n\
  }\n\
  .alijnGrid div#v-third-middle {\n\
    top: 33%;\n\
  }\n\
  </style>')