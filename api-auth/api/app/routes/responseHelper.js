var Promise = require('bluebird');

module.exports = {

    handle : function(promise, res) {

        Promise.cast(promise)
            .then(function(value) {
                //success
                res.send(value);
            },
            function(reason) {
                //failure
                res.send(500, reason);
            });

    }

};