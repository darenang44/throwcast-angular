angular.module('throwcast.auth', [])

.controller('AuthController', function ($scope, $http, $window) {
  $scope.user = {username: '', password: ''};
  $scope.message = '';
  $scope.submit = function () {
    $http.post('/authenticate', $scope.user)
    .success(function (data) {
      $window.sessionStorage.token = data.token;
      $scope.message = 'Welcome ' + user.username;
    })
    .error(function (data) {
      delete $window.sessionStorage.token;
      $scope.message = 'Error: Invalid user or password';
    });
  };
});
