angular.module('throwcast.playlist')

.controller('PlaylistController', function ($scope, $http) {
  $scope.h1 = 'Playlist';
  $scope.allPlaylist;
  $scope.specificPlaylist;

  $scope.getAllPlaylist = function () {
    $http.get('http://localhost:8888/api/playlist/').then(function (res) {
      $scope.allPlaylist = res.data;
    });
  };
  $scope.getAllPlaylist();

  $scope.getSpecificPlaylist = function (playlistId) {
    $http.get('http://localhost:8888/api/playlist/' + playlistId).then(function (res) {
      $scope.specificPlaylist = res.data;
    });
  };

  $scope.createPlaylist = function (name, owner) {
    $http.post('http://localhost:8888/api/playlist/', {name: name, owner: owner}).then(function (res) {
      $scope.getAllPlaylist();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post('http://localhost:8888/api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId}).then(function (res) {
      $scope.getSpecificPlaylist(playlistId);
    });
  };

  $scope.deletePlaylist = function (playlistId) {
    $http.delete('http://localhost:8888/api/playlist/' + playlistId).then(function (res) {
      $scope.getAllPlaylist();
    });
  };

  $scope.deletePodFromPlaylist = function (playlistId, podcastId) {
    $http.delete('http://localhost:8888/api/playlist/' + playlistId + '/podcast/' + podcastId).then(function (res) {
      $scope.getSpecificPlaylist(playlistId);
    });
  };
});
