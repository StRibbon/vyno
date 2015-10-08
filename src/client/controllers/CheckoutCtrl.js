module.exports = ['$http', '$scope', '$state', 'User', 'Cart', 'Order', '$cookieStore', '$cookies', '$rootScope', function($http, $scope, $state, User, Cart, Order, $cookieStore, $cookies, $rootScope) {
  
  if(!$rootScope.isLoggedIn){
    $state.go('items');
    // alert("You must log-in to checkout");
  }
  // GET USER
  $scope.user = User.getUser().data;
  // GET ITEMS IN CART
  // $scope.cart = Cart.getItems();
  $scope.cart = Cart.getMyCart();
  // TOTAL ITEMS IN CART
  $scope.Badge = Cart.getTotalItemsInCart();
  // TOTAL PRICE OF CART
  $scope.Total = Cart.addTotalPrice();
  // REMOVE ITEM FROM CART
  $scope.removeItem = function(index){
    Cart.deleteItem(index);
    $scope.cart = Cart.getMyCart();
    $scope.Badge = Cart.getTotalItemsInCart($scope.cart);
    $scope.Total = Cart.addTotalPrice($scope.cart);
    
  };
  
  // UPDATE ITEM QUANTITY
  $scope.updateItem = function(index, item){
    item.subTotal = item.quantity * item.price;
    Cart.updateItem(index, item);
    $scope.Badge = Cart.getTotalItemsInCart();
    $scope.Total = Cart.addTotalPrice($scope.cart);
  };

  //CONFIRM CONTROLS

  $scope.createOrder = function(){
     var newOrder = {};
     newOrder.user_id = $scope.user.id;
     Order.create(newOrder);
     // $state.go('confirmation');
  };
  // UI Service
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
     window.setTimeout(function () {
      google.maps.event.trigger(map, 'resize')}, 2000);
  });
  
}];
