angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "app/mainpage/mainpage.html"
        }).state('news', {
            url: "/News",
            templateUrl: "app/news/news.html"
        }).state('contacts', {
            url: "/Contacts",
            templateUrl: "app/contact/contact.html"
        });
});
