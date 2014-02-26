var BearerStrategy = require('passport-http-bearer').Strategy,
    Promise = require('bluebird'),
    tokenHelper = require('../../../lib/security/tokenHelper');

module.exports = {
    build : function() {
        return new BearerStrategy(this.verifier);
    },
    verifier : function(token, done) {

        var promise = new Promise(function(resolve, reject) {
            if (!token) {
                return reject();
            }
            var user = tokenHelper.decode(token);
            if (user && user.id) {
                return resolve(user);
            } else {
                return reject();
            }
        });

        promise.then(function(user) {
            done(null, user, {scope : 'all'});
        }, function(reason) {
            if (reason) {
                //TODO: log?
            }
            done(null, false);

        });

    }
};