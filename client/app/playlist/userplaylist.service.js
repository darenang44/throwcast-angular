angular.module('throwcast.profile')

.factory('UserPlaylistService', function ($http, PlaylistService, userService) {
  var data = {};
  return {
    createPlaylist: function (playlist) {
      playlist.owner = userService.data.user._id;
      return PlaylistService.createPlaylist(playlist);
    },
    deletePlaylist: function (playlistId) {
      return $http.delete('http://localhost:8888/api/playlists/' + playlistId);
    },
    deletePodcastFromPlaylist: function (index, playlist) {
      playlist.podcasts.splice(index, 1);
      $http.put('http://localhost:8888/api/playlists/' + playlist._id, playlist).then(function (res) {
        data.specificPlaylist = res.data;
      });
    },
    data: data
  };
});
