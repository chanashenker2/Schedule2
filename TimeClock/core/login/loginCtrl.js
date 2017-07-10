var app = angular.module('app', ['ngRoute', 'react']);

app.controller('loginCtrl', ['$scope', '$window', function ($scope, $window) {
    var flag = 0;
    $scope.userNotFound = false;
    $scope.person = { fname: '', pass: '' };
    $scope.workers = [{ name: 'moshe', pass: '11' },
                      { name: 'yakov', pass: '154' },
                      { name: 'ben', pass: '222' },
                      { name: 'david', pass: '852' },
                      { name: 'shalom', pass: '412' },
                      { name: 'moshe', pass: '444' }];
    $scope.checkUser = function () {
        for (var i = 0; i < $scope.workers.length; i++) {
            if ($scope.workers[i].name == $scope.person.fname && $scope.workers[i].pass == $scope.person.pass) {
                {
                    $window.location.href = '../index.html';
                    flag = 1;
                    $scope.userNotFound = false;
                }
            }
        }
        if (flag == 0)
            $scope.userNotFound = true;

    }

}]);

var Hello = React.createClass({
    propTypes: {
        fname: React.PropTypes.string.isRequired
       
    },

    render: function ($scope) {
        return React.DOM.span(null,
          'Hello ' + this.props.fname
        );
    }
});

app.value("Hello", Hello);

app.directive('hello', function (reactDirective) {
    return reactDirective(Hello);
});