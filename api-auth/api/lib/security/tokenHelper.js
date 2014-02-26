var jwt = require('jwt-simple'),
    jwtSecret = require('../../config/app.json').tokenSecretKey;

module.exports = {

    generate : function(payload) {

        return jwt.encode(payload, jwtSecret);

    },

    decode : function(token) {

        return jwt.decode(token, jwtSecret);

    }

};