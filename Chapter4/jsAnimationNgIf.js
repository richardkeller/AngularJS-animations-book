
/**
* @name ifJsAnimation
* @desc The ngIf sample animation function
*/
function ifJsAnimation() {
    function animateOpacity(element, done, opacity) {
        jQuery(element).animate({
            opacity: opacity
        }, 3000, done);
    }

    /**
    * @name enterAnimation
    * @desc The enter animation function called when an element enters DOM
    * @param element - The element that is entering DOM
    * @param done - Callback function, it must be called to finish the animation
    */
    var enterAnimation = function (element, done) {
        //Animate the opacity
        jQuery(element).css({ opacity: 0 });
        animateOpacity(element, done, 1);

        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }

    /**
    * @name leaveAnimation
    * @desc The leave animation function called when an element leaves DOM
    * @param element - The element that is leaving DOM
    * @param done - Callback function, it must be called to finish the animation
    */
    var leaveAnimation = function (element, done) {
        animateOpacity(element, done, 0);

        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }

    return {
        enter: enterAnimation,
        leave: leaveAnimation
    };

}

var app = angular.module('myApp', ['ngAnimate'])
    .animation(".ifJsAnimation", ifJsAnimation);