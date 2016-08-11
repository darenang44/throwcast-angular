angular.module('throwcast.queue')

.controller('QueueController', function ($scope, $http) {
  $scope.h1 = 'Podcast Queue';

  $scope.getQueue = function (userId) {
    $http.get('api/user/' + userId + '/queue/').then(function (res) {
      $scope.queue = res.data;
    });
  };
  $scope.getQueue();

  $scope.addToQueue = function (userId, podcastId) {
    $http.post('api/user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };

  $scope.deleteFromQueue = function (userId, podcastId) {
    $http.delete('api/user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };
});
