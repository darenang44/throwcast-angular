angular.module('throwcast.auth')

.controller('AuthController', function ($scope, $location, authService, $window) {
  $scope.userCredentials = {username: '', password: ''};
  $scope.signUp = function () {
    authService.signUp($scope.userCredentials)
    .then(function () {
      $location.path('/');
      $window.location.reload();
    })
    .catch(function (err) {
      $scope.error = 'Error: ' + err;
    });
  };
  $scope.signIn = function () {
    authService.signIn($scope.userCredentials)
    .then(function () {
      $location.path('/');
      $window.location.reload();
    })
    .catch(function (err) {
      $scope.error = 'Error: ' + err;
    });
  };
});
