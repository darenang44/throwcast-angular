angular.module('throwcast.stations')

.controller('StationDetailController', function ($scope, $http, StationsService, $routeParams) {

  $scope.getStationPodcastsById = function (id) {
    StationsService.getStationPodcast(id).then(function () {
      $scope.allStationPodcasts = StationsService.data.selectedStationPodcasts;
    });
  };
   $scope.getStationPodcastsById($routeParams.id);
});
