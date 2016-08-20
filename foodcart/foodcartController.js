mymodal.controller('cart', function($scope,$rootScope, $controller, orderService, sharedService){
	$scope.init=function(){
    	$rootScope.$broadcast("setMenu", 'cart');
	};

$scope.isCartEmpty=false;
$scope.total=$rootScope.TotalAmount;
$scope.getAllOrders=orderService.getOrders();
$scope.isSelected="cart";
if($scope.getAllOrders.length===0){
	$scope.isCartEmpty=true;
}

});