angular.module('throwcast.podcast')

.controller('PodcastController', function ($scope, $http, PodcastService, userService, PlaylistService) {

  PodcastService.getAllPodcasts().then(function () {
    $scope.podcasts = PodcastService.data.podcasts;
  });

  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });

  PlaylistService.getAllPlaylist().then(function (res) {
    $scope.allPlaylist = PlaylistService.data.allPlaylist;
  });

  $scope.getUserPlaylist = function (user, playlist, index) {
    $scope.userPlaylists = [];
    angular.forEach(playlist, function (eachPlaylist) {
      if (user._id === eachPlaylist.owner) {
         $scope.userPlaylists.push(eachPlaylist);
      }
    });
    $scope.selectedIndex = index;
    return $scope.userPlaylists;
  };

  $scope.addPodcastToPlaylist = function (podcast, selectedPlaylist) {
    selectedPlaylist.podcasts.push(podcast);
    PlaylistService.updatePlaylist(selectedPlaylist._id, selectedPlaylist).then(function () {
      $scope.specificPlaylist = PlaylistService.data.specificPlaylist;
    });
  };

   $scope.play = function (link) {
     $scope.podcastLink = PodcastService.play(link);
   };
});
