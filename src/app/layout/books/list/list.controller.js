(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController(booksList) {
        var vm = this;
        vm.booksList = [];

        vm.booksList = booksList;
    }

})();
