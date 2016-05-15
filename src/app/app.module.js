(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngMaterial', 'ngResource'])
        .run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope) {

      $rootScope.$on('$routeChangeError',
        function(event, current, previous, rejection) {
            var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) || 'unknown target';
            var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
            console.log(msg);
        }
      );
    }

})();
