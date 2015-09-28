module.exports = ['$http', '$scope', '$state', 'User', 'Cart', function($http, $scope, $state, User, Cart) {

  // DEMO USER
  $scope.user = User.getUser();
  // GET ITEMS IN CART
  $scope.cart = Cart.getItems();
  // TOTAL ITEMS IN CART
  $scope.Badge = Cart.badge();
  $scope.Total = Cart.addTotal($scope.items); 
  $scope.removeItem = function(index){
    console.log(index);
    Cart.deleteItem(index);
    $scope.Badge = Cart.addTotalItems($scope.items);
    $scope.Total = Cart.addTotal($scope.items); 
  };
  $scope.updateItem = function(tea){
    tea.subTotal = tea.quantity * tea.price;
    $scope.Badge = Cart.addTotalItems($scope.items);
    $scope.Total = Cart.addTotal($scope.items); 
  };
  
}];
