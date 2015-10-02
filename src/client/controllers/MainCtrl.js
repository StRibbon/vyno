module.exports = function($scope, $state, Cart, User, $cookieStore) {
  
  $scope.closeSideNav = function(){
    $('.side-nav').sideNav('hide');
  }
  // ITEM SERVICES
  $scope.Badge = Cart.getTotalItemsInCart();
  
  //USER SERVICES
  $scope.user = User.getUser();

  // $scope.$watch(function(scope) { return scope.user },
  //   function(newValue, oldValue) {
  //     newValue = User.getUser();
  //   }
  // );
  // $scope.getLoggedInUser = function(){
  //   User.getUser();
  // }();

  $scope.loginUser = User.login;
  $scope.signUp = User.signup;
  $scope.logout = function(){
    User.logout();
    $scope.Badge = Cart.getTotalItemsInCart();
  }

  // $scope.loggedIn = $cookieStore.get(‘loggedin’);
  // if ($scope.loggedIn == “true”) {
  //   $scope.loggedOut = “”;
  // }
  // else {
  //   $scope.loggedOut = “true”;
  // }
};
