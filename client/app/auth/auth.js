angular.module('throwcast.auth', [])

.controller('AuthController', function($scope, $http){
  $scope.signup = 'Sign-Up';
  $scope.signin = 'Sign-In';
});
