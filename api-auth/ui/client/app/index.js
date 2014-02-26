
module.exports = {
    buildApp : function(appName) {

        angular.module('controllers', [])
            .controller('appController', require("controllers/app"))
            .controller('productDetailController', require("controllers/productDetail"))
            .controller('productListController', require("controllers/productList"));

        angular.module('services', [])
            .factory('apiService', require("services/api"))
            .factory('loginService', require("services/login"))
            .factory('productService', require("services/product"));

        var app = angular.module(appName, [
            'ngRoute',
            'ngAnimate',
            'ngCookies',
            'http-auth-interceptor',
            'controllers',
            'services']);

        app.config(require("./config/routes"));
        app.config(require("./config/loadingHttpInterceptor"));

        app.directive('fxFadeIn', require('directives/effects/fadeIn'));
        app.directive('error', require('directives/error'));
        app.directive('success', require('directives/success'));
        app.directive('loading', require('directives/loading'));
        app.directive('toggler', require('directives/toggler'));
        app.directive('login', require('directives/login'));
        app.directive('logout', require('directives/logout'));

        return app;

    }
};

