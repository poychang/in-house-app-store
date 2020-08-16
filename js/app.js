(function ($) {
    'use strict';
    angular.module('app', [])
        .config([
            '$compileProvider',
            function ($compileProvider) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|itms-services):/);
                // 正式環境可將 debugInfoEnabled 設定成 false，執行效能會更好
                $compileProvider.debugInfoEnabled(false);
            }
        ]);

    angular.module('app').controller('appStore', appStore);
    appStore.$inject = ['$http'];
    function appStore($http) {
        /* jshint validthis: true */
        var vm = this;

        $http.get('js/data.json')
            .then(function (result) {
                vm.data = result.data;
                console.log(vm.data);
                return result;
            });
    }

    angular.module('app')
        .directive('repeatItemDirective', function ($timeout) {
            return function (scope, element, attrs) {
                $timeout(function () {
                    $('#Container').mixItUp({
                        load: {
                            filter: '.apple'
                        }
                    });
                }, 500);
            };
        });
})(jQuery);
