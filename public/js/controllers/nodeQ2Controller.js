angular.module('nodeQ2Controller', [])

	// inject the Countries service factory into our controller
	.controller('mainController', ['$scope','$http','Countries', function($scope, $http, Countries) {
        $scope.formData = {};
		$scope.loading = true;

		// when submitting the getpi form, send the pi to the node API
		$scope.getOneCountry = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.country != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Countries.getOneCountry($scope.formData)

					// if successful get pi, call our get function to get all the new pis
					.success(function(data) {
						$scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        if(data.error){
                            $scope.countries = data
                            $scope.countries.class = "badge-danger"
                        } else {
                            $scope.countries = data
                            $scope.countries.class = "badge-primary"
                        }
					});
			}
		};
		
		$scope.getManyCountry = function() {

			$scope.countries = []
			
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.countries != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Countries.getManyCountry($scope.formData)

					// if successful get pi, call our get function to get all the new pis
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						for(var i = 0; i < data.length; i++){
							if(data[i].error){
								$scope.countries.push({data: data[i], class : "badge-danger"})
							} 
							if(!data[i].error){
								$scope.countries.push({data: data[i], class : "badge-primary"})
							}
						}
					});
			}
		};
        
	}]);