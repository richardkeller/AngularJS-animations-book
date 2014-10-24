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
    })
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

    })
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