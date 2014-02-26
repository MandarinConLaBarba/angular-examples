

module.exports = ['$http', '$q', 'apiService', function($http, $q, apiService) {

    return {

        getProduct : function(productId) {

            return apiService.getRequest("/products/" + productId);

        },
        getProducts : function() {

            return apiService.getRequest("/products");

        }
    };

}];
