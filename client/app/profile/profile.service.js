angular.module('throwcast.profile')

.factory('ProfileService', function ($http) {
  var data = {};
  return {
    createPlaylist: function (name, owner) {
      return $http.post('http://localhost:8888/api/playlists/', {name: name, owner: owner});
    },
    deletePlaylist: function (playlistId) {
      return $http.delete('http://localhost:8888/api/playlists/' + playlistId);
    },
    data: data
  };
});
