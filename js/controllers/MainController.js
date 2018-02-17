
app.controller('MainController', function($scope, $http) {
    
    var myScope = $scope;
    var myHttp = $http;
    
    myScope.myData = {"test":1}
    
    $scope.login = function() {
        myHttp.get('http://localhost:8080/getAccount?user='+myScope.user)
            .then(function (response) {
                myScope.myData = response.data;
                if((myScope.user === myScope.myData.user) && myScope.pass === myScope.myData.pass) {
                    console.log("Login success!");
                }
        }, function (error) {
            myScope.content = "Something went wrong: " + error;
        });
    }
});