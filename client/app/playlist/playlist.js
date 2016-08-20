angular.module('throwcast.playlist', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/playlist/', {
    templateUrl: 'app/playlist/playlist.html',
    controller: 'PlaylistController'
  })
  .when('/playlist/:id', {
    templateUrl: 'app/playlist/playlist.html',
    controller: 'PlaylistDetailController'
  });
});
