module.exports = ['$http', '$scope', '$state', 'User', 'Cart', 'Order', '$cookieStore', '$cookies', '$stateParams', function($http, $scope, $state, User, Cart, Order, $cookieStore, $cookies, $stateParams) {
  // GET DEMO USER
  $scope.user = User.getUser();

  $scope.cart = Cart.getMyCart();

  $scope.order = $cookieStore.get('orderInfo');
  // $http.get('/api/orders/' + orderId ).then(res => {
  //   $scope.order = res.data;
  // });
  
}];
