var express = require('express'),
    passport = require('passport'),
    config = require('../config/app.json'),
    path = require('path');

function applyBaseMiddleware(app) {

    // Configuration
    app.configure('development', function () {
        app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
    });

    app.configure('production', function () {
        app.use(express.errorHandler({ showMessage:true, showStack:false }));
    });

    app.set('port', config.port);
    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(passport.initialize());
    app.use(app.router);

}

function applyAuthStrategies() {

    passport.use(require(__dirname + '/./middleware/auth/localFactory').build());
    passport.use(require(__dirname + '/./middleware/auth/bearerFactory').build());

}


function route(path) {
    return require(__dirname + "/routes/" + path);
}


function applyRoutes(app) {

    var defaultMiddleware = [];

    app.get('/', function(req, res) {
        res.send("I'm an API.");
    });

    app.post('/auth',
        passport.authenticate('local', { session: false }),
        route('auth/post'));

    var protectedResourceMiddleware = defaultMiddleware.concat([
        passport.authenticate('bearer', { session: false })
    ]);

    app.get('/products/:productId',
        protectedResourceMiddleware, route('product/get'));
    app.get('/products', protectedResourceMiddleware, route('product/getAll'));



}

module.exports = {
    create : function() {

        var app = express();

        applyBaseMiddleware(app);
        applyAuthStrategies();
        applyRoutes(app);

        return app;
    }
};