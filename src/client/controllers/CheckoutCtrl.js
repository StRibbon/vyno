module.exports = ['$http', '$scope', '$state', 'User', 'Cart', '$cookieStore', '$cookies', function($http, $scope, $state, User, Cart, $cookieStore, $cookies) {
  // GET DEMO USER
  $scope.user = User.getUser();
  // GET ITEMS IN CART
  // $scope.cart = Cart.getItems();
  $scope.cart = Cart.getMyCart();
  // TOTAL ITEMS IN CART
  $scope.Badge = Cart.getTotalItemsInCart();
  // TOTAL PRICE OF CART
  $scope.Total = Cart.addTotalPrice($scope.cart);
  // REMOVE ITEM FROM CART
  $scope.removeItem = function(index){
    console.log(index);
    Cart.deleteItem(index);
    $scope.Badge = Cart.getTotalItemsInCart($scope.cart);
    $scope.Total = Cart.addTotalPrice($scope.cart); 
  };
  // UPDATE ITEM QUANTITY
  $scope.updateItem = function(item){
    item.subTotal = item.quantity * item.price;
    $scope.Badge = Cart.getTotalItemsInCart($scope.cart);
    $scope.Total = Cart.addTotalPrice($scope.cart); 
  };
  
}];
