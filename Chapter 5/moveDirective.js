var app = angular.module('myApp', ['ngAnimate'])
    .directive('moveDirective', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {
                var elements = $element.children();
                var count = 0;

                $element.on('click', function () {
                    count++;
                    // Toggle between firstElement and secondElement
                    if (count % 3 == 1) {
                        $animate.move(angular.element(elements[2]), $element);
                    } else if (count % 3 == 2) {
                        $animate.move(angular.element(elements[1]), $element);
                    } else {
                        $animate.move(angular.element(elements[0]), $element);
                    }
                    //Trigger digest in this case, because this listener function is out of the angular world
                    $scope.$apply();
                });
            }
        }

    });