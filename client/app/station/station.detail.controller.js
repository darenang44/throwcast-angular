angular.module('throwcast.stations')

.controller('StationDetailController', function ($scope, $http, StationsService, $routeParams, PodcastService, userService, PlaylistService) {
  $scope.defaultImage = 'http://myndset.com/wp-content/uploads/2015/10/podcast-image.jpg';
  $scope.getStationPodcastsById = function (id) {
    StationsService.getStationPodcast(id).then(function () {
      $scope.allStationPodcasts = StationsService.data.selectedStationPodcasts;
    });
  };
   $scope.getStationPodcastsById($routeParams.id);

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
