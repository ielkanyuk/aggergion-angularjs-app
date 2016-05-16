(function () {
    'use strict';

    angular
        .module('app')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['bookItem', 'bookBundles'];

    function DetailsController(bookItem, bookBundles) {
        var vm = this;
        vm.bundles = [];

        vm.book = bookItem;
        vm.bundles = bookBundles;
    }

})();
