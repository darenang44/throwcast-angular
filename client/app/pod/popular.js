angular.module('throwcast.popular', [])

.controller('PopularController', function ($scope, $http) {
  $scope.h1 = 'Top Podcast';
  $scope.popularPodcast = [
    {name: 'Fantasy Focus1', description: 'Fantasy football advice1', link: '1fantasyfocus.mp3'},
    {name: 'Fantasy Focus2', description: 'Fantasy football advice2', link: '2fantasyfocus.mp3'},
    {name: 'Fantasy Focus3', description: 'Fantasy football advice3', link: '3fantasyfocus.mp3'},
    {name: 'Fantasy Focus4', description: 'Fantasy football advice4', link: '4fantasyfocus.mp3'},
    {name: 'Fantasy Focus5', description: 'Fantasy football advice5', link: '4fantasyfocus.mp3'}
  ];
});
