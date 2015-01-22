/**
 * Demonstrates contextual-popovers with massive bling.
 */

/**
 * The PopoverBling class.
 */
var PopoverBling = function() {

    // properties
    var popover_options = {
        title: "Bootstrap contextual popovers",
        content: "Bootstrap popovers, with bootstrap contextual colors! Just add a contextual class, like `popover-success` to your .popover element!",
        trigger: "manual",
        container: "header .inner"
    };
    var popover_array = [];
    // jquery selector objects
    var $bling_target = $("#popover-bling");

    // constants
    var ROTATE_DELAY = 1000;

    var rotate = function() {

        popover_array[0].$popover
            .removeClass(popover_array[0].class)
            .addClass(popover_array[3].class);

        popover_array[1].$popover
            .removeClass(popover_array[1].class)
            .addClass(popover_array[0].class);

        popover_array[2].$popover
            .removeClass(popover_array[2].class)
            .addClass(popover_array[1].class);

        popover_array[3].$popover
            .removeClass(popover_array[3].class)
            .addClass(popover_array[2].class);

        popover_array = [
            { $popover: popover_array[0].$popover, class: popover_array[3].class },
            { $popover: popover_array[1].$popover, class: popover_array[0].class },
            { $popover: popover_array[2].$popover, class: popover_array[1].class },
            { $popover: popover_array[3].$popover, class: popover_array[2].class }
        ];

        //repeat
        setTimeout(rotate, ROTATE_DELAY);
    };

    /**
     * Bind all event handlers.
     */
    var bindUIActions = function() {

        window.scrollTo(0,0);

        popover_array.push({
            $popover: $bling_target.popover(
                    $.extend(popover_options, { placement: "top" })
                )
                .popover("show")
                .data("bs.popover").tip().addClass("popover-success"),
            class: "popover-success"
        });

        popover_array.push({
            $popover: $bling_target.clone()
                .css({
                    visibility: "hidden",
                    position: "absolute"
                })
                .css($bling_target.position())
                .insertAfter($bling_target)
                .popover(
                    $.extend(popover_options, { placement: "right" })
                )
                .popover("show")
                .data("bs.popover").tip().addClass("popover-info"),
            class: "popover-info"
        });

        popover_array.push({
            $popover: $bling_target.clone()
                .css({
                    visibility: "hidden",
                    position: "absolute"})
                .css($bling_target.position())
                .insertAfter($bling_target)
                .popover(
                    $.extend(popover_options, { placement: "bottom" })
                )
                .popover("show")
                .data("bs.popover").tip().addClass("popover-danger"),
            class: "popover-danger"
        });

        popover_array.push({
            $popover: $bling_target.clone()
                .css({
                    visibility: "hidden",
                    position: "absolute"})
                .css($bling_target.position())
                .insertAfter($bling_target)
                .popover(
                    $.extend(popover_options, { placement: "left" })
                )
                .popover("show")
                .data("bs.popover").tip().addClass("popover-warning"),
            class: "popover-warning"
        });
    };

    // constructor

    bindUIActions();
    $(window).resize(function() {
        $("#popover-bling").popover("show");
    });
    rotate();

    // end constructor
};

$(document).ready(function() {

    new PopoverBling;
})
