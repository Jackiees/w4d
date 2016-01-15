angular.module('WeekView.controller', [])

.controller('WeekViewCtrl', function($scope, $state, $ionicViewSwitcher) {

$scope.goTo = function(stateName) {
    $state.go(stateName)
 }
	 
});