angular.module('throwcast.stations', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/stations', {
      templateUrl: 'app/pod/stations.html',
      controller: 'StationsController',
  });
});
