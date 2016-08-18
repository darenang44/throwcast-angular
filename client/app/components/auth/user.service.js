angular.module('throwcast.auth')

.factory('userService', function ($http) {
  var user;
  var podcastQueue;
  var message;
  return {
    createUser: function (userCredentials) {
      return $http.post('http://localhost:8888/api/users/', userCredentials);
    },
    getUser: function () {
      return $http.get('http://localhost:8888/users/me')
      .then(function (res) {
        user.data = res.data;
      });
    },
    unsubscribe: function (userId, stationId) {
      return $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId});
    },
    subscribe: function (userId, stationId) {
      return $http.post('http://localhost:8888/api/user' + userId + '/subscriptions/', {stationId: stationId});
    },
    user: user,
    getQueue: function (userId) {
      $http.get('http://localhost:8888/api/user/' + userId + '/queue/')
      .then(function (res) {
        podcastQueue = res.data;
      });
    },
    deleteFromQueue: function (userId, podcastId) {
      $http.delete('http://localhost:8888/api/user/' + userId + '/queue/' + podcastId)
      .then(function (res) {
        getQueue();
      });
    },
    addToQueue: function (userId, podcastId) {
      $http.post('http://localhost:8888/api/user/' + userId + '/queue/', {podcastId: podcastId})
      .then(function (res) {
        message = res.data.title + ' has been added to your queue.';
        getQueue();
      });
    },
    unsubscribe: function (userId, stationId) {
      $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId})
      .then(function (res) {
        message = 'Unsubscribed to ' + res.data.title + '.';
      });
    },
    subscribe: function (userId, stationId) {
      $http.post('http://localhost:8888/api/user' + userId + '/subscriptions/', {stationId: stationId})
      .then(function (res) {
        message = 'Subscribed to ' + res.data.name + '.';
      });
    }
  };
});
