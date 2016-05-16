(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['booksList'];

    function ListController(booksList) {
        var vm = this;
        vm.booksList = [];
        
        vm.booksList = booksList;
    }

})();
