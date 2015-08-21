angular.module('app').controller('HomeCtrl',[ '$scope', 'UserManagement', function($scope, um) {
    $scope.welcomeMessage = 'Home Controller';
    this.user = 'Ted';

    console.log(um);
}]);