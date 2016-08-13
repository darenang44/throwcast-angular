angular.module('throwcast.queue')

.controller('QueueController', function ($scope, $http) {
  $scope.h1 = 'Podcast Queue';
  $scope.podcastQueue = [{
     title: 'Weekly Roundup: Thursday, August 11',
     link: 'http://play.podtrac.com/npr-510310/npr.mc.tritondigital.com/NPR_510310/media/anon.npr-mp3/npr/nprpolitics/2016/08/20160811_nprpolitics_roundup811.mp3?orgId=1&d=2800&p=510310&story=489697072&t=podcast&e=489697072&ft=pod&f=510310',
     description: 'Weekly Round-up 8/11',
     pubDate: 'Thu, 04 Aug 2016 20:52:00 -0400',
     imageUrl: '',
     station: '',
    }, {
     title: 'Quick Take: Trump and the Khans',
     link: 'http://play.podtrac.com/npr-510310/npr.mc.tritondigital.com/NPR_510310/media/anon.npr-mp3/npr/nprpolitics/2016/08/20160801_nprpolitics_trumpandkhans.mp3?orgId=1&d=1309&p=510310&story=487884753&t=podcast&e=487884753&ft=pod&f=510310',
     description: 'Khans and Trump',
     pubDate: 'Mon, 08 Aug 2016 01:00:02 -0400',
     imageUrl: '',
     station: '',
    }, {
     title: '08/12 Fantasy Football Podcast: Handcuffs, 2-QB Leagues, Thursday Winners and Losers',
     link: 'http://cstvpodcast.cstv.com.edgesuite.net/fantasyplaybook/081216_fantasyfootball_podcast.mp3',
     description: 'About Qbs',
     pubDate: 'Fri, 12 Aug 2016 13:40:13 -0400',
     imageUrl: '',
     station: '',
    }, {
     title: '08/11 Fantasy Football Podcast: Running Backs Preview Part Two',
     link: 'http://cstvpodcast.cstv.com.edgesuite.net/fantasyplaybook/081116_fantasyfootball_podcast.mp3',
     description: 'About Rbs',
     pubDate: 'Mon, 08 Aug 2016 01:00:02 -0400',
     imageUrl: '',
     station: '',
  }];
  $scope.link = $scope.podcastQueue[0].link;
  // TODO: maybe just use the getPodcast endpoint to podcast
  $scope.getQueue = function (userId) {
    $http.get('http://localhost:8888/api/user/' + userId + '/queue/').then(function (res) {
      $scope.queue = res.data;
    });
  };
  $scope.getQueue();

  $scope.deleteFromQueue = function (userId, podcastId) {
    $http.delete('http://localhost:8888/api/user/' + userId + '/queue/' + podcastId).then(function (res) {
      $scope.getQueue();
    });
  };

  $scope.play = function (index) {
    $scope.link = $scope.podcastQueue[index].link;
  };
});
