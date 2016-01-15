angular.module('WeekList.controller', [])

.controller('WeekListCtrl', function($scope, $state) {

$scope.goTo = function(stateName) {
    $state.go(stateName)
};

});
