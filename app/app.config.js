angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "app/users/user.html",
            controller: 'HomeCtrl'
        });
});
