module.exports = function ($http, $state, $cookieStore, $rootScope) {
  var User = {};
  User.userData = {};
  // GET USER DATA FROM COOKIE
  User.getUser = function () {
    User.userData.data = $cookieStore.get('userData');
    console.log(User.userData);
    return User.userData; 
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
  // LOGIN WITH CALLBACK
  User.login = function(user) {
    return $http.post('/api/users/authenticate', user).then(res => {
      debugger
      if(res.data.success == false){
        alert("Wrong password");
        return "Wrong password";
      }
      console.log(res);    
      // User.userData = res;
      $cookieStore.put('userData', res.data);
      $rootScope.isLoggedIn = true;
      $state.go('items');
      return "";
    });
  }

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
     $cookieStore.remove('token');
     $cookieStore.remove('userData');
     $cookieStore.remove('myCart');
     $cookieStore.remove('ETA');
     $cookieStore.remove('userAddress');
     $cookieStore.remove('totalPrice');
     $cookieStore.remove('orderInfo');
     $rootScope.isLoggedIn = false;
     $state.go('items');
  }
  // User.updateUser = function(user)
  //   $http.put('/api/users/'+ user.id, $scope.user).then(res => {
  
  // });

  // var User = {
  //   id: 2323,
  //   first_name: 'Stephen',
  //   last_name: 'Ribbon',
  //   address: { street: '448 Page St.', city:'San Francisco', post:'90077'}
  // }

  return User;
};
