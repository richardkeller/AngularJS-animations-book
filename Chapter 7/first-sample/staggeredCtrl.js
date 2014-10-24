function staggeredCtrlFn() {
    var stagger = this;
    stagger.emails = ["AngularJS news", "AngularJS rocks!", "AngularJS animations", "Packet Publishing news", "AngularJS Jobs"];
    stagger.archive = archiveFn;

    function archiveFn() {
        stagger.emails = ["Packet Publishing news"];
    }
}
angular.module('myApp', ['ngAnimate'])
    .controller('staggeredCtrl', staggeredCtrlFn);