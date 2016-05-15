(function () {
    'use strict';

    angular
        .module('app')
        .factory('Book', Book);

    Book.$inject = ['$resource', 'API_DS_URL'];

    function Book($resource, API_DS_URL) {
      return $resource(API_DS_URL + '/api/public/catalog/:id', {id: '@id'});
    }

})();
