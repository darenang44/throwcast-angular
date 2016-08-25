angular.module('throwcast.nav')

.factory('searchService', function ($http) {
  var data = {};
  return {
    searchPodcasts: function (searchQuery) {
      return $http.post('http://api.throwcast.com/api/podcasts/search', {query: searchQuery})
      .then(function (res) {
        data.foundPodcasts = res.data.hits.hits;
      });
    },
    searchPlaylists: function (searchQuery) {
      return $http.post('http://api.throwcast.com/api/playlists/search', {query: searchQuery})
      .then(function (res) {
        data.foundPlaylists = res.data.hits.hits;
      });
    },
    searchStations: function (searchQuery) {
      return $http.post('http://api.throwcast.com/api/stations/search', {query: searchQuery})
      .then(function (res) {
        data.foundStations = res.data.hits.hits;
      });
    },
    data: data,
  };
});
