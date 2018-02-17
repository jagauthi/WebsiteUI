var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'index.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});