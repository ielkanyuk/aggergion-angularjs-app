(function () {
    'use strict';

    angular
        .module('app')
        .directive('previewimg', previewimg);

    previewimg.$inject = ['API_STORAGE_URL', 'BOOK_NO_IMAGE_ID'];

    function previewimg(API_STORAGE_URL, BOOK_NO_IMAGE_ID) {
      return {
        link: function(scope, element, attrs) {

          scope.$watch(attrs.ngsrc, function (value) {
              if (!value) {
                element.attr('src', API_STORAGE_URL + '/api/files/' + BOOK_NO_IMAGE_ID + '/shared/data');
              }

              element.attr('src', API_STORAGE_URL + '/api/files/' + attrs['ngSrc'] + '/shared/data');
          });

          element.bind('error', function() {
            element.attr('src', API_STORAGE_URL + '/api/files/' + BOOK_NO_IMAGE_ID + '/shared/data');
          });
        }
      }
    }

})();
