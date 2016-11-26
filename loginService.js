mymodal.factory('loginUsers', function($http){
	return{
		validateUser: function(id,pwd){

			$http.get('users.json').success(function(data){
				var flag=0;
				data.users.forEach(function(user){
					
					if(user.emailId===id && user.password===pwd){
						flag=1;
					}

				});
				if(flag===1){
						alert('success');
					}else{
						alert('invalid password');
					}
			});
		}
	};
})