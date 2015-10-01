module.exports = function($scope, Cart, User) {
  $scope.Badge = Cart.addTotalItems();

  $scope.loginUser = User.login;
  $scope.signUp = User.signup;
};
