angular.module('throwcast.playlist')

.controller('PlaylistController', function ($scope, PlaylistService) {
  PlaylistService.getAllPlaylist().then(function () {
    $scope.allPlaylist = PlaylistService.data.allPlaylist;
  });
  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };
});
