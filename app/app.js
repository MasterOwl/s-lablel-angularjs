angular.module('app', ['ui.router'], function() {})
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('users', {
                url: "/users",
                templateUrl: "/users/user.html",
                controller: 'HomeCtrl'
            });
    });

//.config
//.run