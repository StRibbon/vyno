module.exports = ['$http', '$scope', '$state', 'User', 'Cart', 'Order', '$cookieStore', '$cookies', '$stateParams', function($http, $scope, $state, User, Cart, Order, $cookieStore, $cookies, $stateParams) {
  // GET DATA
  $scope.order = $cookieStore.get('orderInfo');
  $scope.user = User.getUser();
  $scope.cart = Cart.getMyCart();
  $scope.Total = Cart.addTotalPrice();
  $scope.ETA = $cookieStore.get('ETA');

}];
