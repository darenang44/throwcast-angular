angular.module('throwcast.podcast')

.factory('PodcastService', function ($http) {
  var data = {};
  return {
    getAllPodcasts: function () {
      return $http.get('http://localhost:8888/api/podcasts/').then( function (res) {
        data.podcasts = res.data;
      });
    },
    play: function (link) {
      return data.podcastLink = link;
    },
    data: data
  };
});
