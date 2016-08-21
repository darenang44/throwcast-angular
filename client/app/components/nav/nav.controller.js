angular.module('throwcast.nav', [])

.controller('NavController', function ($scope, userService) {
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
});
