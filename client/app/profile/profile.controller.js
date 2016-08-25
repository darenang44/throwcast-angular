angular.module('throwcast.profile')

.controller('ProfileController', function ($scope, $http, UserPlaylistService, userService, PlaylistService) {
  $scope.defaultImage = 'http://myndset.com/wp-content/uploads/2015/10/podcast-image.jpg';
  $scope.data = PlaylistService.data;
  $scope.playlist = {};
  $scope.UserPlaylistService = UserPlaylistService.data;

  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  PlaylistService.getAllPlaylist();

  UserPlaylistService.getUserPlaylist();

  $scope.getSpecificPlaylist = function (playlistId) {
    PlaylistService.getSpecificPlaylist(playlistId).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };

  $scope.createPlaylist = function () {
    UserPlaylistService.createPlaylist($scope.playlist);
  };

  $scope.deletePlaylist = function (index, playlistId) {
    UserPlaylistService.deletePlaylist(index, playlistId);
  };

  $scope.unsubscribe = function (index) {
    $scope.user.subscriptions.splice(index, 1);
    userService.updateSubscribtion($scope.user.subscriptions).then(function () {
      $scope.user.subscriptions = userService.data.user.subscriptions;
    });
  };
});
