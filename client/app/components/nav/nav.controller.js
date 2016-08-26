angular.module('throwcast.nav', [])

.controller('NavController', function ($scope, userService, authService, searchService, $location, PodcastService, StationsService, PlaylistService) {
  $scope.data = searchService.data;
  $scope.searchResults = [];
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  $scope.logout = function () {
    authService.logout();
  };
  $scope.getSearchResults = function () {
    searchService.searchPodcasts($scope.searchQuery);
    searchService.searchPlaylists($scope.searchQuery);
    searchService.searchStations($scope.searchQuery);
    $location.path('/results');
    $scope.searchQuery = '';
  };
  PodcastService.getAllPodcasts().then(function () {
    $scope.podcasts = PodcastService.data.podcasts;
  });

   StationsService.getStations().then(function () {
     $scope.stations = StationsService.data.stations.data;
   });

   $scope.getStationPodcast = function (station, index) {
     StationsService.getStationPodcast(station, index).then(function () {
       $scope.selectedStationPodcasts = StationsService.data.selectedStationPodcasts;
       $scope.selected = StationsService.data.selected;
     });
   };

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
       $scope.message = "Added " + podcast.title + ' to ' + $scope.specificPlaylist.title + ".";
     });
   };

   $scope.subscribe = function (stationId, index) {
     $scope.user.subscriptions.push(stationId);
     userService.updateSubscribtion($scope.user.subscriptions).then(function (res) {
       $scope.user.subscriptions = userService.data.user.subscriptions;
       $scope.subMessage = "Subcribed to " + $scope.user.subscriptions[$scope.user.subscriptions.length -1].title +'.';
     });
     $scope.selIndex = index;
   };

   $scope.play = function (link) {
     $scope.podcastLink = PodcastService.play(link);
   };
})

.directive('tcNav', function() {
  return {
    templateUrl: '/app/components/nav/nav.html',
    controller: 'NavController'
  }
});
