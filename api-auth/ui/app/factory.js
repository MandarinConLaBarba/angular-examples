
var baseDir = __dirname + "/../";

module.exports = {

    buildApp : function() {
        var express = require('express'),
            path = require('path'),
            appConfig = require(baseDir + 'config/app');

        var app = express();


        // all environments
        app.set('port', appConfig.port);
        app.set('views', baseDir + 'views');
        app.set('view engine', 'ejs');
        app.use(express.favicon(baseDir + 'client-assets/favicon.ico'));
        app.use(express.multipart());
        app.use(app.router);
        app.use(express.static(path.join(baseDir, 'client-build')));
        app.use('/assets', express.static(path.join(baseDir, 'client-assets')));
        app.use('/bower', express.static(path.join(baseDir, 'bower_components')));
        app.use(express.static(path.join(baseDir, 'components')));


        // development only
        if ('development' == app.get('env')) {
            app.use(express.errorHandler());
        }

        app.all('/api/*', require(baseDir + 'routes/apiProxy'));

        app.get('/', function(req, res) {
            res.render('index');
        });

        return app;
    }

};