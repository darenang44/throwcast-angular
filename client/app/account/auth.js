angular.module('throwcast.auth', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/account/sign-in.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/account/sign-up.html',
      controller: 'AuthController'
    });
});
