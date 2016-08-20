angular.module('throwcast.profile')

.controller('ProfileController', function ($scope, $http, ProfileService, userService, PlaylistService) {
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  PlaylistService.getAllPlaylist().then(function (res) {
    $scope.allPlaylist = PlaylistService.data.allPlaylist;
  });
  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };
  $scope.createPlaylist = function (name, owner) {
    ProfileService.createPlaylist(name, owner).then(function () {
      ProfileService.getAllPlaylist();
    });
  };
  $scope.deletePlaylist = function (playlistId) {
    ProfileService.deletePlaylist(playlistId).then(function (res) {
    });
    ProfileService.getAllPlaylist();
  };

  $scope.unsubscribe = function (userId, stationId) {
    $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId}).then(function (res) {
      $scope.message = 'Unsubscribed to ' + res.data.name + '.';
      $scope.getStations();
    });
  };
  // TODO: the bottom 2 shoud probably be on the podcast controller
  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    ProfileService.addPodToPlaylist(playlistId, podcastId).then(function () {
      $scope.getSpecificPlaylist(playlistId);
    });
    $scope.deletePodFromPlaylist = function (playlistId, podcastId) {
      ProfileService.deletePodFromPlaylist(playlistId, podcastId).then(function () {
        $scope.getSpecificPlaylist(playlistId);
      });
    };
  };
});
