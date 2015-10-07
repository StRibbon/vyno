module.exports = function($scope, $state, Cart, User, $cookieStore, $rootScope) {
  // CONFIRM USER LOGGED OUT ON LANDING
  $rootScope.isLoggedIn = false;
  // SIDE NAV UI 
  $scope.closeSideNav = function(){
    $('.side-nav').sideNav('hide');
  }
  // ITEM SERVICES
  $scope.Badge = Cart.getTotalItemsInCart();
  
  // GET USER INFO
  $scope.user = User.getUser();

  // LOGIN - USER SERVICE
  $scope.loginUser = function(user){
    $scope.userMessage = User.login(user);
    $scope.userMessage.then(function(textMessage)
    {
      $scope.userMessage = textMessage;
    });
    console.log($scope.userMessage);
  };

  // SIGNUP - USER SERVICE
  $scope.signUp = User.signup;

  // LOGOUT - USER SERVICE
  $scope.logout = function(){
    User.logout();
    $scope.Badge = Cart.getTotalItemsInCart();
  }
};
