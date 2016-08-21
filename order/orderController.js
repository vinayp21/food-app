mymodal.controller("order", function($scope, $rootScope, $routeParams, $location, $window, sharedService, menuService, orderService){
	$scope.count=0;
	$scope.order=orderService.getOrders();
	$scope.isOrdered=orderService.isOrderAvailable();
$scope.category = $routeParams.category;
$scope.selected=sharedService.getCurrentTab();
$scope.init=function(){
     $scope.sum = $scope.calculateTotal(orderService.getOrders());
 };
$rootScope.TotalAmount=$scope.sum;
menuService.getFoodOptionsByCategory($routeParams.category).then(function(data){

	$scope.foodByCategory=data.foodOptions;
	orderService.getOrders().forEach(function(o){
		$scope.foodByCategory.forEach(function(d){
			if(d.name===o.orderName){
				d.count=o.orderCount;
			}
		});	
	});

});


$scope.menuSelected= function(tab){
	$scope.selected=tab;
	sharedService.setCurrentTab(tab);
	$location.path( "/" );
};
$scope.minusCount= function(item){
	if(item.count!= 0){
		$scope.order.forEach(function(d, i){
			if(d.orderName===item.name){
				if(d.orderCount===1){
					 $scope.order.splice(i, 1);;
				}else{
					d.orderCount--;	
					d.totalPrice=d.totalPrice-d.orderPrice;
				}
				
			}
		});
		item.count=item.count-1;
	}
	$scope.isOrdered=orderService.isOrderAvailable();
	$scope.sum=this.calculateTotal($scope.order);
};
$scope.addCount= function(item){

	item.count=item.count+1;
	if(item.count===1){
	var orderObj={
		orderName: item.name,
		orderPrice: item.price,
		orderCount: item.count,
		totalPrice: item.price
		}	
		$scope.order.push(orderObj);
		orderService.addOrders($scope.order);
	}else{
		var flag=0;
		$scope.order.forEach(function(d){
			if(item.name===d.orderName){
				flag=1;
				d.orderCount++;
				d.totalPrice=d.totalPrice+d.orderPrice;
			}
		});
			if(flag===0){
				var orderObj={
				orderName: item.name,
				orderPrice: item.price,
				orderCount: item.count
				}	
				$scope.order.push(orderObj);
				orderService.addOrders($scope.order);

			}
	}
	$scope.isOrdered=orderService.isOrderAvailable();
	$scope.sum=this.calculateTotal($scope.order);
};
$scope.calculateTotal= function(orderList){
	var  sum=0;
	orderList.forEach(function(t){
		sum+=t.totalPrice;
	});
	$rootScope.TotalAmount=sum;
	return sum;
};

});