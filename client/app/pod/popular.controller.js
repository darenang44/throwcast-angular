angular.module('throwcast.popular')

.controller('PopularController', function ($scope, $http, PodcastService, StationsService) {
  $scope.h1 = 'Top Podcast';
  $scope.message;
  $scope.podcastLink;
  $scope.stationPodcasts;
  $scope.stationPodcastButton = 'Show Station Podcasts';
  //TODO: delete all reference to stations after mvp
  $scope.stations;

 PodcastService.getAllPodcasts().then(function () {
   $scope.podcasts = PodcastService.data.podcasts;
 });

  StationsService.getStations().then(function () {
    $scope.stations = StationsService.data.stations;
  });

  $scope.getStationPodcast = function (station, index) {
    StationsService.getStationPodcast(station, index).then(function () {
      $scope.selectedStationPodcasts = StationsService.data.selectedStationPodcasts;
      $scope.selected = StationsService.data.selected;
    });
  };

  $scope.play = function (link) {
    $scope.podcastLink = PodcastService.play(link);
  };

  $scope.getPopularPodcast = function () {
    $http.get('http://localhost:8888/api/podcasts/popular').then( function (res) {
      $scope.popularPodcasts = res.data.data;
    });
  };

  $scope.getPopularStations = function () {
    $http.get('http://localhost:8888/api/stations/popular').then( function (res) {
      $scope.popularStations = res.data.data;
    });
  };

  $scope.addToQueue = function (userId, podcastId) {
    $http.post('http://localhost:8888/api/user/' + userId + '/queue/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to your queue.';
      $scope.getPodcast();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post('http://localhost:8888/api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to ' + res.data.name + '.';
      $scope.getPodcast();
    });
  };
});
