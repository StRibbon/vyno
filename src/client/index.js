var app = angular.module('Vyno-App', ['ui.router', 'ngAnimate']);

app.config([
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // routes
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('items', {
        url: '/items',
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .state('itemDetails', {
        url: '/items/:itemId',
        templateUrl: 'views/item-details.html',
        controller: 'ItemDetailsCtrl'
      });
  }
]);
// CONTROLLERS
app.controller('MainCtrl', require('./controllers/MainCtrl'));
app.controller('ItemsCtrl', require('./controllers/ItemsCtrl'));
app.controller('ItemDetailsCtrl', require('./controllers/ItemDetailsCtrl'));
// SERVICES
app.factory('User', require('./services/UserService'));
app.factory('Cart', require('./services/CartService'));
