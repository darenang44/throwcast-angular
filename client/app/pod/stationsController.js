angular.module('throwcast.stations')

.controller('StationsController', function ($scope, $http) {
  $scope.h1 = 'Stations';
  $scope.news = [
    {name: 'CNN1', description: 'World News1', link: '1cnn.mp3'},
    {name: 'CNN2', description: 'World News2', link: '2cnn.mp3'},
    {name: 'CNN2', description: 'World News2', link: '3cnn.mp3'}
  ];
  $scope.sports = [
    {name: 'ESPN1', description: 'Sports News1', link: '1espn.mp3'},
    {name: 'ESPN2', description: 'Sports News2', link: '2espn.mp3'},
    {name: 'ESPN3', description: 'Sports News3', link: '3espn.mp3'}
  ];
  $scope.entertainment = [
    {name: 'MTV1', description: 'Pop Culture News1', link: '1mtv.mp3'},
    {name: 'MTV2', description: 'Pop Culture News2', link: '2mtv.mp3'},
    {name: 'MTV3', description: 'Pop Culture News3', link: '3mtv.mp3'}
  ];

  $scope.getStations = function () {
    $http.get('api/stations/').then(function (stations) {
      return stations.data;
    }).then(function (stations) {
      $scope.stations = stations;
    });
  };
  $scope.getStations();

  $scope.getStationPodcast = function (id) {
    $http.get('api/stations/' + id).then(function (stationPodcasts) {
      return stationPodcasts.data;
    }).then(function (stationPodcasts) {
      $scope.stationPodcasts = stationPodcasts;
    });
  };
});
