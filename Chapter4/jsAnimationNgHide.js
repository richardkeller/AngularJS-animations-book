/**
* @name hideJsAnimation
* @desc The ngHide sample animation function
*/
function hideJsAnimation() {
    function animateOpacity(element, done, opacity) {
        jQuery(element).animate({
            opacity: opacity,
            height: ["toggle", "swing"]
        }, 3000, done);
    }

    /**
    * @name beforeAddClassAnimation
    * @desc The animation function called before a class is added to the element
    * @param element - The element that will have the class appended
    * @param className - The name of the class that will be appended to the element
    * @param done - Callback function, it must be called to finish the animation
    */
    var beforeAddClassAnimation = function (element, className, done) {
        //Animate the opacity and style the height to display a curtain effect 
        animateOpacity(element, done, 0);

        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    /**
    * @name removeClassAnimation
    * @desc The animation function called when a class is removed from the element
    * @param element - The element that will have the class removed
    * @param className - The name of the class that will be removed from the element
    * @param done - Callback function, it must be called to finish the animation
    */
    var removeClassAnimation = function (element, className, done) {
        animateOpacity(element, done, 1);

        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }

    return {
        beforeAddClass: beforeAddClassAnimation,
        removeClass: removeClassAnimation
    };

}

var app = angular.module('myApp', ['ngAnimate'])
    .animation(".hideJsAnimation", hideJsAnimation);