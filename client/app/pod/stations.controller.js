angular.module('throwcast.stations')

.controller('StationsController', function ($scope, $http) {
  $scope.h1 = 'Stations';
  $scope.message;
  $scope.stations;

  $scope.getStations = function () {
    $http.get('http://localhost:8888/api/stations/').then(function (stations) {
      return stations.data;
    }).then(function (stations) {
      $scope.stations = stations;
    });
  };
  $scope.getStations();

  $scope.getStationPodcast = function (id) {
    $http.get('http://localhost:8888/api/stations/' + id).then(function (stationPodcasts) {
      return stationPodcasts.data;
    }).then(function (stationPodcasts) {
      $scope.stationPodcasts = stationPodcasts;
    });
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

});
