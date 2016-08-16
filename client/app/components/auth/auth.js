angular.module('throwcast.auth', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/signin', {
    templateUrl: 'app/components/auth/signin.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/components/auth/signup.html',
    controller: 'AuthController'
  });
});
