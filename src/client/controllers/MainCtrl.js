module.exports = function($scope, $state, Cart, User) {
  
  $scope.closeSideNav = function(){
    $('.side-nav').sideNav('hide');
  }
  // ITEM SERVICES
  $scope.Badge = Cart.addTotalItems();
  
  //USER SERVICES
  // $scope.getLoggedInUser = function(){
  //   User.getUser().then(function(data){
  //     if(data){
  //       $scope.user = data;
  //     } else {
  //       $scope.error = "Not able to Login";
  //       console.log($scope.error);
  //     }
  //   })   
  // }();

  $scope.loginUser = User.login;
  $scope.signUp = User.signup;
  $scope.logout = User.logout;
};
