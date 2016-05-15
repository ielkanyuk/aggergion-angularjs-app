(function () {
    'use strict';

    angular
        .module('app')
        .constant('API_DS_URL', 'https://ds.aggregion.com')
        .constant('API_STORAGE_URL', 'https://storage.aggregion.com')
        .constant('BOOK_NO_IMAGE_ID', '12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider' ,'$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('httpResponseInterceptor');

        $urlRouterProvider.otherwise("/404");

        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: '/app/layout/books/list/list.html',
                controller: 'ListController',
                controllerAs: 'vm',
                resolve: {
                    booksList: booksListPrepService
                 }
            })
            .state('details', {
                url: "/book/:id",
                templateUrl: '/app/layout/books/details/details.html',
                controller: 'DetailsController',
                controllerAs: 'vm',
                resolve: {
                    bookItem: bookItemPrepService,
                    bookBundles: bookBundlesPrepService
                 }
            })
            .state('404', {
                url: "/404",
                templateUrl: '/app/layout/404.html'
            })
            .state('400', {
                url: "/400",
                templateUrl: '/app/layout/400.html'
            });
    }

    booksListPrepService.$inject = ['BooksService'];
    function booksListPrepService(BooksService) {
        return BooksService.GetList();
    }

    bookItemPrepService.$inject = ['$stateParams', 'BooksService'];
    function bookItemPrepService($stateParams, BooksService) {
        return BooksService.GetById($stateParams.id);
    }

    bookBundlesPrepService.$inject = ['$stateParams', 'BooksService'];
    function bookBundlesPrepService($stateParams, BooksService) {
        return BooksService.GetBundlesByBookId($stateParams.id);
    }

})();
