var tokenHelper = require('../../../lib/security/tokenHelper'),
    responseHelper = require('../responseHelper');

module.exports = function(req, res) {

    var token = tokenHelper.generate({
        id : req.user.id
    });

    responseHelper.handle({
        token : token
    }, res);

};