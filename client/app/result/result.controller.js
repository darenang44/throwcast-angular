function ResultController ($scope, SearchService) {
  $scope.results = SearchService;
}

angular.module('throwcast.result').controller('ResultController', ResultController);
