var template = require("./templates/login");

module.exports = ['loginService', 'authService', '$cookies', function(loginService, authService, $cookies) {
    return {
        restrict : "E",
        replace : true,
        scope : {
            target : "@"
        },

        template : template,

        link : function(scope, element, attrs) {

            scope.submit = function() {
                loginService.login(scope.username, scope.password)
                    .then(function(payload) {
                        $cookies.accessToken = payload.token;
                        authService.loginConfirmed(payload, function(config) {
                            config.url = [config.url, "?access_token=", payload.token].join("");
                            return config;
                        });
                    },
                    function() {
                        scope.error = {
                            message : "Authentication failed."
                        };
                    });
            };

        }

    };
}];