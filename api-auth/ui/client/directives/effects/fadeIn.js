
/**
 * Creates a fade-in effect for any element w/ the attribute
 *
 * NOTE: If 'fx-trigger' attribute is also present on element,
 * the directive will only act when an event matching value of fx-trigger is fired.
 * NOTE: If 'fx-target' attribute is also present on the element,
 * the directive will only act when the value of fx-target is truthy.
 *
 * @returns {Function}
 */
module.exports = function() {
    return function(scope, element, attrs) {
        element.css({ 'position': 'relative' });

        function effect() {
            TweenLite.from(element, 1, {
                'opacity' : 0,
                'left' : '+=20px',
                'top' : '+=20px'
            });
        }

        if (attrs.fxTrigger) {
            scope.$on(attrs.fxTrigger, function(e, target) {
                if ((attrs.fxTarget && attrs.fxTarget === target) || !attrs.fxTarget) {
                    effect();
                }
            });
        } else {
            effect();
        }

    };
};