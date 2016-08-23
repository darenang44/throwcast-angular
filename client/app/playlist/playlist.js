angular.module('throwcast.playlist', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/playlist/', {
    templateUrl: 'app/playlist/playlist.html',
    controller: 'PlaylistController',
    authenticate: true
  })
  .when('/playlist/:id', {
    templateUrl: 'app/playlist/playlistdetails.html',
    controller: 'PlaylistDetailController',
    authenticate: true
  });
});
