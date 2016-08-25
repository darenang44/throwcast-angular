angular.module('throwcast.stations')

.controller('StationsController', function ($scope, StationsService, userService) {
  $scope.defaultImage = 'http://myndset.com/wp-content/uploads/2015/10/podcast-image.jpg';
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
  $scope.subscribe = function (stationId, index) {
    $scope.user.subscriptions.push(stationId);
    userService.updateSubscribtion($scope.user.subscriptions).then(function (res) {
      $scope.user.subscriptions = userService.data.user.subscriptions;
      $scope.subMessage = "Subcribed to " + $scope.user.subscriptions[$scope.user.subscriptions.length -1].title +'.';
    });
    $scope.selIndex = index;
  };
});
