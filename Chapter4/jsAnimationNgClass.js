/**
* @name firstJsAnimation
* @desc The first sample animation function
*/
function firstJsAnimation() {

    /**
    * @name addClassAnimation
    * @desc The animation function called when a class is removed from the element
    * @param element - The element that will have the class removed
    * @param className - The name of the class that will be removed from the element
    * @param done - Callback function, it must be called to finish the animation
    */
    var addClassAnimation = function (element, className, done) {
        //Check if the class added is the one that triggers the animation
        if (className != 'animationClass') {
            return;
        }

        //Animate to slide up and then call done function
        jQuery(element).slideUp(300, done);

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
        //Check if the class removed is the one that triggers the animation
        if (className != 'animationClass') {
            return;
        }

        //Animate to slide down and then call done function
        jQuery(element).slideDown(300, done);


        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }

    return {
        addClass: addClassAnimation,
        removeClass: removeClassAnimation
    };

}

var app = angular.module('myApp', ['ngAnimate'])
    .animation(".firstJsAnimation", firstJsAnimation);