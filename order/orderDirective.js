mymodal.directive('myOrder', function(){
	return {
        restrict: 'E',
        scope:{},
        link: function(scope, element, attrs) {
        	scope.myvar=0;
        	scope.test=function(){
        		scope.myvar++;
        	}
        },
       
        template: '<span ng-click="test()">{{myvar}}</span>'
    }
});