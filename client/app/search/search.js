angular.module('throwcast.search', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/results', {
      templateUrl: 'app/search/results.html',
      controller: 'NavController',
      authenticate: true
  });
});
