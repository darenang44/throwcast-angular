angular.module('throwcast.podcast')

.factory('PodcastService', function ($http) {
  var data = {};
  return {
    getAllPodcasts: function () {
      return $http.get('http://api.throwcast.com/api/podcasts/').then( function (res) {
        data.podcasts = res.data;
      });
    },
    play: function (podcast) {
      return data.selected = podcast;
    },
    data: data
  };
});
