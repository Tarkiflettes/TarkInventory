var HomeController = tarkinventory.controller("HomeController", function($scope, $rootScope, $http) {

  var vm = this;

  $http.get("/api/template", {params: {"limit": 1000}}).success(function(data){

    vm.templates = data;

    console.log(data);
  });


  $rootScope.title = "";
  $rootScope.subTitle = "";

})
