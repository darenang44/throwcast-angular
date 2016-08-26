angular.module('throwcast.stations')

.factory('StationsService', function ($http) {
  var data = {};
  return {
    getStations: function () {
      return $http.get('http://api.throwcast.com/api/stations/').then( function (res) {
        data.stations = res;
      });
    },
    getStationPodcast: function (id) {
      delete data.station;
      return $http.get('http://api.throwcast.com/api/stations/' + id + '/').then(function (station) {
        data.selectedStationPodcasts = station.data.podcasts;
        data.station = station.data;
      });
    },
    data: data
  };
});
