(function () {
    'use strict';

    angular
        .module('app')
        .directive('previewvideo', previewvideo);

    previewvideo.$inject = ['API_STORAGE_URL'];

    function previewvideo(API_STORAGE_URL) {
      return {
        link: function(scope, element, attrs) {

          scope.$watch(function() {
              return element.attr('src', API_STORAGE_URL + '/api/files/' + attrs['src'] + '/shared/data');
            });
        }
      }
    }

})();
