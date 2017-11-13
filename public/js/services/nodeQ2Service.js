angular.module('nodeQ2Service', [])

	// super simple service
	// each function returns a promise object 
	.factory('Countries', ['$http',function($http) {
		return {
			getOneCountry : function(countryData) {
				return $http.post('/api/country', countryData);
			},
			getManyCountry : function(countryData) {
				return $http.post('/api/countries', countryData);
			}
		}
	}]);