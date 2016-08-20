'use strict';

angular.module('throwcast', [
  'throwcast.profile',
  'throwcast.stations',
  'throwcast.popular',
  'throwcast.auth',
  'throwcast.podcast',
  'throwcast.player',
  'throwcast.playlist',
  'ngRoute'
])

.config(function ($routeProvider, $sceProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/signin'
  });
  $sceProvider.enabled(false);
})

.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !authService.isAuth()) {
      evt.preventDefault();
      $location.path('/signin');
    }
  });
});
