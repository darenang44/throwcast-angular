angular.module('throwcast.playlist', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/playlist', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistController'
    //TODO: need to set authenticate to true
  });
});
