var productDetailTemplate = require("views/productDetail"),
    productDetailController = require("controllers/productDetail"),
    productListTemplate = require("views/productList"),
    productListController = require("controllers/productList");


/**
 * Route definitions.
 *
 * @type {Array}
 */
module.exports = ['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/products', {
            template: productListTemplate,
            controller: productListController
        }).
        when('/products/:productId', {
            template: productDetailTemplate,
            controller: productDetailController
        }).
        otherwise({redirectTo: '/products'});
}];