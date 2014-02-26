var LocalStrategy = require('passport-local').Strategy;

module.exports = {

    build : function() {
        return new LocalStrategy(this.verifier);
    },

    verifier : function(username, password, done) {

        //Just using hard-coded values...in reality you'd authenticate the user against a user db or something like that..

        if (username === "mandarin" && password === "angular") {
            done(null, {
                id : 1
            });
        } else {
            done(null, false, {
                message : 'Invalid credentials'
            });
        }

    }

};

