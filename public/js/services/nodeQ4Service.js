angular.module('nodeQ4Service', [])

	// super simple service
	// each function returns a promise object 
	.factory('SlotMachine', ['$http',function($http) {
		return {
			slotMachine : function() {
				return $http.post('/api/slotMachine');
			}
		}
	}]);