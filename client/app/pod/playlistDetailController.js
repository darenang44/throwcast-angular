angular.module('throwcast.profile')

.controller('PlaylistDetailController', function ($scope, $http, ProfileService, $routeParams) {

  $scope.getSpecificPlaylist = function (id) {
    ProfileService.getSpecificPlaylist(id).then(function () {
      $scope.specificPlaylist = ProfileService.data.specificPlaylist;
    });
  };
   $scope.getSpecificPlaylist($routeParams.id);
   console.log($routeParams.id);
});
