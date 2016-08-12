angular.module('throwcast.queue', ['ngRoute'])

.config(function ($routeProvider, $sceProvider) {
  $routeProvider
  .when('/queue', {
    templateUrl: 'app/pod/queue.html',
    controller: 'QueueController',
  });
  //TODO: this is only for development, needs to be replaced with specific filters.
  $sceProvider.enabled(false);
});
