mymodal.service('menuService', function($http, $q){

return{
 getAllFoodOptions : function(){
 	var def = $q.defer();
	$http.get('menu/menuService.json').success(function(data){
			def.resolve(data);
		})
	.error(function(){
		def.reject("Failed to get data");
	})
		 return def.promise;
},

	getFoodOptionsByCategory: function(category){
		var def = $q.defer();
	$http.get('menu/menuService.json').success(function(data){
		categoryData=data.foodCategoryOptions;
		for ( var i=0;i<categoryData.length;i++){
			if(categoryData[i].category==category){
				data=categoryData[i];
			}
		}
			def.resolve(data);
		})
	.error(function(){
		def.reject("Failed to get data");
	})
		 return def.promise;
}
};
});