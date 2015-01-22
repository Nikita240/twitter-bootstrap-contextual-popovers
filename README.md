# Bootstrap Contextual Popovers

#### Just your regular twitter-bootstrap popovers, but now with contextual colors!

![Preview image of different popover contexts in action]
(http://i.imgur.com/lfpUHD3.png)

You can utilize any of the 4 basic bootstrap contexts (the same ones as used by alert):

- `popover-success`
- `popover-info`
- `popover-warning`
- `popover-danger`

## How to install

You have 2 options. Plain old css, or less.

#### CSS

Simply download the contextual-popovers.css file and link it in your html.
```
<link href="bootstrap.css" rel="stylesheet">
<link href="contextual-popovers.css" rel="stylesheet">
```
_**NOTE**: Make sure you link to the contextual-popovers.css file **AFTER** bootstrap.
Otherwise it will not override the default popover styles._

#### Less

Download the contextual-popovers.less file and `@include` it in your less file.

## How to use

Add one of the four contextual classes (e.g., `.popover-success`) to the `.popover`
element. The easiest way to do so is with jQuery.
```
$(document).ready(function() {
    $("button.has-popover").popover()
        .data("bs.popover").tip().addClass("popover-success");
});
```
The little data attribute is really neat because if you store it, you can change
the context class later on, making the popover dynamic.
```
$(document).ready(function() {
    $popover = $("button.has-popover").popover()
        .data("bs.popover").tip().addClass("popover-success");

    //Change the popover color in 15 seconds
    setTimer(function() {
        $popover.removeClass("popover-success")
            .addClass("popover-info");
    }, 15000);
});
```

You can also change the context colors like you would normally with bootstrap.
The variables that contextual popovers rely on are:

* `@state-success-text`
* `@state-info-text`
* `@state-warning-text`
* `@state-danger-text`
