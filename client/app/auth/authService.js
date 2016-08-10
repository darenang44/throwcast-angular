angular.module('throwcast.auth')

.factory('authService', function ($window) {
  return {
    logout: function () {
      delete $window.sessionStorage.token;
    },
    isAuth: function () {
      return !!$window.sessionStorage.token;
    }
  };
});
