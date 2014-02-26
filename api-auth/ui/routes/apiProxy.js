
var httpProxy = require('http-proxy'),
    appConfig = require('../config/app'),
    proxy = new httpProxy.RoutingProxy();

module.exports = function(req, res){

    req.url = req.url.replace("/api", "");

    var proxyOptions = {
        host: appConfig.api.host,
        port: appConfig.api.port
    };

    proxy.proxyRequest(req, res, proxyOptions);
};

