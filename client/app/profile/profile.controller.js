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

  $scope.unsubscribe = function (index) {
    $scope.user.subscriptions.splice(index, 1);
    userService.updateSubscribtion($scope.user.subscriptions).then(function () {
      $scope.user.subscriptions = userService.data.user.subscriptions;
    });
  };
});
