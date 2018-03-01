var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'LoginController', 
      templateUrl: 'views/login.html' 
    }) 
    .when('/home', {
      controller: 'HomeController',
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


app.controller('MainController', function($scope) {
    
    var myScope = $scope;
    
    myScope.myData = {"CanChildSeeThis?":1}
    
});


app.controller('LoginController', function($scope, $location, $http) {
    
    var myScope = $scope;
    var myLocation = $location;
    var myHttp = $http;
    
    myScope.myData = {"LoginScreen":1}
    
    $scope.login = function() {
        myHttp.get('http://localhost:8080/getAccount?user='+myScope.user)
            .then(function (response) {
                myScope.myData = response.data;
                if((myScope.user === myScope.myData.user) && myScope.pass === myScope.myData.pass) {
                    console.log("Login success!");
                    myLocation.url('/home');
                }
        }, function (error) {
            myScope.content = "Something went wrong: " + error;
        });
    }
});


app.controller('HomeController', function($scope, $location, $http) {
    
    var myScope = $scope;
    var myHttp = $http;
    myScope.itemList = {}
    
    $scope.test = function() {
        myHttp.get('http://localhost:8080/items/getItems')
            .then(function (response) {
                myScope.itemList = response.data;
                if((myScope.user === myScope.myData.user) && myScope.pass === myScope.myData.pass) {
                    console.log("Login success!");
                }
        }, function (error) {
            myScope.content = "Something went wrong: " + error;
        });
    }
});