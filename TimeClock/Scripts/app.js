var appMdl = angular.module('appMdl', ['ngRoute', 'ui.bootstrap', 'ds.clock', 'ngAnimate', 'chart.js']);


//Routing pages

appMdl.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'HomePage.html',
            controller: 'clockCtrl'

        })
            .when('/Schedule', {
                templateUrl: 'Schedule.html',
                controller: 'clockCtrl'
            })
    .when('/HomePage', {
        templateUrl: 'HomePage.html',
        controller: 'clockCtrl'

    })

});

