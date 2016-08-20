

var mymodal = angular.module('food', ['ngRoute']);
	
	mymodal.config(function($routeProvider){	
		$routeProvider.when('/',{
			templateUrl : 'menu/menuView.html',
			controller :  'menu'
		})
		.when('/category/:category',{
			templateUrl: 'order/foodOptionsView.html',
			controller: 'order'
		})
		.when('/subscribe',{
			templateUrl: 'subscribe/subscribeView.html',
			controller: 'subscribe'
		})
		.when('/foodCart',{
			templateUrl: 'foodcart/foodcartView.html',
			controller: 'cart'
		});
	});

	mymodal.controller('home', function($scope, $rootScope, sharedService){
		$scope.isSelected='home';
		$rootScope.$on("setMenu", function(event, menu){
           $scope.selectedMenu(menu);
        });
		$scope.selectedMenu= function(menuItem){
			console.log(menuItem);
			this.isSelected=menuItem;
		}
	});
	