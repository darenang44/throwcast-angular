angular.module('throwcast.stations')

.controller('StationsController', function ($scope, StationsService, userService) {
  userService.getUserAsync().then(function (user) {
    $scope.user = user;
  });
  StationsService.getStations().then(function () {
    $scope.stations = StationsService.data.stations.data;
  });
  $scope.getStationPodcast = function (id) {
    StationsService.getStationPodcast(id).then(function () {
      $scope.selectedStationPodcasts = StationsService.data.selectedStationPodcasts.data;
      $scope.selected = StationsService.data.selected;
    });
  };
  $scope.subscribe = function (stationId) {
    $scope.user.subscriptions.push(stationId);
    userService.updateSubscribtion($scope.user.subscriptions).then(function (res) {
      $scope.user.subscriptions = userService.data.user.subscriptions;
    });
  };
});
