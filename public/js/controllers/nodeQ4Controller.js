angular.module('nodeQ4Controller', [])

	// inject the Slot Machine service factory into our controller
	.controller('mainController', ['$scope','$http','SlotMachine', function($scope, $http, SlotMachine) {
        $scope.formData = {};
		$scope.loading = true;

		// when submitting the getpi form, send the pi to the node API
		$scope.SlotMachine = function() {

			// call the create function from our service (returns a promise object)
			SlotMachine.slotMachine()

				// if successful get pi, call our get function to get all the new pis
				.success(function(data) {
					$scope.loading = false;
					if(data.error){
						$scope.slotMachine = data
						$scope.slotMachine.class = "badge-danger"
					} else {
						$scope.slotMachine = data
						$scope.slotMachine.class = "badge-primary"
					}
				});
		};
        
	}]);