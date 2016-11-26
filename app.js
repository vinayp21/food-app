

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

	mymodal.controller('home', function($scope, $rootScope, sharedService, orderService){
		$scope.isSelected='home';
		$rootScope.$on("setMenu", function(event, menu){
           $scope.selectedMenu(menu);
        });
        $scope.$watch(function(){
        	if(orderService.getOrders().length===0){
			$scope.isCartEmpty=true;
			}else{
			$scope.isCartEmpty=false;
			}
        });
		
		$scope.selectedMenu= function(menuItem){
			console.log(menuItem);
			this.isSelected=menuItem;
		};
		
	});
	
	mymodal.controller('login', function($scope,loginUsers){
		$scope.loginSubmit= function(){
			loginUsers.validateUser($scope.user.email, $scope.user.pwd);
		};
		$scope.clear=function(){
			$scope.user.pwd='';
			$scope.user.email='';
		};

	});