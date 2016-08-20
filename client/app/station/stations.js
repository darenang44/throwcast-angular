angular.module('throwcast.stations', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/stations', {
    templateUrl: 'app/station/stations.html',
    controller: 'StationsController'
    //TODO: need to set authenticate to true
  })
  .when('/stations/:id', {
    templateUrl: 'app/station/podcaststation.html',
    controller: 'StationDetailController'
  });
});
