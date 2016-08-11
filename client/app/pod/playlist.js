angular.module('throwcast.playlist', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/playlist', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistController',
  });
});
