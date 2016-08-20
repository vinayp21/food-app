mymodal.service('sharedService', function($http, $q){
var currentTab = "food";

return{
 getCurrentTab : function(){
 	return currentTab;
 },
 setCurrentTab : function(tab){
 	currentTab= tab;
 },
 

};
});