function addDirectiveFn($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            var firstElement = angular.element('<div class="addAnimation">1</div>');
            var secondElement = angular.element('<div class="addAnimation">2</div>');
            var thirdElement = angular.element('<div class="addAnimation">3</div>');

            $element.on('click', function () {
                $animate.enter(firstElement, $element);
                $animate.enter(secondElement, $element);
                $animate.enter(thirdElement, $element);

                //Trigger digest in this case, because this listener function is out of the angular world
                $scope.$apply();
            });
        }
    }
}

angular.module('myApp', ['ngAnimate'])
    .directive('addDirective', addDirectiveFn);