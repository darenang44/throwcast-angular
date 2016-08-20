angular.module('throwcast.podcast')

.controller('PodcastController', function ($scope, $http, PodcastService) {

  PodcastService.getAllPodcasts().then(function () {
    $scope.podcasts = PodcastService.data.podcasts;
  });

   $scope.play = function (link) {
     $scope.podcastLink = PodcastService.play(link);
   };
});
