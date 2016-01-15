angular.module('W4D.controllers', [])

.controller('WeekViewCtrl', function($scope) {})

.controller('DayViewCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //
  
  var today = new Date();
  var dd = today.getDate();
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  } 

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  var d = new Date();
  var month = monthNames[d.getMonth()];

  today = dd+' ' + month + ' ' + yyyy;
  
  $scope.today = "today: " + today;
  $scope.endDate = "departure: 24 February 2016";

  var end = new Date('02/24/2016 00:00 AM');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {

          clearInterval(timer);
          document.getElementById('countdown').innerHTML = 'EXPIRED!';

          return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown').innerHTML = days + 'days ';
      document.getElementById('countdown').innerHTML += hours + 'hrs ';
      document.getElementById('countdown').innerHTML += minutes + 'mins ';
      document.getElementById('countdown').innerHTML += seconds + 'secs';
  }

  timer = setInterval(showRemaining, 1000);

})

.controller('WeekListCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
