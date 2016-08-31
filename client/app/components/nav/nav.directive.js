function Nav() {
  return {
    templateUrl: '/app/components/nav/nav.html',
    controller: 'NavController'
  };
}

angular.module('throwcast.nav').directive('tcNav', Nav);
