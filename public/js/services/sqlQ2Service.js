angular.module('sqlQ2Service', [])

	// super simple service
	// each function returns a promise object 
	.factory('DataBase', ['$http',function($http) {
		return {
			dataBase : function() {
				return $http.post('/api/dataBase');
			}
		}
	}]);