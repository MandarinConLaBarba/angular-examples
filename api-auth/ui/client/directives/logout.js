var template = require("./templates/logout");

module.exports = ['$location', '$cookies', function($location, $cookies) {
    return {
        restrict : "E",
        replace : true,
        scope : {
            target : "@"
        },

        template : template,

        link : function(scope, element, attrs) {

            scope.submit = function() {
                delete $cookies.accessToken;
                $location.path("/");
            };

        }

    };
}];