angular.module('throwcast.stations', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/stations', {
    templateUrl: 'app/station/stations.html',
    controller: 'StationsController',
    authenticate: true
  })
  .when('/stations/:id', {
    templateUrl: 'app/station/podcaststation.html',
    controller: 'StationDetailController',
    authenticate: true
  });
});
