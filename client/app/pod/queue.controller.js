angular.module('throwcast.queue')

.controller('QueueController', function ($scope, $http) {
  $scope.h1 = 'Podcast Queue';
  $scope.podcastQueue;

  $scope.getQueue = function (userId) {
    $http.get('http://localhost:8888/api/user/' + userId + '/queue/').then(function (res) {
      $scope.queue = res.data;
    });
  };
  $scope.getQueue();

  $scope.deleteFromQueue = function (userId, podcastId) {
    $http.delete('http://localhost:8888/api/user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };

  $scope.play = function (index) {
    $scope.link = $scope.podcastQueue[index].link;
  };
});
