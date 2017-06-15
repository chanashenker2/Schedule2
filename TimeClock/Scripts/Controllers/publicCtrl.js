appMdl.controller('publicCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.Route = function (pageName) {
        $location.path(pageName);
    };
}]);