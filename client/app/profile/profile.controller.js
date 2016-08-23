angular.module('throwcast.profile')

.controller('ProfileController', function ($scope, $http, UserPlaylistService, userService, PlaylistService) {
  $scope.data = PlaylistService.data;
  $scope.playlist = {};

  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  PlaylistService.getAllPlaylist();

  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };

  $scope.createPlaylist = function () {
    UserPlaylistService.createPlaylist($scope.playlist);
  };

  $scope.deletePlaylist = function (playlistId) {
    UserPlaylistService.deletePlaylist(playlistId);
  };

  $scope.unsubscribe = function (userId, stationId) {
    $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId}).then(function (res) {
      $scope.message = 'Unsubscribed to ' + res.data.name + '.';
      $scope.getStations();
    });
  };
  // TODO: the bottom 2 shoud probably be on the podcast controller
  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    UserPlaylistService.addPodToPlaylist(playlistId, podcastId).then(function () {
      $scope.getSpecificPlaylist(playlistId);
    });
    $scope.deletePodFromPlaylist = function (playlistId, podcastId) {
      UserPlaylistService.deletePodFromPlaylist(playlistId, podcastId).then(function () {
        $scope.getSpecificPlaylist(playlistId);
      });
    };
  };
});
