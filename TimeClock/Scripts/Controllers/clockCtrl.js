appMdl.controller('clockCtrl', ['$scope','$filter', function ($scope,$filter) {

    $scope.arr = [];
    $scope.hoursSummary = 0;
    $scope.minutesSummary;
    $scope.SumHours;
   //function to save enter or exit
    $scope.saveEnterOrExit = function (enterTime) {     
        if ($scope.Enter == true) {
            localStorage[localStorage.length + 1] = JSON.stringify({ date: new Date(), Time: enterTime, status: $scope.Enter });
            $scope.Enter = null;
            $scope.isEnter = false;
            $scope.Exit = true;
            $scope.startTime = new Date(enterTime).getHours();
         }
        else {
            $scope.exitTime = new Date(enterTime).getHours();
            $scope.SumHours = $scope.exitTime - $scope.startTime;
            if ($scope.SumHours < 0)
                $scope.SumHours = 24 + $scope.SumHours;
               
                localStorage[localStorage.length + 1] = JSON.stringify({ date: new Date(), Time: enterTime, status: $scope.Enter });
                $scope.isEnter = false;
                $scope.Exit = false;
                $scope.Enter = false;
        
            }
    }

    $scope.search = "";
    //go back
    $scope.out = function () { 
        if ($scope.Enter == true) {
            $scope.isEnter = false;
        }
        else {
            $scope.isEnter = false;
        }
    }
    $scope.TableLoad = function () {//load the table
        $scope.hoursSummary = 0;
        $scope.ezArr = [];p
         //$scope.arr.push({ date: new Date("2015/03/03"), Time: "10:00", status: "enter" });//example for search
         for (var i = 1; i <= localStorage.length; i++) {
            var x = localStorage[i];
            var p = JSON.parse(x);
            if (p.status == true)
                var currentStatus = "enter";
            else var currentStatus = "exit";
            $scope.ezArr.push({ date:new Date(p.date), Time: p.Time, status: currentStatus });
        }
        //$scope.array = angular.copy($scope.ezArr);
         
           for (var i = 1, j = 0; i <= localStorage.length - 1; i += 2, j++) {
               var text = localStorage[i];
               var p = JSON.parse(text);
               var en = new Date(p.Time).getHours();
               text = localStorage[i + 1];
               p = JSON.parse(text);
               var ex = new Date(p.Time).getHours();
               if (ex - en < 0)
                   $scope.hoursSummary += 24+(ex - en);
             else  $scope.hoursSummary += (ex - en);
        }
               $scope.list = angular.copy($scope.ezArr);
    }
    var string;
    $scope.filter = function () {
        
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
}]);
