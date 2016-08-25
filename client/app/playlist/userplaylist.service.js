angular.module('throwcast.profile')

.factory('UserPlaylistService', function ($http, PlaylistService, userService) {
  var data = {};
  return {
    createPlaylist: function (playlist) {
      data.usersPlaylist.push(playlist);
      playlist.owner = userService.data.user._id;
      return PlaylistService.createPlaylist(playlist);
    },
    deletePlaylist: function (index, playlistId) {
      data.usersPlaylist.splice(index, 1);
      return $http.delete('http://api.throwcast.com/api/playlists/' + playlistId);
    },
    getUserPlaylist: function () {
      return $http.get('http://api.throwcast.com/api/users/playlists/').then(function (res) {
        data.usersPlaylist = res.data;
      });
    },
    deletePodcastFromPlaylist: function (index, playlist) {
      playlist.podcasts.splice(index, 1);
      $http.put('http://api.throwcast.com/api/playlists/' + playlist._id, playlist).then(function (res) {
        data.specificPlaylist = res.data;
      });
    },
    data: data
  };
});
