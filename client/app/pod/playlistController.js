angular.module('throwcast.playlist')

.controller('PlaylistController', function ($scope, $http) {
  $scope.h1 = 'Playlist';

  $scope.getAllPlaylist = function () {
    $http.get('api/playlist/').then(function (res) {
      $scope.allPlaylist = res.data;
    });
  };
  $scope.getAllPlaylist();

  $scope.getSpecificPlaylist = function (playlistId) {
    $http.get('api/playlist/' + playlistId).then(function (res) {
      $scope.specificPlaylist = res.data;
    });
  };

  $scope.addPlaylist = function (name, owner) {
    $http.post('api/playlist/', {name: name, owner: owner}).then(function (res) {
      $scope.getAllPlaylist();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post('api/playlist/' + playlistId + '/podcast/' + podcastId).then(function (res) {
      $scope.getSpecificPlaylist(playlistId);
    });
  };

  $scope.deletePlaylist = function (playlistId) {
    $http.delete('api/playlist/' + playlistId).then(function (res) {
      $scope.getAllPlaylist();
    });
  };

  $scope.deletePodFromPlaylist = function (playlistId, podcastId) {
    $http.delete('api/playlist/' + playlistId + '/podcast/' + podcastId).then(function (res) {
      $scope.getSpecificPlaylist(playlistId);
    });
  };
});
