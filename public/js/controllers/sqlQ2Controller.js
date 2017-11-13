angular.module('sqlQ2Controller', [])

	// inject the Slot Machine service factory into our controller
	.controller('mainController', ['$scope','$http','DataBase', function($scope, $http, DataBase) {
        $scope.formData = {};
		$scope.loading = true;

		// when submitting the getpi form, send the pi to the node API
		$scope.DataBase = function() {

			// call the create function from our service (returns a promise object)
			DataBase.dataBase()

				// if successful get pi, call our get function to get all the new pis
				.success(function(data) {
					$scope.loading = false;
					if(data.error){
						$scope.dataBase = data.message
						$scope.dataBase.class = "badge-danger"
					} else {
						$scope.dataBase = data.message
						$scope.dataBase.class = "badge-primary"
					}
				});
		};
        
	}]);