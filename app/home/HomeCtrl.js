angular.module('app').controller('HomeCtrl', ['$scope', function($scope){
	home = this;
	console.dir(home);
	console.log('Home Page start');
	home.welcomeMessage = "Home PAge Welcome!";
}])