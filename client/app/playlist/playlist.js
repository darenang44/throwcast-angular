angular.module('throwcast.playlist', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/playlist/:id', {
    templateUrl: 'app/playlist/playlist.html',
    controller: 'PlaylistDetailController'
  });
});
