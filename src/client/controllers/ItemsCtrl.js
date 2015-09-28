module.exports = ['$http', '$scope', '$state', 'User', 'Cart', function($http, $scope, $state, User, Cart) {
  // GET ITEMS
  $http.get('/api/items').then(res => {
    $scope.items = res.data;
  });
  // CREATE ITEM
  $scope.submit = function(e) {
    e.preventDefault();
    $http.post('/api/items', $scope.newItem).then(res => {
      $scope.items.push(res.data);
      e.target.reset();
    });
  };

  // CART SERVICES
  $scope.addItem = function(quantity, item){
    Cart.addItem(quantity, item);
    $scope.Badge = Cart.addTotalItems();
  };
  
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
