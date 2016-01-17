angular.module('WeekView.controller', [])

.controller('WeekViewCtrl', function($scope, $state, $ionicViewSwitcher) {

$scope.goTo = function(stateName) {
    $state.go(stateName)
};

$scope.WeekPlanArray = [
	{day: "MON",
	 date: "1",
	 meal: " ",
	 edit: false
	},
	{day: "TUE",
	 date: "2",
	 meal: " ",
	 edit: false
	},
	{day: "WED",
	 date: "3",
	 meal: " ",
	 edit: false
	},
	{day: "THU",
	 date: "4",
	 meal: " ",
	 edit: false
	},
	{day: "FRI",
	 date: "5",
	 meal: " ",
	 edit: false
	},
	{day: "SAT",
	 date: "6",
	 meal: " ",
	 edit: false
	},
	{day: "SUN",
	 date: "7",
	 meal: " ",
	 edit: false
	},
];
	
//console.log($scope.WeekPlanArray);

$scope.toggleEdit = function () {
	this.i.edit = !this.i.edit;
//	console.log(this.i.edit);
};
	 
});