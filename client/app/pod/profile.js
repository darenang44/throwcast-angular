angular.module('throwcast.profile', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/profile', {
    templateUrl: 'app/pod/profile.html',
    controller: 'ProfileController'
    //TODO: need to set authenticate to true
  })
  .when('/playlist/:id', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistDetailController'
  });
});
