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

function toggleClassFn($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            var isActive = false;
            var firstElement = angular.element('<div class="ifJsAnimation">First element! Click here to trigger $animate.leave for this element and $animate.enter for the second element</div>');
            var secondElement = angular.element('<div class="ifJsAnimation">Second element! Click here to trigger $animate.leave for this element and $animate.enter for the first element</div>');

            //Adds the firstElement
            $animate.enter(firstElement, $element);

            $element.on('click', function () {
                isActive = !isActive;
                // Toggle between firstElement and secondElement
                if (isActive) {
                    $animate.leave(firstElement);
                    $animate.enter(secondElement, $element);
                } else {
                    $animate.leave(secondElement);
                    $animate.enter(firstElement, $element);
                }
                //Trigger digest in this case, because this listener function is out of the angular world
                $scope.$apply();
            });
        }
    }
}

var app = angular.module('myApp', ['ngAnimate'])
   .directive('toggleJsClassDirective', toggleClassFn)
   .animation('.ifJsAnimation', ifJsAnimation);