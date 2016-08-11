angular.module('throwcast.auth')

.controller('AuthController', function ($scope, $http, $window, $location) {
  $scope.user = {username: '', password: ''};
  $scope.message = '';
  $scope.signup = function () {
    $http.post('http://localhost:8888/user/signup', $scope.user)
    .success(function (data) {
      $window.sessionStorage.token = data.token;
      $scope.message = 'Welcome ' + $scope.user.username;
      $scope.user.username = '';
      $scope.user.password = '';
      $location.path('/');
    })
    .error(function (data) {
      delete $window.sessionStorage.token;
      $scope.message = 'Error: Invalid user or password';
    });
  };

  $scope.signin = function () {
    $http.post('http://localhost:8888/user/login', $scope.user)
    .success(function (data) {
      $window.sessionStorage.token = data.token;
      $scope.isAuthenticated = true;
      $scope.message = 'Welcome ' + $scope.user.username;
      $scope.user.username = '';
      $scope.user.password = '';
      $location.path('/');
    })
    .error(function (data) {
      delete $window.sessionStorage.token;
      $scope.message = 'Error: Invalid user or password';
    });
  };
});
