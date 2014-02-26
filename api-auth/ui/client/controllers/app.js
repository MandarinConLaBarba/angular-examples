

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.title = "Products!";

    $scope.loggedIn = true;

    $scope.$on('event:auth-loginRequired', function() {
        $rootScope.$broadcast('loading-complete');
        $scope.loggedIn = false;
    });
    $scope.$on('event:auth-loginConfirmed', function() {
        $scope.loggedIn = true;
    });


}];
