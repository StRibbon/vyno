module.exports = ['$http', '$scope', '$state', 'User', 'Cart', function($http, $scope, $state, User, Cart) {

  // GET DEMO USER
  $scope.user = User.getUser();
  // GET ITEMS IN CART
  $scope.cart = Cart.getItems();
  // TOTAL ITEMS IN CART
  $scope.Badge = Cart.addTotalItems();
  // TOTAL PRICE OF CART
  $scope.Total = Cart.addTotalPrice($scope.cart);
  // REMOVE ITEM FROM CART
  $scope.removeItem = function(index){
    console.log(index);
    Cart.deleteItem(index);
    $scope.Badge = Cart.addTotalItems($scope.cart);
    $scope.Total = Cart.addTotalPrice($scope.cart); 
  };
  // UPDATE ITEM QUANTITY
  $scope.updateItem = function(item){
    item.subTotal = item.quantity * item.price;
    $scope.Badge = Cart.addTotalItems($scope.cart);
    $scope.Total = Cart.addTotalPrice($scope.cart); 
  };
  
}];
