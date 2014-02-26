module.exports = function(grunt) {

    var clientDir = "client",
        clientStylesDir = clientDir + "/styles",
        clientViewDir = clientDir + "/views",
        clientBuildDir = "client-build",
        componentDir = "components";


    var stylusFiles = {};
    stylusFiles[clientStylesDir + "/main.css"] = clientStylesDir + "/main.styl";

    var whinyOptions = {
            stdout : true,
            stderr : true,
            failOnError : true
        },
        verboseOptions = {
            stdout : true,
            stderr : true
        };


    //Configuration
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        stylus : {
            "build-css" : {
                files: stylusFiles
            }
        },
        shell: {
            "install-bower-deps" : {
                command : 'bower update --dev',
                options : whinyOptions
            },
            "install-component-deps" : {
                command : 'component install --dev',
                options : whinyOptions
            },
            "build-components" : {
                command : 'component build --dev -o ' + clientBuildDir,
                options : whinyOptions
            },
            "build-templates" : {
                command : 'find ' + clientDir + ' -name "*.html" -exec component convert {} \\;',
                options : whinyOptions
            },
            "clean-client-build" : {
                command: 'rm -fr ' + clientBuildDir,
                options: verboseOptions
            },
            "clean-templates" : {
                command: 'find ' + clientViewDir + ' -name "*.js" -exec rm {} \\;',
                options: verboseOptions
            },
            "clean-components" : {
                command: 'rm -fr ' + componentDir,
                options: verboseOptions
            },
            "clean-css" : {
                command: 'rm ' + clientDir + '/boot/main.css',
                options: verboseOptions
            }
        }
    };

    grunt.initConfig(config);

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-shell');

    //Define tasks
    grunt.registerTask('ui-server', 'Start UI server', function() {

        var done = this.async();

        var http = require('http'),
            appFactory = require(__dirname + '/app/factory'),
            app = appFactory.buildApp();

        http.createServer(app).listen(app.get('port'), function(){
            console.log('Server started on ' + app.get('port'));
        });

    });


    var depTasks = [
        'shell:install-bower-deps',
        'shell:install-component-deps'
    ];

    var compileTasks = [
            'shell:build-templates',
            'stylus:build-css',
            'shell:build-components'];

    var buildTasks = depTasks.concat(compileTasks);

    grunt.registerTask('default', 'Build the app and run jshint', buildTasks);

    grunt.registerTask('clean',
        'Remove all the generated and unversioned files',
        [
        'shell:clean-css',
        'shell:clean-templates',
        'shell:clean-components',
        'shell:clean-client-build']);

};
