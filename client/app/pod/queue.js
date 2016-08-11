angular.module('throwcast.queue', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/queue', {
    templateUrl: 'app/pod/queue.html',
    controller: 'QueueController',
  });
});
