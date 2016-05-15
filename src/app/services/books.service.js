(function () {
    'use strict';

    angular
        .module('app')
        .factory('BooksService', BooksService);

    BooksService.$inject = ['Catalog', 'Book', 'Bundles', 'API_DS_URL'];

    function BooksService(Catalog, Book, Bundles, API_DS_URL) {
        var service = {};

        service.GetList = GetList;
        service.GetById = GetById;
        service.GetBundlesByBookId = GetBundlesByBookId;
        service.GetBundleById = GetBundleById;

        return service;

        function GetList() {
            return Catalog.get();
        }

        function GetById(id) {
            return Book.get({id: id});
        }

        function GetBundlesByBookId(id) {
            return Bundles.get({id: id});
        }

        function GetBundleById(id) {
            return Bundle.get({id: id});
        }

    }

})();
