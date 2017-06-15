appMdl.directive('timeDir', function ($timeout) {
    return {
        restrict: 'E',   
        templateUrl: 'timePickerHtml.html',
        scope: {        
            text: '@',
            timetype: '=',
            timefunction: '&',
            back:'&'
        },
        link: function (scope, element, attribute)
        {

            scope.timetype = new Date();         
           
        }
    }
});