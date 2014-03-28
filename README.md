alijn.js
========

Alijn lets you build your responsive CSS styles with the power of JavaScript. Construct rules that calculate CSS values in realtime while making use of advnced alignment functions like vertical centering and horizontal centering within user-selectable containing elements and more planned for the future. Go beyond CSS.

## Alijn is made of:

- A framework for switching rules on and off responsively
  - the ability to define breakpoints based on browser widths
  - rules sorted into blocks to be switched on and off in a similar way to `@media` rules in CSS

- A collection of different web layout alignment functions, such as:
  - vertically-centered (on page, or within optionally specified container)
  - horizontally-centered (on page, or within optionally specific container)
  - more to come…

## Responsive `if` Statements in `alijn.responsive.js`

So first I've defined the two mobile breakpoints the same as in my CSS:

    tabletWidth = ($(window).width() >= 481)
    desktopWidth = ($(window).width() >= 769)

Then we can make a variety of `if` statements using these breakpoints that will allow us to apply our code only between certain browser widths:

    // Phone Width (480px or less)
    if ( tabletWidth === false && desktopWidth === false) {
    }

    // Tablet Width and above (481px or more)
    if ( tabletWidth === true ) {
    }

    // Tablet Width only (481px - 768px)
    if ( tabletWidth === true && desktopWidth === false) {
    }

    // Desktop only (768px or more)
    if ( desktopWidth === true) {
    }

Using the responsice statements above it makes it easy to sort rules and define when different blocks of rules kick in or no longer apply.


## How to use the alignment functions in `alijn.js`

The first two alignment functions I got working were `vAlijn()` for vertically centering things, and `hAlijn()` for horizontally centering things. Each alignment function does three things (that all future functions should also do):

- offer alignment in the simplest possible way to an object using default settings
- offer advanced alignment with optional settings like picking a container
- allow the alignment to be cancelled

To use `vAlijn()` for an example, we can pass the following arguments to the function:

    vAlijn(element, parent)
    
- `element` is the name of the element you wish to align
- `parent` is the name of the parent within which you wish to align this (if ommitted, the default setting is the `<html>` tag.
- if the value of `parent` is `false` it will cancel alignment

A setting of `$(document).vAlijn('#thing')` would align `#thing` in the middle of the page vertically

A setting of `$(document).vAlijn('#thing', '#box')` would align `#thing` inside of `#box`

A setting of `$(document).vAlijn('#thing', false)` will cancel all alignment on that element

The `hAlijn()` function works the same way (`hAlijn(element, parent)` but to align things horizontally. If we combine these functions with the special `if` statements in `alijn.responsive.js` using our mobile breakpoints we can have the alingment kick in only at very specific times. Let's consider the following example:

#### Example

    // Phone Width (480px or less)
    if ( tabletWidth === false && desktopWidth === false) {
      $(document).vAlijn('#hero', false)
    }

    // Tablet Width only (481px - 768px)
    if ( tabletWidth === true) {
      $(document).vAlijn('#hero')
    }

In the above example, `#hero` would display using default CSS styles when the browser is below `481px`, but as soon as the browser window goes above 481px or wider, our second rule would kick in forcing `#hero` to center vertically within the default container (which is `<html>`). If the browser goes narrower than `481px` at any point though, the alignment will cancel itself again and it will return back to the CSS default styles.