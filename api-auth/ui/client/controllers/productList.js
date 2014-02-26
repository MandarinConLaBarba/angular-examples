
var controller = function($scope,
                          $q,
                          $location,
                          $routeParams,
                          productService) {

    $scope.$broadcast('loading-started', 'products');

    productService.getProducts()
        .then(function(products) {
            $scope.products = products;
        })
        .finally(function() {
            $scope.$broadcast('loading-complete', 'products');
        });


    $scope.viewProduct = function(id) {
        $location.path("/products/" + id);
    };

};

module.exports = [
    '$scope',
    '$q',
    '$location',
    '$routeParams',
    'productService',
    controller];
