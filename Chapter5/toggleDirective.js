var app = angular.module('myApp', ['ngAnimate'])
    .directive('toggleDirective', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {
                var firstElement = angular.element('<div class="toggleAnimation">First element! Click here to trigger $animate.leave for this element and $animate.enter for the second element</div>');
                var secondElement = angular.element('<div class="toggleAnimation">Second element! Click here to trigger $animate.leave for this element and $animate.enter for the first element</div>');

                //Adds the firstElement
                $animate.enter(firstElement, $element);

                var isActive = false;

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

    });