angular.module('throwcast.auth', [])

.controller('AuthController', function($scope, $http){
  $scope.signup = 'Signup';
  $scope.signin = 'Signin';
});
