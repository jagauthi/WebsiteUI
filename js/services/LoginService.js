app.factory('loginService', ['$http', function($http) { 
  //return //$http.get('http://localhost:8080/getAccounts').then(success, error)
        //    .success(function(data) { 
        //      return data; 
        //    }) 
        //    .error(function(err) { 
        //      return err; 
        //    }); 
    
    return $http.get('http://localhost:8080/getAccounts').then(success, error);

        function success(response){
            return response; 
        }
        function error(error){
            return error; 
        }
}]);
