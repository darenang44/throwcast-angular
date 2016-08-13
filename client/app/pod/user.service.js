angular.module('throwcast.user.service', [])

.factory('userService', function ($scope, $http) {
  $scope.userData;
  $scope.podcastQueue;
  $scope.message;
  return {
    getUser: function () {
      $http.get('http://localhost:8888/users/me')
      .then(function (res) {
        $scope.userData = res.data;
      });
    },

    getQueue: function (userId) {
      $http.get('http://localhost:8888/api/user/' + userId + '/queue/')
      .then(function (res) {
        $scope.podcastQueue = res.data;
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
        $scope.message = res.data.title + ' has been added to your queue.';
        getQueue();
      });
    },

    unsubscribe: function (userId, stationId) {
      $http.delete('http://localhost:8888/api/user/' + userId + '/subscriptions/', {stationId: stationId})
      .then(function (res) {
        $scope.message = 'Unsubscribed to ' + res.data.title + '.';
      });
    },

    subscribe: function (userId, stationId) {
      $http.post('http://localhost:8888/api/user' + userId + '/subscriptions/', {stationId: stationId})
      .then(function (res) {
        $scope.message = 'Subscribed to ' + res.data.name + '.';
      });
    }
  };
});
