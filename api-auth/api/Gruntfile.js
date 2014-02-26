var _ = require('underscore');

module.exports = function(grunt) {

    var config = {
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.initConfig(config);


    grunt.registerTask('api-server', 'Starts the API server', function() {
        var done = this.async();

        var apiFactory = require('./app/factory'),
            http = require('http');

        process.on('uncaughtException', function (err) {
            var msg = err instanceof Error ? err.stack : err.toString();
            msg = "Caught uncaughtException, app exiting: " + msg;
            console.log(msg);
            process.exit(1);
        });

        var app = apiFactory.create();

        http.createServer(app).listen(app.get('port'), function () {
            console.log('Started server on ' + app.get('port') + ' in ' + app.settings.env + ' mode');
        });

    });

};
