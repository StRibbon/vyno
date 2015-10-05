module.exports = ['$http', '$scope', '$state', 'User', 'Cart', 'Order', '$cookieStore', '$cookies', '$stateParams', function($http, $scope, $state, User, Cart, Order, $cookieStore, $cookies, $stateParams) {
  // GET DEMO USER
  $scope.user = User.getUser();

  $scope.cart = Cart.getMyCart();
  $scope.Total = Cart.addTotalPrice();
  $scope.order = $cookieStore.get('orderInfo');
  $scope.ETA = $cookieStore.get('ETA');
  // $http.get('/api/orders/' + orderId ).then(res => {
  //   $scope.order = res.data;
  // });
  
}];
