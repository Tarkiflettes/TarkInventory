var tarkinventory = angular.module("TarkInventory", 
    [
    'ui.router', 
    'ui.calendar', 
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons',
    'ngMaterialSidemenu'
    ]
    );

tarkinventory.config(
    function(
      $stateProvider, 
      $urlRouterProvider, 
      $locationProvider, 
      $urlMatcherFactoryProvider, 
      $mdThemingProvider,
      $mdIconProvider
      ) {

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      $urlMatcherFactoryProvider.caseInsensitive(true);
      $urlMatcherFactoryProvider.strictMode(false);

      $stateProvider
        .state('root', {
          views: {
            'sidenav': {
              templateUrl: 'app/common/sidenavView.html',
              controller: 'SidenavController',
              controllerAs: 'sidenav'
            },
            'header': {
              templateUrl: 'app/common/headerView.html',
              controller: 'HeaderController',
              controllerAs: 'header'
            },
            'content': {
              template: '<div ui-view></div>'
            }
          }
        })
      .state('root.home', {
        url: '/',
        templateUrl: 'app/home/homeView.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      state('root.inventory', {
        url: '/:inventory',
        templateUrl: 'app/inventory/inventoryView.html',
        controller: 'InventoryController',
        controllerAs: 'inventory'
      })
      ;

});
