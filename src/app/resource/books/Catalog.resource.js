(function () {
    'use strict';

    angular
        .module('app')
        .factory('Catalog', Catalog);

    Catalog.$inject = ['$resource', 'API_DS_URL'];

    function Catalog($resource, API_DS_URL) {
      return $resource(API_DS_URL + '/api/public/catalog', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
          });
    }

})();
