#Panel Toggler

Here's a useful directive for toggling content visibility. The key here is the '=' value used in the isolate scope for the
'switch' property of the 'toggler' directive. This allows for 2-way data-binding between the directive and the parent scope. To simplify
the example, I've made use of the ng-init property to demonstrate how to initialize the state of the content pane (visible or not), but the
Angular documentation recommends you initialize these values in the controller.