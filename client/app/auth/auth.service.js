angular.module('throwcast.auth')

.factory('authService', function ($window) {
  return {
    logout: function () {
      delete $window.localStorage.token;
    },
    isAuth: function () {
      return !!$window.localStorage.token;
    }
  };
});
