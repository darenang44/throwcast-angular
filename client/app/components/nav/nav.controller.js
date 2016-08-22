angular.module('throwcast.nav', [])

.controller('NavController', function ($scope, userService, authService, $location, $window) {
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  $scope.logout = function () {
    authService.logout();
  };
});
