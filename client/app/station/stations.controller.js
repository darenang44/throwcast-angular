angular.module('throwcast.stations')

.controller('StationsController', function ($scope, StationsService, ProfileService, userService) {
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
  $scope.subscribe = function (userId, stationId) {
    userService.subscribe(userId, stationId).then(function () {
      $scope.message = 'Subscribed to ' + res.data.name + '.';
    });
  };
});
