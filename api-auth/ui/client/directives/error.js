var template = require("./templates/error");

module.exports = [
    function() {
        return {
            template : template,
            replace : true
        };
    }];