'use strict';

/* Controllers */

// function SearchCtrl($scope, $http) {
// 	$scope.typeahead = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
// 	$scope.typeaheadFn = function(query) {
// 		return $.map($scope.typeahead, function(country) {
// 			return country + '_1';
// 		});
// 	}



  // $http.get('phones/phones.json').success(function(data) {
  //   $scope.phones = data;
  // });

  // $scope.orderProp = 'age';
// }

// SearchCtrl.$inject = ['$scope', '$http'];



// typeahead: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
// <!-- Function defined in your controller -->
// $scope.typeaheadFn = function(query) {
// return $.map($scope.typeahead, function(country) {
// return country + '_1';
// });
// }
 
// <!-- Async function defined in your controller -->
// $scope.typeaheadFn = function(query, callback) {
// $http.get('/stations/autocomplete?term='+query).success(function(stations) {
// callback(stations); // This will automatically open the popup with retrieved results
// });
// }