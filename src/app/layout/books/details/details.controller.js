(function () {
    'use strict';

    angular
        .module('app')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['bookItem', 'bookBundles', 'API_STORAGE_URL'];

    function DetailsController(bookItem, bookBundles, API_STORAGE_URL) {
        var vm = this;

        vm.storageUrl = API_STORAGE_URL;
        vm.book = bookItem;
        vm.bundles = bookBundles;
    }

})();
