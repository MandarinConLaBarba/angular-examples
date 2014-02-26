var Promise = require('bluebird'),
    _ = require('underscore');

var fakeProducts = [
    {
        id : 1,
        name : "Samsung galaxy S3",
        description : "Lorem.."

    },
    {
        id : 2,
        name : "Nexus 5",
        description : "Lorem.."

    },
    {
        id : 3,
        name : "Nokia Whatever",
        description : "Lorem.."

    },
    {
        id : 4,
        name : "iPhone 5",
        description : "Lorem.."

    },
    {
        id : 1,
        name : "iPhone 5s",
        description : "Lorem.."

    }];

module.exports = {

    get : function(productId) {
        return new Promise(function(resolve, reject) {
            var found = _.find(fakeProducts, function(product) {
                return product.id == productId;
            });
            if (found) {
                resolve(found);
            } else {
                reject();
            }

        });
    },

    getAll : function() {
        return new Promise(function(resolve, reject) {

            resolve(fakeProducts);
        });
    }
};