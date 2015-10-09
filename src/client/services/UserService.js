module.exports = function ($http, $state, $cookieStore, $rootScope) {
  var User = {};
  User.userData = {};
  // GET USER DATA FROM COOKIE
  User.getUser = function () {
    User.userData.data = $cookieStore.get('userData');
    if(User.userData.data){
      $rootScope.isLoggedIn = true;
      console.log(User.userData);
      return User.userData; 
    }   
  }     
  // BASIC LOGIN
  // User.login = function(user) {
  //   $http.post('/api/users/authenticate', user).then(res => {
  //     console.log(res);    
  //     // User.userData = res;
  //     $cookieStore.put('userData', res.data);
  //     $rootScope.isLoggedIn = true;
  //     $state.go('items');
  //   });
  // }
  // LOGIN WITH PROMISE
  User.login = function(user) {
    return $http.post('/api/users/authenticate', user).then(res => {
      if(res.data.success == false){
        Materialize.toast(res.data.message, 4000);
        return "";
      }
      console.log(res);    
      // User.userData = res;
      $cookieStore.put('userData', res.data);
      $rootScope.isLoggedIn = true;
      $state.go('items');
      return "";
    });
  }
  // USER SIGNUP
  User.signup = function(newUser) {
    $http.post('/api/users', newUser).then(res => {
      console.log(res);
      // User.userData = res;
      $cookieStore.put('userData', res.data);
      $rootScope.isLoggedIn = true;
      $state.go('items');
    });
  }
  // USER LOGOUT
  User.logout = function() {
    angular.forEach(["token", 'userData', 'userAddress', 'ETA', 'myCart', 'totalPrice', 'orderInfo'], 
      function(key){
        $cookieStore.remove(key);
      });
     $rootScope.isLoggedIn = false;
     $state.go('main');
  }
  return User;
};
