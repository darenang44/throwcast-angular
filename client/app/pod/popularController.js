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

  $scope.message = 'Dummy message';

  $scope.getPodcast = function () {
    $http.get('api/podcasts/').then( function (res) {
      $scope.podcasts = res.data;
    });
  };
  $scope.getPodcast();

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

  $scope.addToQueue = function (userId, podcastId) {
    $http.post('api/user/' + userId + '/queue/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to your queue.';
      $scope.getPodcast();
    });
  };

  $scope.addPodToPlaylist = function (playlistId, podcastId) {
    $http.post('api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId}).then(function (res) {
      $scope.message = $scope.podcasts.name + ' has been added to ' + res.data.name + '.';
      $scope.getPodcast();
    });
  };

});
