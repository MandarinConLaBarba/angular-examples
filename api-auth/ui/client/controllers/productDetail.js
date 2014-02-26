
var controller = function($scope,
                          $q,
                          $routeParams,
                          productService) {

    var productId = $routeParams.productId;

    $scope.$broadcast('loading-started', 'product');

    productService.getProduct(productId)
        .then(function(product) {
            $scope.product = product;
            $scope.$broadcast('loading-complete', 'product');
        });



};

module.exports = [
    '$scope',
    '$q',
    '$routeParams',
    'productService',
    controller];
