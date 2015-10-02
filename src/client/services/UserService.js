module.exports = function ($http, $state, $cookieStore) {
  var User = {};
  User.userData = {};
  User.getUser = function () {
    User.userData.data = $cookieStore.get('userData');
    console.log(User.userData.data);
    return User.userData.data; 
  }
  User.login = function(user) {
    $http.post('/api/users/authenticate', user).then(res => {
      console.log(res);    
      // User.userData = res;
      $cookieStore.put('userData', res.data.email);
      $state.go('items');
    });
  }
  User.signup = function(newUser) {
    $http.post('/api/users', newUser).then(res => {
      console.log(res);
      User.userData = res;
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
