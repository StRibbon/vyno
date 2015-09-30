module.exports = function($scope, Cart) {
  $scope.Badge = Cart.addTotalItems();
};
