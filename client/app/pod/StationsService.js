angular.module('throwcast.stations')

.factory('StationsService', function ($http) {
  var data = {};
  return {
    getStations: function () {
      return $http.get('http://localhost:8888/api/stations/').then( function (res) {
        data.stations = res.data.data;
      });
    },
    getStationPodcast: function (station, index) {
      return $http.get('http://localhost:8888/api/stations/' + station._id + '/podcasts/').then(function (stationPodcasts) {
        data.selectedStationPodcasts = stationPodcasts.data;
        data.selected = index;
      });
    },
    data: data
  };
});
