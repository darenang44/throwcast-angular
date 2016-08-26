var PROTOCOL = 'https://';
var DOMAIN = 'api.throwcast.com';

angular.module('throwcast.constants', [])
  .constant('PROTOCOL', PROTOCOL)
  .constant('DOMAIN', DOMAIN)
  .constant('API_BASE', PROTOCOL + DOMAIN);
