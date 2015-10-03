module.exports = function ($http, $state, $cookieStore, $rootScope) {
  var User = {};
  User.userData = {};
  User.getUser = function () {
    User.userData.data = $cookieStore.get('userData');
    console.log(User.userData);
    return User.userData; 
  }
  User.login = function(user) {
    $http.post('/api/users/authenticate', user).then(res => {
      console.log(res);    
      // User.userData = res;
      $cookieStore.put('userData', res.data);
      $rootScope.isLoggedIn = true;
      $state.go('items');
    });
  }
  // User.login = function(user){
  //   debugger
  //   $http({
  //     method: 'POST',
  //     url: '/api/users/authenticate', user   
  //   }).then(function success(res){
  //       console.log(res);
  //       $cookieStore.put('userData', res.data.email);
  //       $rootScope.isLoggedIn = true;
  //       $state.go('items');
  //   }, function err(res){
  //       console.log(res);
  //   });
  // }
  User.signup = function(newUser) {
    $http.post('/api/users', newUser).then(res => {
      console.log(res);
      // User.userData = res;
      $cookieStore.put('userData', res.data);
      $rootScope.isLoggedIn = true;
      $state.go('items');
    });
  }
  User.logout = function() {
     $cookieStore.remove('token');
     $cookieStore.remove('userData');
     $cookieStore.remove('myCart');
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
