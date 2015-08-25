angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "app/left_side/left-side.html",
            controller: 'LeftSideCtrl'
        });
});
