angular.module('throwcast.popular')

.controller('PopularController', function ($scope, $http) {
  $scope.h1 = 'Top Podcast';
  $scope.popularPodcast2 = [
    {name: 'Fantasy Focus1', description: 'Fantasy football advice1', link: '1fantasyfocus.mp3'},
    {name: 'Fantasy Focus2', description: 'Fantasy football advice2', link: '2fantasyfocus.mp3'},
    {name: 'Fantasy Focus3', description: 'Fantasy football advice3', link: '3fantasyfocus.mp3'},
    {name: 'Fantasy Focus4', description: 'Fantasy football advice4', link: '4fantasyfocus.mp3'},
    {name: 'Fantasy Focus5', description: 'Fantasy football advice5', link: '4fantasyfocus.mp3'}
  ];

  $scope.getPodcast = function () {
    $http.get('api/podcasts/').then( function (res) {
      $scope.podcasts = res.data;
    });
  };

  $scope.getPopularPodcast = function () {
    $http.get('api/podcasts/popular').then( function (res) {
      $scope.popularPodcasts = res.data;
    });
  };

  $scope.getPopularStations = function () {
    $http.get('api/stations/popular').then( function (res) {
      $scope.popularStations = res.data;
    });
  };

  $scope.unsubscribe = function (userId, stationId) {
    $http.delete('api/user/' + userId + '/subscriptions/' + subId).then(function (res) {
      $scope.message = 'Unsubscribed to ' + res.data.name + '.';
      $scope.getPodcast();
    });
  };

  $scope.subscribe = function (userId, stationId) {
    $http.post('api/user' + userId + '/subscriptions' + stationId).then(function (res) {
      $scope.message = 'Subscribed to ' + res.data.name + '.';
      $scope.getPodcast();
    });
  };

});
