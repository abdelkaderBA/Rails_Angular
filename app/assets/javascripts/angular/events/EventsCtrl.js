var app = angular.module('RailsAngular', []);

app.controller('EventsCtrl', ['$scope', function ($scope) {

    $scope.events = [

        {
            name: 'François DUPONT',
            startDate: '06/12/2017',
            endDate: '08/12/2017'
        },

        {
            name: 'Karine HUBERT',
            startDate: '06/12/2017',
            endDate: '08/12/2017'
        },

        {
            name: 'Alexandre',
            startDate: '06/12/2017',
            endDate: '08/12/2017'
        }

    ];
}]);

/* app.controller('EventsCtrl', function ($scope, $http) {
  $http({
    method: 'GET',
    url: './employees.json'
  }).then(function (response) {
    $scope.events = response;
  }, function (error) {
  });
}); */