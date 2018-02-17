
app.controller('MainController', function($scope, $http) {
    $http.get('http://localhost:8080/getAccounts').
        then(function(response) {
            $scope.myData = response.data;
        }, function(response) {
        //Error function
        $scope.content = "Something went wrong: " + response;
    });    
    
    $scope.login = function() {
        
        for(var i = 0; i < $scope.myData.length; i++) { 
            if ($scope.myData[i].value1 == $scope.name) {
                $scope.content = ":D Now what";
                $scope.lol = "hurp";
                //console.log("HEY!");
            }
            else {
                //console.log("lol");
            }
        }
    }
});