angular.module('throwcast.profile')

.factory('ProfileService', function ($http) {
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
    createPlaylist: function (name, owner) {
      return $http.post('http://localhost:8888/api/playlists/', {name: name, owner: owner});
    },
    deletePlaylist: function (playlistId) {
      return $http.delete('http://localhost:8888/api/playlists/' + playlistId);
    },
    data: data
  };
});
