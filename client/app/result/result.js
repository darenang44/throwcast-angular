angular.module('throwcast.result', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'app/result/result.html',
    controller: 'ResultController',
    authenticate: true
  });
});
