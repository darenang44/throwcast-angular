angular.module('throwcast.popular')

.controller('PopularController', function ($scope, $http, PodcastService, StationsService, userService, PlaylistService, API_BASE) {
  $scope.defaultImage = 'http://myndset.com/wp-content/uploads/2015/10/podcast-image.jpg';
  $scope.h1 = 'Top Podcast';
  $scope.message;
  $scope.podcastLink;
  $scope.stationPodcasts;
  $scope.stationPodcastButton = 'Show Station Podcasts';

  $scope.stations;

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

  $scope.getPopularPodcast = function () {
    $http.get(API_BASE + '/api/podcasts/popular').then( function (res) {
      $scope.popularPodcasts = res.data.data;
    });
  };

  $scope.getPopularStations = function () {
    $http.get(API_BASE + '/api/stations/popular').then( function (res) {
      $scope.popularStations = res.data.data;
    });
  };

  $scope.addToQueue = function (userId, podcastId) {
    $http.post(API_BASE + '/api/user/' + userId + '/queue/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to your queue.';
      $scope.getPodcast();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post(API_BASE + '/api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to ' + res.data.name + '.';
      $scope.getPodcast();
    });
  };
});
