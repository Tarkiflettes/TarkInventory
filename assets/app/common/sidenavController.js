var sidenavController = tarkinventory.controller("SidenavController", function($scope, $http) {

  var vm = this;

  $http.get("/api/inventory", {params: {"limit": 1000}}).success(function(data){

    vm.inventories = data;
  
  });

});
