(function () {
    'use strict';

    angular
        .module('app')
        .factory('Bundles', Bundles);

    Bundles.$inject = ['$resource', 'API_DS_URL'];

    function Bundles($resource, API_DS_URL) {
      return $resource(API_DS_URL + '/api/public/catalog/:id/bundles', {id: '@id'}, {
            get: {
                method: 'GET',
                isArray: true
            }
          });
    }

})();
