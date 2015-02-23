/**
 * Created by lianglijiao on 2014/11/13.
 */
var app = angular.module('newsDemo',['ngRoute']);

function  newsRouteConfig($routeProvider) {
    $routeProvider.
        when('/',{
        controller:'ListController',
            templateUrl:'list.html'
    }).
        when('/detail/:id',{
        controller:'DetailController',
            templateUrl:'detail.html'
    }).
        when('/edit/:id',{
        controller:'EditController',
        templateUrl:'edit.html'
    }).

        when('/list',{
            controller:'ListController',
            templateUrl:'list.html'
    }).
        when('/add',{
          controller:'AddController',
            templateUrl:'add.html'
        }).
        otherwise({
            redirectTo:'/'
        });
};

app.config(newsRouteConfig);

   var newsList = [
       {
           id:'1',
           title:'title 1111',
           content:'content 11111111',
           date:new Date()
       },
       {
           id:'2',
           title:'title 2222',
           content:'content 22222222',
           date:new Date()
       },
       {
           id:'3',
           title:'title 3333',
           content:'content 33333333',
           date:new Date()
       },
       {
           id:'4',
           title:'title 4444',
           content:'content 44444444',
           date:new Date()
       },
       {
           id:'5',
           title:'title 5555',
           content:'content 55555555',
           date:new Date()
       },
       {
           id:'6',
           title:'title 6666',
           content:'content 6666666',
           date:new Date()
       },
       {
           id:'7',
           title:'title 7777',
           content:'content 77777777',
           date:new Date()
       }

   ];

app.controller('ListController',function($scope){
    $scope.newsList = newsList;
});


app.controller('DetailController',function($scope,$routeParams){
     $scope.news = newsList[$routeParams.id-1];
});

app.controller('EditController',function($scope, $routeParams, $location){
    $scope.news = newsList[$routeParams.id-1];
    $scope.update = function(){
        alert("nichulai !!!");

        console.log("ni chu lai !!!");
        newsList[$routeParams.id-1] = $scope.news;

        $location.path('list');
    }
});

app.controller('AddController',function($scope,$location){

    $scope.title = '';
    $scope.content = '';
    $scope.add = function(){
      newsList.push({
         id:newsList.length+1,
          title:$scope.title,
          content:$scope.content,
          date:new Date()
      });
        $location.path('list');
    }
});

