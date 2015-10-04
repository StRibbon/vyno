var app = angular.module('Vyno-App', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngCookies']);

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
        templateUrl: 'views/items-list.html',
        controller: 'ItemsListCtrl'
      })
      .state('itemDetails', {
        url: '/items/:itemId',
        templateUrl: 'views/item-details.html',
        controller: 'ItemDetailsCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'MainCtrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'views/confirmation.html',
        controller: 'ConfirmCtrl'
      });
  }
]);

// CONTROLLERS
app.controller('MainCtrl', require('./controllers/MainCtrl'));
app.controller('ItemsListCtrl', require('./controllers/ItemsListCtrl'));
app.controller('ItemDetailsCtrl', require('./controllers/ItemDetailsCtrl'));
app.controller('CheckoutCtrl', require('./controllers/CheckoutCtrl'));
app.controller('ConfirmCtrl', require('./controllers/ConfirmCtrl'));
// SERVICES
app.factory('UI', require('./services/UiService'));
app.factory('User', require('./services/UserService'));
app.factory('Cart', require('./services/CartService'));
app.factory('Order', require('./services/OrderService'));
app.factory('Map', require('./services/MapService'));
// DIRECTIVES
// app.directive('ngItems', require('./directives/ItemsDirective'));
// app.directive('ngConfirm', require('./directives/confirmDirective'));
