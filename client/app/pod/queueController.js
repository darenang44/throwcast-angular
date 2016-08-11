angular.module('throwcast.queue')

.controller('QueueController', function ($scope, $http) {
  $scope.h1 = 'Podcast Queue';

  $scope.getQueue = function (userId) {
    $http.get('user/' + userId + '/queue/').then(function (res) {
      $scope.queue = res.data;
    });
  };
  $scope.getQueue();

  $scope.addToQueue = function (userId, podcastId) {
    $http.post('user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };

  $scope.deleteFromQueue = function (userId, podcastId) {
    $http.delete('user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };
});
