(function () {
    'use strict';

    angular
        .module('app')
        .factory('BooksService', BooksService);

    BooksService.$inject = ['Catalog', 'Book', 'Bundles'];

    function BooksService(Catalog, Book, Bundles) {
        var service = {};

        service.GetList = GetList;
        service.GetById = GetById;
        service.GetBundlesByBookId = GetBundlesByBookId;

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

    }

})();
