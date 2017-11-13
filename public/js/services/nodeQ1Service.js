angular.module('nodeQ1Service', [])

	// super simple service
	// each function returns a promise object 
	.factory('Pis', ['$http',function($http) {
		return {
			postPi : function(piData) {
				return $http.post('/api/pi', piData);
			}
		}
	}]);