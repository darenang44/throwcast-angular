angular.module('throwcast.auth')

.controller('AuthController', function ($scope, $http, $window, $location) {
  $scope.user = {username: '', password: ''};
  $scope.message = '';
  $scope.signup = function () {
    $http.post('http://localhost:8888/api/users/', $scope.user)
    .success(function (data) {
      console.log($scope.user);
      $window.localStorage.token = data.token;
      $scope.message = 'Welcome ' + $scope.user.username;
      $scope.user.username = '';
      $scope.user.password = '';
      $location.path('/');
    })
    .error(function (data) {
      delete $window.localStorage.token;
      $scope.message = 'Error: Invalid user or password';
    });
  };

  $scope.signin = function () {
    $http.post('http://localhost:8888/auth/local/', $scope.user)
    .success(function (data) {
      $window.localStorage.token = data.token;
      $scope.message = 'Welcome ' + $scope.user.username;
      $scope.user.username = '';
      $scope.user.password = '';
      $location.path('/');
    })
    .error(function (data) {
      delete $window.localStorage.token;
      $scope.message = 'Error: Invalid user or password';
    });
  };
});
