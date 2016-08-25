angular.module('throwcast.search', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/results', {
      templateUrl: 'app/search/results.html',
      controller: 'SearchController',
      authenticate: true
  });
});
