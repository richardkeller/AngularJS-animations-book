/**
* @name repeatControllerFn
* @desc Repeat sample controller
*/
function repeatControllerFn() {
    var rc = this;
    rc.items = [{ name: 'David' }, { name: 'Adailton' }, { name: 'Claudio' }, { name: 'Cleomar' }, { name: 'Filipe' }];

    /**
    * @name sortItems
    * @desc Sort items array
    */
    rc.sortItems = function () {
        rc.items.sort(function (a, b) { return a['name'] < b['name'] ? -1 : 1 });
    };
}

/**
* @name repeatItemAnimation
* @desc The ngRepeat sample animation function
*/
function repeatItemAnimation() {
    /**
    * @name moveAnimation
    * @desc The move animation function called when an element moves in DOM
    * @param element - The element that is moving in DOM
    * @param done - Callback function, it must be called to finish the animation
    */
    var moveAnimation = function (element, done) {
        jQuery(element).css({ opacity: 0 });
        jQuery(element).animate({
            opacity: 1
        }, 3000, done);

        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }

    return {
        move: moveAnimation
    };
}


var app = angular.module('myApp', ['ngAnimate'])
    .controller("repeatController", repeatControllerFn)
    .animation(".repeatItemAnimation", repeatItemAnimation);