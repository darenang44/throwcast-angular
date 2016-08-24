angular.module('throwcast.playlist')

.controller('PlaylistDetailController', function ($scope, $http, PlaylistService, $routeParams, userService, UserPlaylistService, PodcastService) {
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });

  PlaylistService.getSpecificPlaylist($routeParams.id).then(function () {
    $scope.playlist = PlaylistService.data.specificPlaylist;
  });

   $scope.deletePodcastFromPlaylist = function (index, playlist) {
     UserPlaylistService.deletePodcastFromPlaylist(index, playlist);
   };

   $scope.play = function (link) {
     $scope.podcastLink = PodcastService.play(link);
   };
});
