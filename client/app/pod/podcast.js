angular.module('throwcast.podcast', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/podcast', {
      templateUrl: 'app/pod/podcast.html',
      controller: 'PodcastController'
      //TODO: need to set authenticate to true
  });
});
