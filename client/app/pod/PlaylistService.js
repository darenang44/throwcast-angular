angular.module('throwcast.podcast')

.factory('PlaylistService', function ($http) {
  var data = {};
  return {
    getAllPlaylist: function () {
      return $http.get('http://localhost:8888/api/playlist/').then(function (res) {
        data.allPlaylist = res.data.data;
      });
    },
    getSpecificPlaylist: function (playlistId) {
      return $http.get('http://localhost:8888/api/playlist/' + playlistId).then(function (res) {
        data.specificPlaylist = res.data.data;
      });
    },
    createPlaylist: function (name, owner) {
      return $http.post('http://localhost:8888/api/playlist/', {name: name, owner: owner});
    },
    addPodToPlaylist: function (playlistId, podcastId) {
      return $http.post('http://localhost:8888/api/playlist/' + playlistId + '/podcast/', {podcastId: podcastId});
    },
    deletePlaylist: function (playlistId) {
      return $http.delete('http://localhost:8888/api/playlist/' + playlistId);
    },
    deletePodFromPlaylist: function (playlistId, podcastId) {
      return $http.delete('http://localhost:8888/api/playlist/' + playlistId + '/podcast/' + podcastId);
    },
    data: data
  };
});
