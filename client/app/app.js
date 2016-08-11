'use strict';

angular.module('throwcast', [
  'throwcast.playlist',
  'throwcast.categories',
  'throwcast.popular',
  'throwcast.auth',
  'throwcast.queue',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'app/pod/popular.html',
      controller: 'PopularController',
  })
  .when('/categories', {
      templateUrl: 'app/pod/categories.html',
      controller: 'CategoriesController',
  })
  .when('/playlist', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistController',
  })
  .when('/queue', {
    templateUrl: 'app/pod/queue.html',
    controller: 'QueueController',
  })
  .otherwise({
    redirectTo: '/signin'
  });
})

.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !authService.isAuth()) {
      evt.preventDefault();
      $location.path('/signin');
    }
  });
});
