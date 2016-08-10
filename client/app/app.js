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
  .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .when('/', {
      templateUrl: 'app/pod/popular.html',
      controller: 'PopularController',
      authenticate: true
  })
  .when('/categories', {
      templateUrl: 'app/pod/categories.html',
      controller: 'CategoriesController',
      authenticate: true
  })
  .when('/playlist', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistController',
    authenticate: true
  })
  .when('/queue', {
    templateUrl: 'app/pod/queue.html',
    controller: 'QueueController',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/signin'
  });
})

.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !authService.isAuth()) {
      //evt.preventDefault(); commented out for test purposes
      $location.path('/signin');
    }
  });
});
