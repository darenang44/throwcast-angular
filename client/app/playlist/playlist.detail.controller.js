angular.module('throwcast.playlist')

.controller('PlaylistDetailController', function ($scope, $http, PlaylistService, $routeParams) {

  $scope.getSpecificPlaylist = function (id) {
    PlaylistService.getSpecificPlaylist(id).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };
   $scope.getSpecificPlaylist($routeParams.id);
});
