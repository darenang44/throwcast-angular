angular.module('throwcast.playlist')

.controller('PlaylistController', function ($scope, $http, PlaylistService) {
  PlaylistService.getAllPlaylist().then(function (res) {
    $scope.allPlaylist = PlaylistService.data.allPlaylist;
  });
  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };
});
