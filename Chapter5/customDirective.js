var app = angular.module('myApp', ['ngAnimate'])
    .directive('customDirective', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {
                var isActive = true;
                $element.on('click', function () {
                    isActive = !isActive;
                    // Toggle between add class and remove class
                    if (isActive) {
                        $animate.addClass($element, 'customClick');
                    } else {
                        $animate.removeClass($element, 'customClick');
                    }
                    //Trigger digest in this case, because this listener function is out of the angular world
                    $scope.$apply();
                });
            }
        }
    });