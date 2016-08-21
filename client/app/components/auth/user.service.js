angular.module('throwcast.auth')

.factory('userService', function ($http, $q) {
  var data = {};
  var podcastQueue;
  var message;
  return {
    createUser: function (userCredentials) {
      return $http.post('http://localhost:8888/api/users/', userCredentials);
    },
    getUserAsync: function () {
      if (data.user) {
        return $q.resolve(data.user);
      } else {
        return $http.get('http://localhost:8888/api/users/me')
        .then(function (res) {
          data.user = res.data;
          return res.data;
        });
      }
    },
    data: data,
    subscribe: function (stationId) {
      return $http.post('http://localhost:8888/api/users/subscriptions/', {stationId: stationId});
    },
    addPodToPlaylist: function (playlistId, podcastId) {
      return $http.post('http://localhost:8888/api/playlists/' + playlistId + '/podcast/', {podcastId: podcastId});
    },
    deletePodFromPlaylist: function (playlistId, podcastId) {
      return $http.delete('http://localhost:8888/api/playlists/' + playlistId + '/podcast/' + podcastId);
    },
    unsubscribe: function (userId, stationId) {
      return $http.delete('http://localhost:8888/api/users/' + userId + '/subscriptions/', {stationId: stationId});
    },
  };
});
