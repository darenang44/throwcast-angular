angular.module('throwcast.popular', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'app/home/popular.html',
      controller: 'PopularController',
      authenticate: true
  });
});
