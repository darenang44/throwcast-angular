angular.module('throwcast.stations')

.controller('StationsController', function ($scope, StationsService, PlaylistService) {
  $scope.h1 = 'Stations';
  $scope.message;
  $scope.stations;

  StationsService.getStations().then(function () {
    $scope.stations = StationsService.data.stations;
  });

  $scope.getStationPodcast = function (id) {
    StationsService.getStationPodcast(id).then(function () {
      $scope.selectedStationPodcasts = StationsService.data.selectedStationPodcasts;
      $scope.selected = StationsService.data.selected;
    });
  };

  $scope.unsubscribe = function (userId, stationId) {
    $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId}).then(function (res) {
      $scope.message = 'Unsubscribed to ' + res.data.name + '.';
      $scope.getStations();
    });
  };

  $scope.subscribe = function (userId, stationId) {
    $http.post('http://localhost:8888/api/user' + userId + '/subscriptions/', {stationId: stationId}).then(function (res) {
      $scope.message = 'Subscribed to ' + res.data.name + '.';
      $scope.getStations();
    });
  };





  $scope.play = function (link) {
    $scope.podcastLink = PodcastService.play(link);
  };

  $scope.addToQueue = function (userId, podcastId) {
    $http.post('http://localhost:8888/api/user/' + userId + '/queue/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.stationPodcasts.name + ' has been added to your queue.';
      $scope.getStations();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post('http://localhost:8888/api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.stationPodcasts.name + ' has been added to ' + res.data.name + '.';
      $scope.getStations();
    });
  };

});
