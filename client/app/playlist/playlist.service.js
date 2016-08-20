angular.module('throwcast.playlist')

.factory('PlaylistService', function ($http) {
  var data = {};
  return {
    getAllPlaylist: function () {
      return $http.get('http://localhost:8888/api/playlists/').then(function (res) {
        data.allPlaylist = res.data.data;
      });
    },
    getSpecificPlaylist: function (playlistId) {
      return $http.get('http://localhost:8888/api/playlists/' + playlistId).then(function (res) {
        data.specificPlaylist = res.data.data;
      });
    },
    data: data
  };
});
