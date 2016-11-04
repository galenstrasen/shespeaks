// Galen Strasen
// Date: 10.31.2016

/**

 */
var StickyNav = function(element) { // ----- static module

    var _init = function() {
        var waypoints = $('.js-nav-guy').waypoint(function(direction) {
                var totalPrice = $('.js-nav-guy');
                    totalPrice.toggleClass('-fix');

            });
    };

    // output/public
    return {
        init: _init
    };
}(jQuery);
