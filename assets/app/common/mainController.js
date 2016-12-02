var MainController = tarkinventory.controller("MainController", function($scope, $mdSidenav) {

  var vm = this;

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

});
