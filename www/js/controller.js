var app = angular.module('app.controllers', []);

// Init controller for home page
app.controller('ctrlHome', function($scope, $state, ServiceLoader) 
{	
	$scope.submit = function(input)
	{
		if(input === null || input === "" || input === undefined)
		{
			ServiceLoader.showDialog("Enter number");
		}
		else
		{
			$state.go('result', {number: input});
			$scope.default();
		}
	};
	
	$scope.default = function()
	{
		$scope.input = "";
	};
	
});
// Init controller for result page
app.controller('ctrlResult', function($scope, $state) 
{
	$scope.number = $state.params.number;
	$scope.result = "";
	
	$scope.calculate = function()
	{
		var f = 0;
		
		for(var i = 2; i < $scope.number / 2; ++i)
		{
			if($scope.number % i == 0)
			{
				f = 1; break;
			}
		}
		if(f == 0) $scope.result = " a prime number";
		else $scope.result = "not a prime number";
	};
	
	$scope.calculateAgain = function()
	{
		$state.go('home');
	};
	$scope.calculate();
});