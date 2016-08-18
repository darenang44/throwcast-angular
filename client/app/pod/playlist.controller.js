angular.module('throwcast.playlist')

.controller('PlaylistController', function ($scope, $http, PlaylistService) {
  $scope.h1 = 'Playlist';
  $scope.allPlaylist;
  $scope.specificPlaylist;

  PlaylistService.getAllPlaylist().then(function (res) {
    $scope.allPlaylist = PlaylistService.data.allPlaylist;
  });
  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };
  $scope.createPlaylist = function (name, owner) {
    PlaylistService.createPlaylist(name, onwer).then(function () {
      $scope.getAllPlaylist();
    });
  };
  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    PlaylistService.addPodToPlaylist(playlistId, podcastId).then(function () {
      $scope.getSpecificPlaylist(playlistId);
    });
  };
  $scope.deletePlaylist = function (playlistId) {
    PlaylistService.deletePlaylist(playlistId).then(function (res) {
      $scope.getAllPlaylist();
    });
  };
  $scope.deletePodFromPlaylist = function (playlistId, podcastId) {
    PlaylistService.deletePodFromPlaylist(playlistId, podcastId).then(function () {
      $scope.getSpecificPlaylist(playlistId);
    });
  };
});
