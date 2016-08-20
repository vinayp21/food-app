mymodal.controller("menu", function($scope, $http, $routeParams, $location, menuService, sharedService, orderService){
		$scope.category = $routeParams.category;
		$scope.selected="food";
		$scope.selected=sharedService.getCurrentTab();
		menuService.getAllFoodOptions().then(function(data){
			
			$scope.foodMenu = data.foodCategoryOptions;
			$scope.snacksMenu = data.snacksOptions;
			$scope.homeMade = data.homeMadeOptions;
		});	
		$scope.menuSelected= function(tab){
			$scope.selected=tab;
			sharedService.setCurrentTab(tab);
		};
		
		
	});




	