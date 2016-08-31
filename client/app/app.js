'use strict';

var app = angular.module('throwcast', [
  'throwcast.auth',
  'throwcast.constants',
  'throwcast.nav',
  'throwcast.podcast',
  'throwcast.popular',
  'throwcast.player',
  'throwcast.playlist',
  'throwcast.profile',
  'throwcast.result',
  'throwcast.search',
  'throwcast.stations',
  'ngRoute'
]);

app.config(function($routeProvider, $sceProvider) {
  $routeProvider.otherwise({
    redirectTo: '/signin'
  });
  $sceProvider.enabled(false);
});

app.run(function($rootScope, $location, authService) {
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !authService.isAuth()) {
      evt.preventDefault();
      $location.path('/signin');
    }
  });
});
