angular.module('nodeQ1Controller', [])

	// inject the Pis service factory into our controller
	.controller('mainController', ['$scope','$http','Pis', function($scope, $http, Pis) {
        $scope.formData = {};
		$scope.loading = true;

		// when submitting the getpi form, send the pi to the node API
		$scope.postPis = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.pi != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Pis.postPi($scope.formData)

					// if successful get pi, call our get function to get all the new pis
					.success(function(data) {
						$scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        if(data.error){
                            $scope.pis = data
                            $scope.pis.class = "badge-danger"
                        } else {
                            $scope.pis = data
                            $scope.pis.class = "badge-primary"
                        }
					});
			}
        };
        
	}]);