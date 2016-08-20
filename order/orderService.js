mymodal.service('orderService', function($http){
	var orderedFoodData=[];
	return{
		addOrders: function(order){
			orderedFoodData=order;
		},
		getOrders: function(){
			return orderedFoodData;
		},
		isOrderAvailable: function(){
			if(orderedFoodData.length>0){
				return true;
			}else{
				return false;
			}
		}
	};

});