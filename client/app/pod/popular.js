angular.module('throwcast.popular', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'app/pod/popular.html',
      controller: 'PopularController',
      authenticate: true
      //TODO: need to set authenticate to true
  });
});
