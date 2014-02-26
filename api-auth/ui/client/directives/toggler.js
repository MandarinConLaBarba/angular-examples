
var template = require("./templates/toggler");

module.exports = function() {
    return {
        restrict : "A",
        scope : {
            "switch" : "="
        },

        template : template,
        transclude : true

    };
};