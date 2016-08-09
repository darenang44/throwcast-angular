'use strict'

angular.module('throwcast', [
  'throwcast.playlist',
  'throwcast.categories',
  'throwcast.popular',
  'throwcast.auth',
  'ngRoute'
])

.config(function($routeProvider){
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
      controller: 'PopularController'
  })
  .when('/categories', {
      templateUrl: 'app/pod/categories.html',
      controller: 'CategoriesController'
  })
  .when('/playlist', {
    templateUrl: 'app/pod/playlist.html',
    controller: 'PlaylistController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
