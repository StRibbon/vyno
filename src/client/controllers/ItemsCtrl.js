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
  // DEMO USER
  $scope.user = User.getUser();
  // CART SERVICES
  $scope.addItem = function(quantity, item){
    Cart.addItem(quantity, item);
    $scope.Badge = Cart.badge();
  };
  
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
