angular.module('throwcast.auth')

.factory('userService', function ($scope, $http) {
  var userData;
  var podcastQueue;
  var message;
  return {
    getUser: function () {
      $http.get('http://localhost:8888/users/me')
      .then(function (res) {
        userData = res.data;
      });
    },

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
