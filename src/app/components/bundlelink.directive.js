(function () {
    'use strict';

    angular
        .module('app')
        .directive('bundlelink', bundlelink);

    bundlelink.$inject = ['API_STORAGE_URL'];

    function bundlelink(API_STORAGE_URL) {
      return {
        link: function(scope, element, attrs) {

          scope.$watch(function () {
              element.attr('href', API_STORAGE_URL + '/api/files/' + attrs['href'] + '/shared/data');
          });
        }
      }
    }

})();
