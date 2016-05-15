(function () {
    'use strict';

    angular
        .module('app')
        .factory('httpResponseInterceptor', httpResponseInterceptor);

    httpResponseInterceptor.$inject = ['$q', '$location', '$window'];

    function httpResponseInterceptor($q, $location, $window) {
      return {
          response: function(response){
              if (response.status === 404) {
                  $window.location = '/404';
              }
              if (response.status === 400) {
                  $window.location = '/400';
              }
              return response || $q.when(response);
          },
          responseError: function(rejection) {
              if (rejection.status === 404) {
                  $window.location = '/404';
              }
              if (rejection.status === 400) {
                  $window.location = '/400';
              }
              return $q.reject(rejection);
          }
      }
    }

})();
