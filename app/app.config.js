angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            views: {
		        "left-side": { templateUrl: "app/left_side/left-side.html", controller:"LeftSideCtrl" },
		        "right-side": { templateUrl: "app/right_side/right-side.html", controller:"LeftSideCtrl" }
		    }
            //templateUrl: "app/left_side/left-side.html",
            //controller: 'LeftSideCtrl'
        });
});
