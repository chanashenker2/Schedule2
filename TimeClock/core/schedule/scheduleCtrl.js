(function () {
    'use strict';
    angular.module('appMdl')
.controller('scheduleCtrl', ['$scope', '$filter', scheduleCtrl]);
function scheduleCtrl($scope, $filter)
{
    $scope.arr = [];
    $scope.hoursSummary = 0;

    $scope.search = "";

    $scope.TableLoad = function () {//load the table
        $scope.hoursSummary = 0;
        $scope.ezArr = []; p
      //$scope.ezArr.push({ date: new Date("2015/03/03"), Time: "10:00", status: "enter" });//example for search 
        for (var i = 1; i <= localStorage.length; i++) {
            var x = localStorage[i];
            var p = JSON.parse(x);
            if (p.status == true)
                var currentStatus = "enter";
            else var currentStatus = "exit";
            $scope.ezArr.push({ date: new Date(p.date), Time: p.Time, status: currentStatus });
        }
      

        for (var i = 1, j = 0; i <= localStorage.length - 1; i += 2, j++) {
            var text = localStorage[i];
            var p = JSON.parse(text);
            var en = new Date(p.Time).getHours();
            text = localStorage[i + 1];
            p = JSON.parse(text);
            var ex = new Date(p.Time).getHours();
            if (ex - en < 0)
                $scope.hoursSummary += 24 + (ex - en);
            else $scope.hoursSummary += (ex - en);
        }
        $scope.list = angular.copy($scope.ezArr);
    }
    var string;
    $scope.filter = function () {
        $scope.ezArr = angular.copy($scope.list);
        angular.forEach($scope.ezArr, function (item) {
            string = "" + item.date;
            item.Month = string.split(" ")[1];
        });
        if ($scope.search != "")
            $scope.ezArr = $filter('filter')($scope.ezArr, { Month: $scope.search });
        else {
            $scope.ezArr = [];
            string = "";
            $scope.ezArr = angular.copy($scope.list);
        }

    }
}
})();