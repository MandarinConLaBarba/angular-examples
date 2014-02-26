
/**
 * Creates a loading indicator
 *
 * Will display as loading when 'loading-started' event is fired
 * Will be hidden when 'loading-complete' event is fired
 * If target attribute is provided on the element, will only respond to events where the target is passed.
 *
 *
 * @returns {{restrict: string, replace: boolean, scope: {target: string}, template: string, link: Function}}
 */
module.exports = function() {
    return {
        restrict : "E",
        replace : true,
        scope : {
            target : "@"
        },

        template : "<div class=\"loading-curtain\"><div class=\"loading\">Loading {{target}}...</div></div>",

        link : function(scope, element, attrs) {

            scope.$on("loading-started", function(e, target) {
                if (attrs.target === target) {
                    element.css({"display" : ""});
                }
            });
            scope.$on("loading-complete", function(e, target) {
                if (attrs.target === target) {
                    element.css({"display" : "none"});
                }
            });
      }

    };
};