angular.module('throwcast.playlist')

.factory('PlaylistService', function ($http) {
  var data = {};
  return {
    createPlaylist: function (playlist) {
      return $http.post('http://api.throwcast.com/api/playlists/', playlist)
        .then(function (res) {
          data.allPlaylist.push(res.data);
        });
    },
    getAllPlaylist: function () {
      return $http.get('http://api.throwcast.com/api/playlists/').then(function (res) {
        data.allPlaylist = res.data;
      });
    },
    getSpecificPlaylist: function (playlistId) {
      return $http.get('http://api.throwcast.com/api/playlists/' + playlistId).then(function (res) {
        data.specificPlaylist = res.data;
      });
    },
    updatePlaylist: function (playlistId, playlist) {
      return $http.put('http://api.throwcast.com/api/playlists/' + playlistId, playlist).then(function (res) {
        data.specificPlaylist = res.data;
      });
    },
    data: data
  };
});
