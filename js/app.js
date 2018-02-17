var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'LoginController', 
      templateUrl: 'views/login.html' 
    }) 
    .when('/home', {
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

app.controller('LoginController', function($scope, $http) {
    
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


app.controller('MainController', function($scope, $http) {
    
    var myScope = $scope;
    var myHttp = $http;
    
    myScope.myData = {"test":1}
    
    $scope.test = function() {
        myHttp.get('http://localhost:8080/getAccount?user=asdf')
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