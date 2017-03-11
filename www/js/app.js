angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

   
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })
  .state('registro', {
    url: '/registro',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })
  .state('eventList', {
    url: '/evenList',
    templateUrl: 'templates/eventList.html',
    controller: 'firstCtrl'
  })


  .state('formEvent', {
    url: '/formEvent',
    templateUrl: 'templates/formEvent.html',
    controller: 'formCtrl'
  })

  
    .state('user', {
    url: '/user',
    templateUrl: 'templates/user.html',
    controller: 'userCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise("/");

})
.controller('formCtrl', function(){


})
.controller('registerCtrl', function(){

  
})
.controller('userCtrl', function( $scope ){
  $scope.users = [{
    "name" : "Federico López", 
    "image" : "http://images.iimg.in/c/569f4771c45d324bda8b4660-4-501-0-1453279096/google/user-icon-png-pnglogocom.img", 
    "star" : [{ 
      "image" : "/img/stars.jpg", 
      "number" : 5
    }]
  }];
  
  
})


.controller('firstCtrl',  ['$scope', '$http', '$state',
   function($scope, $http, $state){
    
  
      $scope.testDatabase = [{"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}, {"name": "Feria del pehito", "date" : "25 de Noviembre", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat totam rerum odit sequi soluta atque ex, possimus, error quaerat. Rem, ipsum, nihil! Architecto cupiditate aperiam officiis deserunt, ipsum dicta amet."}];

}])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('MainCtrl', function($scope, $state, $http) {
  $scope.data = {};

  $scope.submit = function(){
      var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';

      $http.post(link, {username : $scope.data.username, password : $scope.data.password}).then(function (res){
          $scope.response = res.data;
      });
  };
  console.log('MainCtrl');

  $scope.toIntro = function(){
    $state.go('intro');
  }
});
