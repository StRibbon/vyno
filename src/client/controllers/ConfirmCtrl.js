module.exports = ['$http', '$scope', '$state', 'User', 'Cart', 'Order', '$cookieStore', '$cookies', '$stateParams', function($http, $scope, $state, User, Cart, Order, $cookieStore, $cookies, $stateParams) {
  // GET DEMO USER
  $scope.user = User.getUser();

  $scope.cart = Cart.getMyCart();
  $scope.Total = Cart.addTotalPrice();
  $scope.order = $cookieStore.get('orderInfo');
  $scope.ETA = $cookieStore.get('ETA');
  // var eta = Number(ETA.charAt(0));
  // setInterval(function() {
  //   if(eta == 1){
  //     eta = 'Your wine should arrive at any moment!';
  //     $scope.ETA = eta;
  //   }
  //   else if (eta > 0){
  //     eta -= 1;
  //     $scope.ETA = eta;
  //   } else {
  //     eta = 'Your wine should arrive any moment!';
  //     $scope.ETA = eta;
  //   }
  //     console.log(eta);
  // }, 1000);
  // $http.get('/api/orders/' + orderId ).then(res => {
  //   $scope.order = res.data;
  // });
  
}];
