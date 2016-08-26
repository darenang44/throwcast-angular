angular.module('throwcast.nav')

.factory('searchService', function ($http, API_BASE) {
  var data = {};
  return {
    searchPodcasts: function (searchQuery) {
      return $http.post(API_BASE + '/api/podcasts/search', {query: searchQuery})
      .then(function (res) {
        data.foundPodcasts = res.data.hits.hits;
      });
    },
    searchPlaylists: function (searchQuery) {
      return $http.post(API_BASE + '/api/playlists/search', {query: searchQuery})
      .then(function (res) {
        data.foundPlaylists = res.data.hits.hits;
      });
    },
    searchStations: function (searchQuery) {
      return $http.post(API_BASE + '/api/stations/search', {query: searchQuery})
      .then(function (res) {
        data.foundStations = res.data.hits.hits;
      });
    },
    data: data,
  };
});
