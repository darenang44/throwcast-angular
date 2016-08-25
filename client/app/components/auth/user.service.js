angular.module('throwcast.auth')

.factory('userService', function ($http, $q) {
  var data = {};
  var podcastQueue;
  var message;
  return {
    createUser: function (userCredentials) {
      return $http.post('http://api.throwcast.com/api/users/', userCredentials);
    },
    getUserAsync: function () {
      if (data.user) {
        return $q.resolve(data.user);
      } else {
        return $http.get('http://api.throwcast.com/api/users/me')
        .then(function (res) {
          data.user = res.data;
          return res.data;
        });
      }
    },
    updateSubscribtion: function (subscriptions) {
      return $http.put('http://api.throwcast.com/api/users/subscriptions/', subscriptions).then(function (res) {
        data.user.subscriptions = res.data.subscriptions;
      });
    },
    data: data,
  };
});
