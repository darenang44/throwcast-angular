angular.module('throwcast.search')

.controller('SearchController', function ($scope, searchService, $location) {
  $scope.data = searchService.data;
});
