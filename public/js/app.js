(function(){

	'use strict';

	app.goeuro = angular.module('goeuro', ['$strap.directives']);

	// Getting user's location may take 6-7 seconds. If user select cities before that, ordering by distance to user will be skipped
	app.fn.getCurrentPosition();

	/**
	 * Angular Controller SearchCtrl
	 */
	app.goeuro.controller('SearchCtrl', ['$scope','$http','$q', function($scope, $http, $q) {
		// Initialize flight object
		$scope.flight = {};

		// Auto complete input with list of cities
		$scope.listCity = function(query, process) {
			$http.get('/api/v1/suggest/position/en/name/'+query).success(function(data) {
			// $http.get('_sandbox/ang/public/data.php?'+query).success(function(data) {
				
				var results = data.results, cities = [];

	 			// Check if location has been fetched
	 			if( app.userLatitude && app.userLongitude ) {
	 				var location = [];
	 				for (var i=0; i<results.length; i++) {
						location[i]             = {};
						location[i]["_id"]     	= results[i]._id;
						location[i]["name"]     = results[i].name;
						location[i]["distance"] = app.fn.distance(app.userLatitude, app.userLongitude, results[i].geo_position.latitude, results[i].geo_position.longitude);
	 				}

	 				// Ordered by distance to the user's current location
	 				location.sort(function(a,b) {
					  	return a.distance - b.distance;
					});

					angular.forEach(location, function(key, value) {
						app.mapped[key.name] = key._id;
						cities.push(key.name);
					});				
	 			} else {
					angular.forEach(results, function(key, value) {
						app.mapped[key.name] = key._id;
						cities.push(key.name);
					});
	 			}
				process(cities);
			});
		}

		// Set id on selected city when typeahead-updated is fired
		$scope.$on('typeahead-updated', function(event, value) {
			value && value in app.mapped &&	(event.targetScope.flight.from == value && value == event.targetScope.flight.to ? $scope.flight.id_from = $scope.flight.id_to = app.mapped[value] : value == event.targetScope.flight.from ? $scope.flight.id_from = app.mapped[value] : value == event.targetScope.flight.to ? $scope.flight.id_to = app.mapped[value] : "");
		});

		// Clicking on the "search" button should display a "Search is not yet implemented" message to the user.
		$scope.submit = function(flight, searchForm) {
			searchForm.$valid && ($scope.result = "Search is not yet implemented");
			flight.date = app.fn.formattedDate(flight.date);
			console.log(flight);
		}

	}]);

	app.goeuro.directive('dateValidate', [function() {
	    return {
	        require: 'ngModel',
	        link: function(scope, elm, attrs, ctrl) {
	            ctrl.$parsers.unshift(function(viewValue) {
					var dateValue = "";
	            	viewValue && (dateValue = app.fn.formattedDate(viewValue));

	                scope.dateRequired = (dateValue && dateValue.length >= 1 ? 'valid' : undefined);
	                scope.dateFormat = (dateValue && /\d\d\/\d\d\/\d\d\d\d/.test(dateValue)) ? 'valid' : undefined;

	                if(scope.dateRequired && scope.dateFormat) {
	                    ctrl.$setValidity('date', true);
	                    return viewValue;
	                } 

	                ctrl.$setValidity('date', false);                    
	                return undefined;
	            });
	        }
	    };
	}]);

})();