angular.module('DayView.controller', [])

.controller('DayViewCtrl', function($scope, $state,$stateParams) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //
	
  $scope.meal = $stateParams.obj;

  $scope.goTo = function(stateName) {
    $state.go(stateName)
  };

});